import { formatDate } from '../../utils/utils'

type Article = {
  title: string
  urlToImage: string
  description: string
  publishedAt: string
  content: string
  url: string
}

export default function Modal({ article, closeModal }: ModalProps) {
  return (
    <>
      <div className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center">
        <div
          className="fixed left-0 top-0 z-10 h-full w-full bg-gray-800 opacity-50"
          onClick={closeModal}
        ></div>
        <div className="relative z-20 w-1/2 rounded-lg bg-gray-900 p-8 shadow-lg">
          <button className="absolute right-0 top-0 mr-4 mt-4" onClick={closeModal}>
            &times;
          </button>
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p className="mt-4 text-gray-400">
            {formatDate(article.publishedAt) || 'Publication date not available'}
          </p>
          <img
            src={article.urlToImage}
            alt="placeholder"
            className="mt-4 h-80 w-full rounded-md object-cover"
          />
          <p className="mt-4">{article.description || 'Description not available'}</p>
          <p className="mt-4">{article.content || 'Content not available'}</p>
          <a
            className="mt-4 inline-flex items-center space-x-1 rounded-2xl border-2 border-gray-50 px-4 py-2 text-lg font-semibold text-gray-50 transition hover:bg-gray-800"
            href={article.url}
            target="_blank"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
            >
              <path
                d="M7.751 7c.412 0 .747.334.747.747a.74.74 0 01-.64.734l-.105.006h-.769l-.108.004-.128.009c-.646 0-1.178.491-1.242 1.12l-.006.128v7.502c0 .647.492 1.18 1.122 1.244l.128.006h7.498a1.25 1.25 0 001.243-1.122l.007-1.128a.75.75 0 011.5 0v1a2.75 2.75 0 01-2.583 2.745l-.167.005H6.75a2.75 2.75 0 01-2.745-2.582L4 17.25V9.748A2.748 2.748 0 016.748 7H7.75zm11.497-3a.75.75 0 01.75.75v7a.75.75 0 11-1.5 0V6.559L12 13.059a.75.75 0 01-1.06-1.061L17.435 5.5h-5.188a.75.75 0 110-1.5h7z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>Read post</span>
          </a>
        </div>
      </div>
      )
    </>
  )
}

interface ModalProps {
  article: Article
  closeModal: () => void
}
