import axios from 'axios'
type CardDict = {
    name:string,
    url:string,
    description:string
}
type response = {
    data:CardDict[]
}
export default async function getRepos(username:string,token:string) : Promise<response | never[]>{
    try {
        let finalResponse = []
        const res = await axios.get(`https://api.github.com/users/${username}/starred`,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        console.log(res)
        for(var x of res.data){
            let d = {
                name:x.name,
                url:x.html_url,
                description:x.description   
            }
            finalResponse.push(d)
        }
        return {data:finalResponse}
    } catch(e){
        console.log(e)
        return []
    }
}