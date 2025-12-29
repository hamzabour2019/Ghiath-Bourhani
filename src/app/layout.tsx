import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghiath Bourhani",
  description: "Integrated Software Solutions Since 2001",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
