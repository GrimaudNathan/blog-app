import axios from 'axios'

const apiKey = process.env.API_KEY

export const fetchArticles = async (page: number) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&page=${page}&apiKey=6c026f6fc99e479ca1b017e0ad337ffe`,
  )
  return response.data.articles
}