import "app/globals.css"; // These styles apply to every route in the application
import Head from "app/head";
import { Inter } from "@next/font/google";
import Logo from "components/Logo";
import SearchBar from "components/SearchBar";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"], // [normal, semi-bold, bold]
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-warning-200`}>
      <Head />
      <body>
        <main className="max-w-full w-[1368px] mx-auto flex flex-col gap-12 py-12 px-4">
          <Logo />
          <SearchBar />
          {children}
        </main>
      </body>
    </html>
  );
}
