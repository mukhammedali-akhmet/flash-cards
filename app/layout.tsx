import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./styles/globals.scss";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Flash Cards",
  description: "Practice your knowledge with flash cards"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>
        <Header />
        <div>
          <Sidebar />
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
