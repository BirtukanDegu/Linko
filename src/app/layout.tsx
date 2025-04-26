import type { Metadata } from "next";
import "./globals.css";
import { marcellus } from "@/fonts/font";
import CustomProvider from "@/providers/customProvider";


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
        className={`${marcellus.className} antialiased scrollbar`}
      >
        <CustomProvider>
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
