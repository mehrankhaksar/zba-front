import localFont from "next/font/local";

export const iransans = localFont({
  src: [
    { path: "./IRANSans/IRANSans-Thin.woff2", weight: "100", style: "normal" },
    {
      path: "./IRANSans/IRANSans-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    { path: "./IRANSans/IRANSans-Light.woff2", weight: "300", style: "normal" },
    {
      path: "./IRANSans/IRANSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./IRANSans/IRANSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./IRANSans/IRANSans-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "./IRANSans/IRANSans-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./IRANSans/IRANSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    { path: "./IRANSans/IRANSans-Black.woff2", weight: "900", style: "normal" },
    {
      path: "./IRANSans/IRANSans-ExtraBlack.woff2",
      weight: "950",
      style: "normal",
    },
    {
      path: "./IRANSans/IRANSans-Heavy.woff2",
      weight: "1000",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-iransans",
});
