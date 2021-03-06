
import './App.css';
import React from 'react';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {AddPost} from "./components/AddPost";
import {Reg} from "./components/Reg";



function AboutUs(){
    return(
        <h1>О нас</h1>
    )
}
function ContactUs(){
    return(
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>

            </form>
        </div>
    )
}
function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Menu/>
            <Route exact path="/" render={()=><PostList/>} />
            <Route path="/addPost" render={()=><AddPost/>} />
            <Route path="/post/:id" render={(props)=><Post {...props}/>}/>
            <Route path="/reg" render={()=><Reg/>} />
        </BrowserRouter>
    </div>
  );
}

export default App;
