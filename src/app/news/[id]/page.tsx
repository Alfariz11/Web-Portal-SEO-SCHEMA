// app/news/[id]/page.tsx
import { fetchNews, NewsArticle } from "../../../../lib/fetchNews";

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const news: NewsArticle[] = await fetchNews();
  const article = news[parseInt(params.id)];

  if (!article) {
    return <p>Berita tidak ditemukan.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <img src={article.image} alt="news" className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
        <div className="flex flex-col justify-between">
          <p className="text-sm text-gray-500">
            Sumber: {article.source} | Penulis: {article.author}
          </p>
          <p className="text-sm text-gray-500">Dipublikasikan pada: {new Date(article.publishedAt).toLocaleString()}</p>
          <p className="mt-4 text-lg">{article.content}</p>
          <a href={article.url} target="_blank" className="mt-4 text-blue-500 underline">
            Baca berita asli
          </a>
        </div>
      </div>
    </div>
  );
}
