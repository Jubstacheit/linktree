import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jubstacheit - My Links",
  description: "Links and socials for Jubstacheit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white`}>{children}</body>
    </html>
  );
}
