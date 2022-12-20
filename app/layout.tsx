import "./globals.css"; // These styles apply to every route in the application
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}
