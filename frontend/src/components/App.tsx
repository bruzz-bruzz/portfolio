import './App.css'
import {useState,useEffect} from 'react'
import Spinner from './Spinner'
import Card from './Card'
import CPCard from './CPCard'
import PaperCard from './PaperCard'
import githubIcon from '../assets/github.svg'
import codeforcesIcon from '../assets/codeforces.svg'
import leetcodeIcon from '../assets/leetcode.svg'
import kaggleIcon from '../assets/kaggle.svg'
import codechefIcon from '../assets/codechef.svg'
import atcoderIcon from '../assets/atcoder.svg'
import gmailIcon from '../assets/gmail.svg'
import axios from 'axios'
type repoType = {
  url:string,
  name:string,
  description:string
}
type acSubmissionsType = {
  difficulty:string,
  count:number
}
type cpProfilesType = {
  atcoder:{
    rating:number,
    rank:string
  },
  codechef:{
    normalRating:number,
    normalStars:string,
    normalRankGlobal:number,
    normalRankCountry:number,
    dsaRating:number,
    dsaRankGlobal:number,
    dsaRankCountry:number,
  },
  codeforces:{
    rank:string,
    rating:number,
  },
  leetcode:{
    contestPercent:number,
    profileRank:number,
    contestRanking:number,
    contestRating:number,
    acSubmissionNum:acSubmissionsType[]
  }
}
export default function App(){
  const [repos,setRepos] = useState<repoType[] | null>(null)
  const [cpProfiles,setCPProfiles] = useState<cpProfilesType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLoadingCP,setIsLoadingCP] = useState<boolean>(true)

  async function getRepos(){
    setIsLoading(true)
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getRepos`)
      setRepos(res.data.data.repos.data)
    } catch (error) {console.error(error)}
    finally{setIsLoading(false)}
  }
  async function getCPProfiles(){
    setIsLoadingCP(true)
    try{
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getCPProfiles`)
      setCPProfiles(res.data.data)
    }catch(e){console.error(e)}
    finally{setIsLoadingCP(false)}
  }
  useEffect(() => {
    getRepos()
    getCPProfiles()
  }, [])
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="max-w-4xl mx-auto py-12 px-6">
        <h1 className='text-5xl font-bold mb-4'>Hi, I'm <span className="text-blue-600">bruzz-bruzz</span></h1>
          <h3 className="text-xl text-slate-900 inline">A passionate young developer from <img className='inline' src="https://flagcdn.com/80x60/my.png" width="80" height="60"></img></h3>
          <p className='text-lg text-slate-600'>Programming and AI have captivated me since I was a middle-schooler. Now, I hope to contribute to society whilst pursuing my interests of programming and AI.</p>
      </header>
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <section className='mb-2'>
          <img src='https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light'></img>
        </section>
        <section className='mb-16'>
          <h4 className='text-2xl font-semibold mb-6'>Languages and Tools</h4>
          {isLoading || isLoadingCP && (
            <Spinner />
          )}
          {!isLoading && !isLoadingCP && (
            <div className='flex flex-wrap gap-4'>
              <img src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'></img>
              <img src='https://img.shields.io/badge/c%2B%2B-%2300599C.svg?style=for-the-badge&logo=cplusplus&logoColor=white'></img>
              <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'></img>
              <img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'></img>
              <img src='https://img.shields.io/badge/python-%233670A0.svg?style=for-the-badge&logo=python&logoColor=ffdd54'></img>
              <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'></img>
              <img src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'></img>
              <img src='https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white'></img>
              <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'></img>
              <img src='https://img.shields.io/badge/node.js-%236DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white'></img>
              <img src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white'></img>
              <img src='https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white'></img>
              <img src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'></img>
              <img src='https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white'></img>
              <img src='https://img.shields.io/badge/Arduino-%2300979D.svg?style=for-the-badge&logo=Arduino&logoColor=white'></img>
              <img src='https://img.shields.io/badge/espressif-%23E7352C.svg?style=for-the-badge&logo=espressif&logoColor=white'></img>
              <img src='https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white'></img>
              <img src='https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white'></img>
            </div>
          )}
        </section>  
        <section className="mb-16">
          <h4 className='text-2xl font-semibold mb-6'>Projects</h4>
          {isLoading || isLoadingCP && (
              <Spinner />
            )}
          <div className='grid grid-cols-2 gap-4 p-4'>
            {!isLoadingCP && !isLoading && repos !== null && (
              repos.map((val,idx)=>(
                <Card key={idx} url={val.url} label={val.name} description={val.description}  />
              ))
            )}
          </div>
        </section>
        <section>
          <h4 className='text-2xl font-semibold mb-6'>Competitive Programming Profiles</h4>
          {isLoadingCP || isLoading && (
            <Spinner />
          )}
          {!isLoadingCP && !isLoading && cpProfiles !== null && (
            <div className='grid grid-cols-2 gap-4 p-4'>
              <CPCard logo={atcoderIcon} link={"https://atcoder.jp/users/trololol"} platform={"AtCoder"} ratings={[`Contest Rating: ${cpProfiles.atcoder.rating}`]} rank={[cpProfiles.atcoder.rank]}/>
              <CPCard logo={codechefIcon} link={"https://www.codechef.com/users/gaily_sock_92"} platform={"CodeChef"} ratings={[`Competitive Programming Rating: ${cpProfiles.codechef.normalRating} ${cpProfiles.codechef.normalStars}`,`Competitive Programming Rank In Malaysia: ${cpProfiles.codechef.normalRankCountry}`,`Competitive Programming Rank Globally 🌐: ${cpProfiles.codechef.normalRankGlobal}`]} rank={[`DSA Rating: ${cpProfiles.codechef.dsaRating}`,`DSA Rank In Malaysia: ${cpProfiles.codechef.dsaRankCountry}`,`DSA Rank Globally 🌐: ${cpProfiles.codechef.dsaRankGlobal}`]} />
              <CPCard logo={codeforcesIcon} link={"https://codeforces.com/profile/trollolol"} platform={"Codeforces"} ratings={[`Rating: ${cpProfiles.codeforces.rating}`]} rank={[`Rank: ${cpProfiles.codeforces.rank}`]} />
              <CPCard logo={leetcodeIcon} link={"https://leetcode.com/u/ivZzGbFaBO/"} platform={"LeetCode"} ratings={[`Contest Rating: ${Math.floor(cpProfiles.leetcode.contestRating)}`]} rank={[`Contest Rank: ${cpProfiles.leetcode.contestRanking} (Top ${cpProfiles.leetcode.contestPercent}%)`,`Profile Rank: ${cpProfiles.leetcode.profileRank}`]} acSub={cpProfiles.leetcode.acSubmissionNum} />
            </div>
          )}
        </section>
        <section className='mb-16'>
          <h4 className='text-2xl font-semibold mb-6'>Papers</h4>
          {isLoading || isLoadingCP &&  (
            <Spinner/>
          )}
          {!isLoading && !isLoadingCP && (
            <div>
              <h6>Preprints</h6>
              <div className='grid grid-cols-3 gap-4 p-4'>
                <PaperCard title={"A Review on Explainable AI (XAI)"} abstract={"This paper provides a comprehensive and detailed review of Explainable AI (XAI). This paper covers what XAI is, how it operates, notable use cases, and the current problems hindering it. Crucial XAI techniques such as LIME, SHAP, and a category of approaches called Open the Black Box are also discussed thoroughly in this paper. Finally, this paper concludes by stating that XAI will play an indispensable role in the field of artificial intelligence and the future as AI becomes more prominent in our modern society. Thus, XAI fulfills the need for transparent and interpretable AI systems."} link={"https://doi.org/10.5281/zenodo.23462852"} />
                <PaperCard title={"A Review on Convolutional Neural Networks (CNN) in Skin Cancer Diagnosis"} link={"https://doi.org/10.5281/zenodo.23463024"} abstract={"This paper provides a detailed review of Convolutional Neural Networks (CNN) in skin cancer diagnosis systems. It thoroughly explores the process of optimizing CNNs for skin cancer diagnosis systems and their benefits in said systems. Furthermore, current issues impeding advancements and suggestions on improving this technology for future use are also discussed in this paper. Finally, this paper concludes that findings show that CNNs have promising potential to be utilised in aiding dermatologists to diagnose skin cancer in the near future."} />
              </div>
              <h6>Published</h6>
              <p className='italic'>None at the moment.</p>
          </div>
          )}
        </section>
        <section className="mb-16">
          <h4 className='text-2xl font-semibold mb-6'>Socials</h4>
          <div className='flex flex-wrap gap-4'>
            <a href='mailto:frkhor@gmail.com' title='Email' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={gmailIcon} alt='Email' className='w-8 h-8'/></a>
            <a href='https://github.com/bruzz-bruzz' title='Github' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={githubIcon} alt='Github' className='w-8 h-8' /></a>
            <a href='https://codeforces.com/profile/trollolol' title='Codeforces' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={codeforcesIcon} alt='Codeforces' className='w-8 h-8' /></a>
            <a href='https://leetcode.com/u/ivZzGbFaBO/' title='LeetCode' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={leetcodeIcon} alt='LeetCode' className='w-8 h-8' /></a>
            <a href='https://www.kaggle.com/itsjoever' title='Kaggle' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={kaggleIcon} alt='Kaggle' className='w-8 h-8' /></a>
            <a href="https://www.codechef.com/users/gaily_sock_92" title='CodeChef' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={codechefIcon} alt='CodeChef' className='w-8 h-8'/></a>
            <a href="https://atcoder.jp/users/trololol" title='AtCoder' className='p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors'><img src={atcoderIcon} alt='AtCoder' className='w-8 h-8'/></a>
          </div>
        </section>
        <h4 className='italic'>Made with ❤️ by <a className='underline' target='_blank' href='https://github.com/bruzz-bruzz'>bruzz-bruzz</a>. 2026</h4>
      </main>
    </div>
  )
}