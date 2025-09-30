import Header from "./component/Header"
import Footer from "./component/Footer"
import Sidebar from "./component/Sidebar";
import  "./App.css"
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList"
import { useState } from "react";
import PostListProvider from "./store/post-list-store"



function App(){

const [selectedTab , setselectedTab] = useState("Home")

  

  return <>
  <h1>Aunty</h1>
   <h1>Hello world</h1>
  <PostListProvider>
  <div class = "app-container">
  <Sidebar selectedTab = {selectedTab} setselectedTab={setselectedTab}></Sidebar>
  <div class = "content-container">
    <Header></Header>
  
    {selectedTab === "Home" ? (
          <PostList></PostList> 
    ) : (
        <CreatePost></CreatePost>
    )}
    
    <Footer></Footer>
  </div>
 </div>
  </PostListProvider>
</>
}
export default App;