import React from 'react'
import { PropTypes } from 'prop-types'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  let pages = pageNumbers
  let pageCount = pageNumbers.length
  if (pageNumbers.length > 7) {
    pageCount--
    pages = [1, currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3, pageNumbers[pageCount]]
  }

  return (
    <nav>
      <ul className='pagination'>
        {pages && pages.map(number => (
          <li key={number} className='page-item'>
            {number !== '...'
              ? <a style={{ backgroundColor: currentPage === number ? 'green' : 'unset' }} onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
              : <a style={{ backgroundColor: currentPage === number ? 'green' : 'unset' }} className='page-link'>
                {number}
              </a>
            }

          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  postsPerPage: PropTypes.array,
  currentPage: PropTypes.integer,
  totalPosts: PropTypes.integer,
  paginate: PropTypes.func
}

export default Pagination
