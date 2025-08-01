import { getTranslations } from "next-intl/server";


async function fetchData() {
  // 2초 delay 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 1000 * 2));
  return "데이터 로딩 완료!";
}

export async function ServerComponent() {
  const data = await fetchData();
  const t = await getTranslations();

  return (
    <div>
      <div>서버 컴포넌트</div>
      <div>
        다국어
        {t("welcome")}
      </div>
      <div>
        server:
        {process.env.NEXT_ENV}
      </div>
      <div>
        client:
        {process.env.NEXT_PUBLIC_ENV}
      </div>
    </div>
  );
}
