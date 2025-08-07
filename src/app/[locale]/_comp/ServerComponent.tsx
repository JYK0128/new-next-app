import { getTranslations } from "next-intl/server";


export async function ServerComponent() {
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
