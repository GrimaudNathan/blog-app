import Head from 'next/head'
import ArticleCard from './components/articleCard'
import { fetchArticles } from './api/articles'
import { useState, useEffect } from 'react'

type Article = {
  title: string
  urlToImage: string
  description: string
  publishedAt: string
  content: string
  url: string
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const maxPage = 5

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true)
      const response = await fetchArticles(page)
      if (page === 1) setArticles(response)
      else setArticles((prevArticles) => [...prevArticles, ...response])
      setLoading(false)
    }

    if (page <= maxPage) {
      getArticles()
    }
  }, [page])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>News Feed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="my-20">
        <h1 className="text-4xl font-bold">Blog News</h1>
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((article, index) => (
            <ArticleCard article={article} key={index} />
          ))}
        </div>
        {loading && (
          <div className="mt-5 flex justify-center">
            <svg
              className="h-8 w-8 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </main>
    </>
  )
}
