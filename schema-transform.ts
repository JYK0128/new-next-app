/* eslint-disable */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      const maxFieldLen = Math.max(...fields.map((f) => f.name.length), 0);
      const maxTypeLen = Math.max(...fields.map((f) => f.type.length), 0);

      for (const f of fields) {
        const namePad = " ".repeat(maxFieldLen - f.name.length + 2);
        const typePad = " ".repeat(maxTypeLen - f.type.length + 2);
        output += `${f.indent}${f.name}${namePad}${f.type}${typePad}${f.rest}\n`;
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
  const inputPath = path.join(__dirname, "prisma", "schema.prisma");
  const outputPath = path.join(__dirname, "prisma", "schema.formatted.prisma");

  try {
    const original = await fs.readFile(inputPath, "utf8");
    const converted = convertSchema(original);
    await fs.writeFile(outputPath, converted, "utf8");
    console.log("✅ 변환 완료! ➜", outputPath);
  }
  catch (err) {
    console.error("❌ 에러 발생:", err);
  }
}

main();
