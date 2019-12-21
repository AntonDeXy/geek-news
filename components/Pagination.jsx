import React from 'react'
import { PropTypes } from 'prop-types'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a style={{ backgroundColor: currentPage === number ? 'green' : 'unset' }} onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
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
