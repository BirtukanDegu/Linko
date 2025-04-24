import type { Metadata } from "next";
import "./globals.css";
import { marcellus } from "@/fonts/font";


export const metadata: Metadata = {
  title: "Linko",
  description: "A social media app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
