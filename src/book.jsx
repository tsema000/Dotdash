import React from 'react'

export default function book({dat}) {

  return (
    <div class='grid'>
        <img src={dat.imageUrl} alt="" />
        <div class='book-title-auth'>
            <p>Author: {dat.authorName}</p>
            <p>Title : {dat.title}</p>
        </div>
    </div>
  )
}
