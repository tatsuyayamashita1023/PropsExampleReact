import React from 'react'

export const Card2 = ({title,comment,className}) => {
  return (
    <div className={className}>
            <p>タイトル：{title}</p>
      <p>一言：{comment}</p>
    </div>
  )
}


