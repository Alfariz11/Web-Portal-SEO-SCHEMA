// app/page.tsx
import Link from "next/link";
import { fetchNews, NewsArticle } from "../../lib/fetchNews";

export default async function Home() {
  const news: NewsArticle[] = await fetchNews();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Berita Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.length > 0 ? (
          news.map((item: NewsArticle, index: number) => (
            <Link href={`/news/${index}`} key={index}>
              <div className="border rounded-lg p-4 hover:bg-gray-100">
                <img src={item.image} alt="news" className="w-full h-40 object-cover" />
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
  );
}
