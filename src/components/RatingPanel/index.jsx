import React from 'react'
import RatingButton from '../RatingButton'

const RatingPanel = ({ ratingValue, setRetingValue }) => {
  let rating = [1, 2, 3, 4, 5]
  let [choosed, setChoosed] = React.useState(0)

  const handleRating = () => {
    setRetingValue(choosed)
  }

  return (
    <>
      <div className="flex flex-row justify-between -mt-12 mb-6">
        {rating.map(item => {
          return <RatingButton item={item} setChoosed={setChoosed} choosed={choosed} />
        })}
      </div>
      <div className="">
        <button
          className="bg-orange rounded-full w-full tracking-widest  text-white h-10 font-overpass-semibold hover:text-orange hover:bg-white "
          onClick={() => {
            handleRating()
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  )
}

export default RatingPanel
