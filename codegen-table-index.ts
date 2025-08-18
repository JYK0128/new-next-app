import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

/**
 * SQL 파일 내용을 읽어 metadata 컬럼에 대한 GIN 인덱스 생성 구문을 추가합니다.
 * 이 함수는 스크립트를 여러 번 실행해도 구문이 중복 추가되지 않도록 방지합니다.
 * @param {string} sqlContent - 원본 SQL 파일의 내용
 * @returns {string} - 인덱스 생성 구문이 추가된 SQL 내용
 */
function addGinIndexesSafely(sqlContent: string) {
  // 정규표현식을 사용하여 CREATE TABLE 블록과, 그 뒤에 올 수도 있는 해당 INDEX 블록까지 찾습니다.
  // 그룹 설명:
  // 1. (CREATE TABLE ...;): CREATE TABLE 블록 전체를 캡처합니다.
  // 2. (\w+): 테이블 이름을 캡처합니다. 이 이름은 아래 인덱스 이름 확인에 사용됩니다.
  // 3. (...)? : CREATE INDEX 블록을 *선택적으로* 캡처합니다. 이미 존재하면 이 그룹에 내용이 담깁니다.
  const regex = /(CREATE TABLE IF NOT EXISTS (\w+) \([\s\S]*?\);)(\s*CREATE INDEX IF NOT EXISTS idx_\2_metadata_gin ON \2 USING GIN \(metadata\);)?/gi;

  return sqlContent.replace(regex, (
    match,                 // 정규식에 매칭된 전체 문자열
    tableBlock,            // 그룹 1: CREATE TABLE 블록
    tableName,             // 그룹 2: 테이블 이름
    existingIndexBlock,     // 그룹 3: 이미 존재하는 CREATE INDEX 블록 (없으면 undefined)
  ) => {
    // 먼저, 해당 테이블 블록에 metadata(jsonb) 컬럼이 있는지 확인합니다.
    const hasMetadataJsonb = /\bmetadata\s+jsonb\b/i.test(tableBlock);

    // metadata 컬럼이 없거나, 이미 인덱스 구문이 존재하는 경우에는 원본 그대로 반환합니다.
    if (!hasMetadataJsonb || existingIndexBlock) {
      return match; // 변경 없음
    }

    // metadata 컬럼이 있고, 인덱스 구문이 없는 경우에만 새로 추가합니다.
    const indexStatement = `CREATE INDEX IF NOT EXISTS idx_${tableName}_metadata_gin ON ${tableName} USING GIN (metadata);`;

    // 기존 테이블 블록 바로 아래에 인덱스 구문을 붙여서 반환합니다.
    // 마지막에 개행(\n)을 추가하여 가독성을 높입니다.
    return `${tableBlock}\n${indexStatement}`;
  });
}

/**
 * 메인 실행 함수
 */
async function main() {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const SQL_FILE_PATH = path.join(__dirname, ".resources", "ddl.sql");

    const originalSql = await fs.readFile(SQL_FILE_PATH, "utf8");
    const modifiedSql = addGinIndexesSafely(originalSql);

    if (originalSql !== modifiedSql) {
      await fs.writeFile(SQL_FILE_PATH, modifiedSql, "utf8");
      console.log(`✅ GIN 인덱스가 ${path.basename(SQL_FILE_PATH)} 파일에 추가 및 덮어쓰기 되었습니다.`);
    }
    else {
      console.log(`ℹ️ ${path.basename(SQL_FILE_PATH)} 파일은 이미 최신 상태입니다. 변경사항이 없습니다.`);
    }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`파일 처리 중 오류가 발생했습니다: ${message}`);
    process.exit(1);
  }
}

// 메인 함수 실행
main();
