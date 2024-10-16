import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project-Photos",
  description: "Project made for Assab Vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat antialiased h-screen w-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
