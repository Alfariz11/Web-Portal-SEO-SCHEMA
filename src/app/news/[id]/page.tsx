// src/app/news/[id]/page.tsx
import { fetchNews, NewsArticle } from "../../../../lib/fetchNews";
import Head from "next/head";
import ClientWrapper from "../../../../components/ClientWrapper"; // untuk PerformanceMetrics

interface NewsDetailProps {
  params: { id: string };
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const id = parseInt(params?.id ?? "0");

  const news: NewsArticle[] = await fetchNews();
  const article = news[id];

  if (!article) {
    return <p>Berita tidak ditemukan.</p>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.image],
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "News Portal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://via.placeholder.com/150"
      }
    },
    "description": article.content,
    "mainEntityOfPage": `https://newsportal.com/news/${id}`
  };

  return (
    <>
      <Head>
        <title>{article.title} - News Portal</title>
        <meta name="description" content={article.content} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://newsportal.com/news/${id}`} />
        <link rel="canonical" href={`https://newsportal.com/news/${id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <ClientWrapper />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <img src={article.image} alt={article.title} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
          <div className="flex flex-col justify-between">
            <p className="text-sm text-gray-500">Sumber: {article.source} | Penulis: {article.author}</p>
            <p className="text-sm text-gray-500">Dipublikasikan: {new Date(article.publishedAt).toLocaleString()}</p>
            <p className="mt-4 text-lg">{article.content}</p>
            <a href={article.url} target="_blank" className="mt-4 text-blue-500 underline">
              Baca berita asli
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
