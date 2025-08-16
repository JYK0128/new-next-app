import { Nanum_Brush_Script, Nanum_Gothic, Nanum_Gothic_Coding, Nanum_Myeongjo, Nanum_Pen_Script, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import localFont from "next/font/local";

const pretendard = localFont({
  variable: "--font-pretendard",
  src: "../fonts/Pretendard.woff2",
  weight: "400 800",
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const nanumGothic = Nanum_Gothic({
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myoujo",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const nanumPenScript = Nanum_Pen_Script({
  variable: "--font-nanum-pen-script",
  subsets: ["latin"],
  weight: ["400"],
});

const nanumBrushScript = Nanum_Brush_Script({
  variable: "--font-nanum-brush-script",
  subsets: ["latin"],
  weight: ["400"],
});

const nanumGothicCoding = Nanum_Gothic_Coding({
  variable: "--font-nanum-gothic-coding",
  subsets: ["latin"],
  weight: ["400", "700"],
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
