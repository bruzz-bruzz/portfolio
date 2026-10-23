import './App.css'
type Data = {
    platform:string,
    rank:string[],
    ratings:string[],
    acSub?:any[],
    link:string,
    logo:string
}
export default function CPCard({platform,rank,ratings,acSub,link,logo}:Data){
    return (
        <div className='group block p-6 bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500'>
            <img className='w-16 h-16' src={logo}></img>
            <h1 className="text-xl font-semibold text-slate-900 mb-2 text-center">{platform}</h1>
            <div className="flex flex-col gap-1 items-center mb-4">
                {rank.map((val,idx)=>(
                    <p key={idx} className="text-sm font-medium text-slate-600">{val}</p>
                ))}
                {ratings.map((val,idx)=>(
                    <p key={idx} className="text-sm font-medium text-slate-600">{val}</p>
                ))}
            </div>
            {acSub && acSub.length > 0 && (
                <div>
                    <p className='text-center text-sm font-semibold text-slate-800'>Problems Solved</p>
                <div className="flex justify-between gap-2 pt-4 border-t border-slate-100">
                    {acSub.map((val,idx)=>(
                        <div key={idx} className="text-center">
                            <p className={`text-xs font-bold ${val.difficulty === 'Easy' ? 'text-cyan-600' : val.difficulty === 'Medium' ? 'text-orange-600' : val.difficulty === 'Hard' ? 'text-red-600' : 'text-slate-600'}`}>{val.difficulty}</p>
                            <p className="text-sm font-semibold text-slate-800">{val.count}</p>
                        </div>
                    ))}
                </div>
                </div>
            )}
            <a className='mt-4 text-center underline hover:cursor-pointer' href={link}>My Profile</a>
        </div>
    )
}