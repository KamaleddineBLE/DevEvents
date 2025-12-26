'use client'
import Image from 'next/image'
import icon from "../../public/icons/arrow-down.svg"

const ExploreBtn = () => {
  return (
    <a 
      href="#events" 
      id="explore-btn" 
      className="mt-7 mx-auto block"
      onClick={() => console.log('Explore Events clicked')}
    >
      Explore Events     
      <Image src={icon} alt="down arrow" width={24} height={24} className="inline-block ml-2"/>           
    </a>
  )
}

export default ExploreBtn