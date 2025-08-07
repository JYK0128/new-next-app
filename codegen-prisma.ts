/* eslint-disable */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { promisify } from "util";

const toCamelCase = (str: string): string =>
  str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

const toPascalCase = (str: string): string => {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const pluralize = (word: string): string => {
  if (/[^aeiou]y$/i.test(word)) return word.replace(/y$/i, "ies");
  if (/(s|sh|ch|x|z)$/i.test(word)) return word + "es";
  return word + "s";
};

const camelCaseInBrackets = (
  str: string,
  fieldMap: Record<string, string>,
): string =>
  str.replace(/\[([^\]]+)]/g, (_, content: string) => {
    const fields = content.split(",").map((f) => f.trim());
    const converted = fields.map((f) => fieldMap[f] || toCamelCase(f));
    return `[${converted.join(", ")}]`;
  });

function convertSchema(schema: string): string {
  const lines = schema.split("\n");
  let output = "";
  let inModel = false;
  let modelName = "";
  let fieldMap: Record<string, string> = {};
  let fields: { indent: string, name: string, type: string, rest: string }[] = [];
  let extras: string[] = [];

  for (const line of lines) {
    const modelMatch = line.match(/^(\s*)model\s+(\w+)\s*{/);
    if (modelMatch) {
      inModel = true;
      modelName = modelMatch[2];
      fieldMap = {};
      fields = [];
      extras = [];
      output += `${modelMatch[1]}model ${toPascalCase(modelName)} {\n`;
      continue;
    }

    if (inModel && line.trim() === "}") {
      for (const f of fields) {
        output += `${f.indent}${f.name} ${f.type} ${f.rest}\n`;
      }

      for (const extra of extras) {
        output += camelCaseInBrackets(extra, fieldMap) + "\n";
      }

      const hasModelMap = fields.some((f) => f.rest.includes("@@map")) || extras.some((l) => l.includes("@@map"));
      if (!hasModelMap) {
        output += `  @@map("${modelName}")\n`;
      }

      output += "}\n";
      inModel = false;
      continue;
    }

    if (inModel) {
      const match = line.match(/^(\s*)(\w+)\s+(\S+)(.*)$/);
      if (match) {
        const [_, indent, original, type, rest] = match;
        let name = toCamelCase(original);
        if (type.endsWith("[]")) name = pluralize(name);

        const isRelation = rest.includes("@relation") || type.endsWith("[]");
        const mappedRest = isRelation ? rest.trim() : `${rest.trim()} @map("${original}")`.trim();
        fieldMap[original] = name;

        fields.push({
          indent,
          name,
          type: toPascalCase(type),
          rest: camelCaseInBrackets(mappedRest, fieldMap),
        });
      }
      else {
        extras.push(line);
      }
    }
    else {
      output += line + "\n";
    }
  }

  return output.trimEnd() + "\n";
}

async function main() {
  const execAsync = promisify(exec);
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourcePath = path.join(__dirname, "prisma", "schema.base.prisma");
  const schemaPath = path.join(__dirname, "prisma", "schema.prisma");

  try {
    /* Prisma Model 초기화 */
    await fs.copyFile(sourcePath, schemaPath);
    console.log("✅ Prisma - Model 초기화 완료!");

    /* DB 동기화 */
    await execAsync('prisma db pull');
    console.log("✅ Prisma - DB 동기화 완료!");

    /* Prisma 스키마 변경 */
    const original = await fs.readFile(schemaPath, "utf8");
    const converted = convertSchema(original);
    await fs.writeFile(schemaPath, converted, "utf8");
    console.log("✅ Prisma - Schema 변환 완료!");

    /* Prisma 스키마 검사 */
    await execAsync(`prisma format --schema=${schemaPath}`);
    console.log("✅ Prisma - Format 완료!");
    console.log("✨ prisma.schema ➜ ", schemaPath);

    /* Prisma Client 생성 */
    await execAsync(`prisma generate`);
    console.log("🎉 Prisma - Client 생성 완료!");
  }
  catch (err) {
    console.error("❌ 에러 발생:", err);
  }
}

main();
