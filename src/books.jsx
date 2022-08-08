import React, {useState} from 'react'
import axios from 'axios'
import Book from './book'

export default function Books() {
    const [book, setBook]= useState('')
    const [data, setData]= useState(null)
    const [loading, setLoading]= useState(false)
    const headers = {
        'key': 'RDfV4oPehM6jNhxfNQzzQ',
        'id':10
    }
    const search = (e) => {
        setLoading(true)
        e.preventDefault()
        axios(`https://goodreads-server-express--dotdash.repl.co/search/${book}`, {
            'key': 'RDfV4oPehM6jNhxfNQzzQ',
            'id':10
        }).then((response)=>{
            setData(response.data)
            setLoading(false)
        })
    }

  return (
    <div>
      <input type="text" placeholder='Enter name of book' onChange= {(event)=>setBook(event.target.value)} />
      <button onClick={search}>Search</button>
        <div className="flex">

      {loading && <div>Loading ...</div>}
      {data && data.list.map(dat=>(
        <Book dat={dat} />
      ))}
        </div>

    </div>
  )
}
