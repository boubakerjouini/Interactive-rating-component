import React from 'react'

const RatingButton = ({ item, setChoosed, choosed }) => {
  return (
    <button
      className={` rounded-full w-[50px] h-[50px]  ${
        choosed !== item
          ? 'bg-secondary-medium-1 hover:text-white hover:bg-secondary text-secondary'
          : 'bg-orange text-white '
      } `}
      onClick={() => {
        setChoosed(item)
      }}
    >
      {item}
    </button>
  )
}

export default RatingButton
