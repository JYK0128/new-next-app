import localFont from "next/font/local";

const pretendard = localFont({
  variable: "--font-pretendard",
  src: "../fonts/pretendard-100 900.woff2",
  weight: "100 900",
});

const notoSans = localFont({
  variable: "--font-noto-sans-kr",
  src: "../fonts/noto-sans-kr-100 900.woff2",
  weight: "100 900",
});

const notoSerif = localFont({
  variable: "--font-noto-serif-kr",
  src: "../fonts/noto-serif-kr-200 900.woff2",
  weight: "200 900",
});

const nanumGothic = localFont({
  variable: "--font-nanum-gothic",
  src: [
    {
      path: "../fonts/nanum-gothic-400.woff2",
      weight: "400",
    },
    {
      path: "../fonts/nanum-gothic-700.woff2",
      weight: "700",
    },
    {
      path: "../fonts/nanum-gothic-800.woff2",
      weight: "800",
    },
  ],
});

const nanumMyeongjo = localFont({
  variable: "--font-nanum-myoujo",
  src: [
    {
      path: "../fonts/nanum-myeongjo-400.woff2",
      weight: "400",
    },
    {
      path: "../fonts/nanum-myeongjo-700.woff2",
      weight: "700",
    },
    {
      path: "../fonts/nanum-myeongjo-800.woff2",
      weight: "800",
    },
  ],
});

const nanumPenScript = localFont({
  variable: "--font-nanum-pen-script",
  src: [
    {
      path: "../fonts/nanum-pen-script-400.woff2",
      weight: "400",
    },
  ],
});

const nanumBrushScript = localFont({
  variable: "--font-nanum-brush-script",
  src: [
    {
      path: "../fonts/nanum-brush-script-400.woff2",
      weight: "400",
    },
  ],
});

const nanumGothicCoding = localFont({
  variable: "--font-nanum-gothic-coding",
  src: [
    {
      path: "../fonts/nanum-gothic-coding-400.woff2",
      weight: "400",
    },
    {
      path: "../fonts/nanum-gothic-coding-700.woff2",
      weight: "700",
    },
  ],
});

export const fonts = [
  pretendard,
  notoSans,
  notoSerif,
  nanumGothic,
  nanumMyeongjo,
  nanumPenScript,
  nanumBrushScript,
  nanumGothicCoding,
];
