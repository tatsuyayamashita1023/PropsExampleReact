import React from 'react'

export const Card = ({title, comment}) => {
  return (
    <div>
      <p>タイトル：{title}</p>
      <p>一言：{comment}</p>
    </div>
  )
}

