import './App.css'
type Data = {
    title:string,
    abstract:string,
    link:string
}
import {useState} from 'react'
export default function PaperCard({title,abstract,link}:Data){
    const sentences = abstract.split(".")
    const [showMore,setShowMore] = useState(false)
    return(
        <div className='group block p-6 bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <h4 className='font-semibold text-lg underline'>Abstract</h4>
            {showMore === false && (
                <h3 className='font-semibold text-sm'>{sentences.slice(0,2).join(".")}.  <br></br>...</h3>
            )}
            {showMore === true && (
                <h3 className='font-semibold text-sm'>{sentences.join(".")}</h3>
            )}
            <button className='mb-6 underline hover:cursor-pointer' onClick={()=>setShowMore(show => !show)}>{showMore === true ? 'Show Less' : "Show More"}</button>
            <h5 className='italic text-sm'><a target='_blank' href={link}>DOI Link</a></h5>
        </div>
    )
}