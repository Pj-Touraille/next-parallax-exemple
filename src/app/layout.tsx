import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "@/styles/default.scss";
import { Providers } from "@/app/providers";
import Navbar from "./_components/Navbar/Navbar";

const oswald = Oswald({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qui lit vraiment le titre ?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
