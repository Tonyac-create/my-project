import React from 'react'
import { listMentions } from './config'

export default function Mentions() {
  return (
    <div className='mt-5'>
        {listMentions.map((item) => (
            <>
            <h1 className='text-xl font-semibold text-marianBlue mt-2'>{item.title}</h1>
            <ul>
                {item.list.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            </>
        ))}
    </div>
  )
}
