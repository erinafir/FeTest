import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Front End Technical Test",
  description: "Erina Firdausy's Front End Technical Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={workSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
