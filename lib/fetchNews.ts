// lib/fetchNews.ts
import axios from "axios";

export interface NewsArticle {
  title: string;
  image: string;
  source: string;
  content: string;
  url: string;
  publishedAt: string;
  author: string;
}

export async function fetchNews(): Promise<NewsArticle[]> {
  const sources = [
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`,
    `https://gnews.io/api/v4/top-headlines?country=us&token=${process.env.GNEWS_API_KEY}`,
    `https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.CURRENTS_API_KEY}`,
  ];

  const responses = await Promise.allSettled(
    sources.map((url) => axios.get(url).catch(() => null))
  );

  const news: NewsArticle[] = [];

  responses.forEach((res) => {
    if (res.status === "fulfilled" && res.value?.data?.articles) {
      news.push(
        ...res.value.data.articles.map((article: any) => ({
          title: article.title || "No Title",
          image: article.urlToImage || article.image || "https://via.placeholder.com/400",
          source: article.source?.name || "Unknown",
          content: article.content || article.description || "No content available.",
          url: article.url,
          publishedAt: article.publishedAt || new Date().toISOString(),
          author: article.author || "Unknown Author",
        }))
      );
    }
  });

  return news;
}
