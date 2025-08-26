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

## Auth.js

- signIn, signOut이 클라이언트 방식, 서버 방식이 있음

클라이언트 방식

```js
  const handleLogin = () => {
    startTransition(async () => {
      const res = await signIn("keycloak", {
        redirect: false,
        callbackUrl: "http://localhost:3000/ko",
      });

      // 인증계 redirect 최종결과 URL
      // (로그인 페이지/로그아웃 결과페이지)
      if (res?.url) {
        window.location.href = res.url;
      }
    });
  };
```

서버 방식

```js
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
});

===
// form action
async () => {
  // 인증계 프로세스 진행
  await signIn();
}
```

- NextAuth 생성 시, callback / events 로 전처리/후처리 가능

```js
callbacks: {
  async signIn(user, account, profile) {
    // 로그인 허용 여부 결정
    if (user.email.endsWith('@example.com')) {
      return true;
    }
    return false;
  },
  async session({ session, token }) {
    // 세션에 커스텀 데이터 추가
    session.user.role = token.role;
    return session;
  }
},

events: {
  async signIn(message) {
    // 로그인 성공 후 외부 로그 시스템에 기록
    console.log('User signed in:', message.user.email);
  },
  async signOut(message) {
    // 로그아웃 이벤트 처리
    console.log('User signed out:', message.session.user.email);
  }
}
```

## NGINX PROXY - NEXTJS

``` nginx.conf
    // proxy 추가조건
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
```
