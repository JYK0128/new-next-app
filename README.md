# 개요

## 프로젝트 준비

```bash
  pnpm i
  pnpm prisma:gen
  pnpm graphql:gen
```

## 프로젝트 개발

```bash
  pnpm dev
```

## trpc vs gql 비교

trpc 특징

- input, output 구성
- 업무 분장 명확

graphql 특징

- 스키마(input, output)
- 쿼리(gql('...'))
-> 업무 분장 미흡: why? client에서 query를 너무 깊게 관여
-> Deep Nested Query 이슈
