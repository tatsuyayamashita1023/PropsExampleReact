import React from 'react'

export const CategoriesView = ({data}) => {
  return (
    <div>
      {data.map((datamap,index) => {
        return(
            <span key={index}>{datamap}</span>
        )
      })}
    </div>
  )
}


