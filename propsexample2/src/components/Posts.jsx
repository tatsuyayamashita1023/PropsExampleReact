import React from 'react'

export const Posts = ({id,name,age}) => {
  return (
    <div>
      <span>私の名前は- {name} - で {age}歳です。idは{id} </span>
    </div>
  )
}

