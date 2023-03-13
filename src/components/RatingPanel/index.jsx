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
      <div className="flex flex-row justify-around -mt-[50px] -ml-1 mb-6 gap-2">
        {rating.map(item => {
          return (
            <div>
              <RatingButton item={item} setChoosed={setChoosed} choosed={choosed} />
            </div>
          )
        })}
      </div>
      <div className="">
        <button
          className="bg-orange rounded-full w-[340px] mt-2 h-[45px] tracking-widest  text-white  font-overpass-semibold hover:text-orange hover:bg-white  "
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
