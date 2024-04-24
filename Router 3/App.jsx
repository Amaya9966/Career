import {Routes, Route, Link} from "react-router-dom"
import  ShowGithubUser  from "./ShowGithubUser"

function App() {
  return (
    <div>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser/>}/>
      </Routes>
      {/* <Link to="/users/IlariaMazzilli">
        user
      </Link> */}
    </div>
  )
}

export default App
