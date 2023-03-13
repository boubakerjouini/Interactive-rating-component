import React from 'react'
import icon from '../../assets/icon-star.svg'
import illusration from '../../assets/illustration-thank-you.svg'
import Message from '../Message'
import RatingPanel from '../RatingPanel'

const Panel = () => {
  const [rating, setRating] = React.useState(false)
  const [ratingValue, setRatingValue] = React.useState(0)

  React.useEffect(() => {
    if (ratingValue) {
      setRating(true)
    }
  }, [ratingValue])
  return (
    <div className=" bg-primary rounded-3xl  w-[410px] h-[410px] py-[26px] px-[31px] mt-10 ml-4 ">
      {!rating ? (
        <>
          {' '}
          <div className="flex flex-col">
            <img src={icon} alt="icon" className="bg-secondary-medium-1 rounded-full w-12 h-12 p-[15px] mt-1 " />
          </div>
          <div className="flex flex-col mt-[28px]">
            <Message />
          </div>
          <div className="flex flex-col align-bottom mt-20">
            <RatingPanel ratingValue={ratingValue} setRetingValue={setRatingValue} />
          </div>
        </>
      ) : (
        <div className=" animate-fade-in ">
          <div className=" flex flex-col items-center ">
            <div className="w-[180px]  mt-3 ">
              <img src={illusration} alt="icon" />
            </div>
            <div className="mt-6">
              <p className=" rounded-xl bg-secondary-medium-1 px-3 py-1 text-orange font-overpass-thin font-light text-sm">
                You selected {ratingValue} out of 5
              </p>
            </div>
            <div className="flex flex-col mt-6 justify-center text-center">
              <h1 className="   text-2xl font-overpass font-[700] text-white mb-3">Thank you!</h1>
              <p className=" text-secondary font-overpass-light text-[15px] leading-6  ">
                We appreciate you taking the time to give a rating If you ever need more support, don't hesitate to get
                in touch!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Panel
