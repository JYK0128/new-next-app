import { getTranslations } from "next-intl/server";

async function fetchData() {
  // 2초 delay 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 1000 * 2));
  if (Math.random() > 0.5) {
    throw Error("hi");
  }
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
        node:
        {process.env.NODE_ENV}
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
