import React from 'react'
import NewsFeed from '@/components/NewsFeed'

const Library = () => {
  return (
    <div className='p-8 w-full'>
      <h2 className='text-3xl text-center underline leading-[150%]'>Automatic News Feed</h2>

      <NewsFeed time={10000} data={data}/>
    </div>
  )
}

export default Library

let data = [
  {
    "imgSrc": "https://source.unsplash.com/500x500/?tech,5g",
    "title": "Technology",
    "text": "Some text about that image loraam ksdjls lksd sd dns snds skjd sdjks "
  },
  {
    "imgSrc": "https://source.unsplash.com/500x500/?tech,mobile",
    "title": "Headind 2",
    "text": "about that image Some text "
  },
  {
    "imgSrc": "https://source.unsplash.com/500x500/?tech,4g",
    "title": "Technology",
    "text": "Some text about that image"
  },
  {
    "imgSrc": "https://source.unsplash.com/500x500/?tech,mobile4",
    "title": "Headind 2",
    "text": "about that image Some text "
  },

]