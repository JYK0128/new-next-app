import "swagger-ui-react/swagger-ui.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
