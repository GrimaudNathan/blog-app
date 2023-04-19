import { useState } from 'react'
import Modal from './Modal'
import { formatDate } from '../../utils/utils'

type Article = {
  title: string
  urlToImage: string
  description: string
  publishedAt: string
  content: string
  url: string
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <div
        className="overflow-hidden rounded-lg border border-gray-600 bg-gray-800 px-4 py-6 hover:cursor-pointer hover:border-gray-500"
        onClick={openModal}
      >
        <h2 className="line-clamp-3 overflow-hidden text-ellipsis text-xl font-bold">
          {article.title}
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          {formatDate(article.publishedAt) || 'Publication date not available'}
        </p>
        <div className="mt-2 h-40 w-full overflow-hidden rounded-md">
          <img
            src={article.urlToImage || '/placeholder.jpeg'}
            alt="placeholder"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal article={article} closeModal={closeModal} />
      )}
    </>
  )
}

interface ArticleCardProps {
  article: Article
}
