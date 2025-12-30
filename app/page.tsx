import React from 'react'
import ExploreBtn from './components/ExploreBtn'
import EventCard from './components/EventCard'
import { IEvent } from '@/database';
import { cacheLife } from 'next/cache';
const page = async () => {
  'use cache';
  cacheLife('hours')
// ✅ CORRECT - Use parentheses, not backticks after fetch
const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`, {cache:'no-store'});  const {events} = await response.json();
  return (
    <section>
      <h1 className='text-center'>the Hub for Everydev <br/> Events You Cant't Miss</h1>
      <p className='text-center mt-5 '>Hackathons,Meetups,and Conferences ,All in one place</p>
      <ExploreBtn/>
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className='events' >
          {events && events.length > 0 && events.map((event:IEvent)=>(
            <li key={event.title} className='list-none' >
              <EventCard {...event}/></li>
            ))}
        </ul>

      </div>
  
    </section>
    
  )
}

export default page