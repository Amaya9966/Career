import GithubUser from "./GithubUser";
import {useParams} from "react-router-dom"

 function ShowGithubUser(){
    const {username} = useParams()
    return(
        <div>
        <GithubUser username={username}/>
        </div>
    )
}

export default ShowGithubUser