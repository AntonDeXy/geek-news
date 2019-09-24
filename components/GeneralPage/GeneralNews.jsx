import React from 'react'
import img from '../../static/code.jpg'

const GeneralNew = () => {
  return (
    <div className="GeneralNew">
      <div className="img">
        <img src={img} alt=""/>
      </div>
      <div className="articleDesc">
        <h2 className="title">Title</h2>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati amet laborum quas id cumque officiis nam velit aspernatur illo.</span>
      </div>
    </div>
  )
}

export default GeneralNew