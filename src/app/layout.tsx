// app/layout.tsx
import "./globals.css";
import Navbar from "../../components/Navbar";
import Providers from "../../components/Providers";
import ToastProvider from "../../components/ToastProvider";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="berita terkini, portal berita, berita dunia, berita indonesia" />
      </Head>
      <body className="bg-gray-50 text-gray-900">
        <Providers>
          <Navbar />
          <ToastProvider />
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}