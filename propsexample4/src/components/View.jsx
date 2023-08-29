import React from 'react'

export const View = ({anime}) => {
  return (
    <div className="animelist">
        <span>アニメ一覧</span>
      {anime.map((anime) => {
        return(
            <ul key={anime.title} className="animeitem">
                <li>アニメ名：{anime.title} </li>
                <li>カテゴリ:{anime.category}</li>
                <li>一言：{anime.comment}</li>
            </ul>
        )
      })}
    </div>
  )
}


