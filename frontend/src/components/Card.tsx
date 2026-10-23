import './App.css'
type Data = {
    url:string,
    description:string,
    label:string,
}
export default function Card({url,label,description}:Data){
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className='group block p-6 bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500'>
            <h1 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 mb-2">{label}</h1>
            <h3 className="text-sm font-semibold text-slate-500 mb-2">{description}</h3>
            <span className="text-sm text-slate-500 font-medium">Click to view &rarr;</span>
        </a>
    )
}