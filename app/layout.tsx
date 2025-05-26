import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";

const sp = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Estrada",
  description: "Full Stack Developer view projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sp.className}  flex flex-col items-center bg-[url('/imgs/stars.png')] bg-center bg-no-repeat w-full overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
