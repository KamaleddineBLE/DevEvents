
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
interface Props{
    title:string;
    image:string;
    slug:string;
    location:string;
    date:string;
    time:string;
}
const EventCard = ({ title, image,slug,location,date,time }:Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
        <Image src={image} alt={title} width={410} height={300} className="poster"/>
        <div className='flex flex-row gap-2'>
            <Image src="/icons/pin.svg" alt="location icon" width={16} height={16} className="location-icon"/>
            <p className="location">{location}</p>
        </div>
        
        <p className="title">{title}</p>
        <div className='datetime'>
            <div>
                <Image src="/icons/calendar.svg" alt="location icon" width={16} height={16} className="location-icon"/>
                <p >{date}</p>
            </div>
             <div>
                <Image src="/icons/clock.svg" alt="clock icon" width={16} height={16} className="location-icon"/>
                <p >{time}</p>
            </div>
            
        </div>
        
    
    </Link>
  )
}

export default EventCard