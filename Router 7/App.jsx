import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GithubUsersList from './GithubUsersList';
import ShowGithubUser from './ShowGithubUser';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<GithubUsersList />}>
          <Route index element={<h4>Add a user and select it</h4>}/>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;