import Head from "next/head";
import Link from "next/link";
import { fetchNews, NewsArticle } from "../../lib/fetchNews";
import PerformanceMetrics from "../../components/PerformanceMetrics";

export default async function Home() {
  const news: NewsArticle[] = await fetchNews();

  return (
    <>
      <Head>
        <title>Berita Terkini Hari Ini - News Portal</title>
        <meta name="description" content="Baca berita terbaru dan terpercaya dari berbagai sumber di News Portal." />
        <meta name="keywords" content="berita, news, terkini, politik, ekonomi, dunia, portal" />
        <link rel="canonical" href="https://newsportal.com/" />
        <meta property="og:title" content="News Portal - Portal Berita Terkini" />
        <meta property="og:description" content="Dapatkan berita terupdate setiap hari dari berbagai sumber resmi." />
        <meta property="og:url" content="https://newsportal.com/" />
        <meta property="og:image" content="https://newsportal.com/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "News Portal",
              "url": "https://newsportal.com",
              "logo": "https://newsportal.com/logo.png",
              "sameAs": [
                "https://twitter.com/newsportal",
                "https://www.facebook.com/newsportal"
              ]
            }),
          }}
        />
      </Head>

      <PerformanceMetrics />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Daftar Berita Utama</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.length > 0 ? (
            news.map((item: NewsArticle, index: number) => (
              <Link href={`/news/${index}`} key={index}>
                <div className="border rounded-lg p-4 hover:bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.source}</p>
                  <p className="text-xs text-gray-500">{new Date(item.publishedAt).toLocaleString()}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada berita yang tersedia.</p>
          )}
        </div>
      </div>
    </>
  );
}
