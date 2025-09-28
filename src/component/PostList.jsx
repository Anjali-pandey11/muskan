import Post from "./Post";
import {useContext,useState,useEffect} from "react";
import {PostList as PostListData} from "../store/post-list-store"
import Message from "./Message.jsx"
import Loading from "./Loading.jsx";

function PostList(){

  const {postList,addPosts,datafetchState} = useContext(PostListData)

  const OnGetPost = ()=>{
//    fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data => {
//   addPosts(data.posts)
// })
  }



// const [datafetchState , setdatafetchState] = useState(false)

// if(!datfetchState){
//   fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data => {
//   addPosts(data.posts)
// })

// setdatafetchState(true);
// }






  return <>

  {datafetchState && <Loading/>}

  { !datafetchState && postList.length === 0 && <Message OnGetPost = {OnGetPost}/>}

 {postList.map((post) => (
  <Post key = {post} post = {post}/>
 ))}
  </>
}

export default PostList;


