import { createContext, useReducer,useEffect,useState } from "react";


export const PostList = createContext( {
  
  postList:[],
  addPost :()=>{},
  deletePost :()=>{},
  addPosts:()=>{},
  datafetchState:false

});


const DEFAULT_POST_LIST = [
//   {
//    id:"1",
//    title:"Going to College",
//    body:"Hii everyone I am coming very soon",
//    tag:["Like","Share"
// ,"Comment"],
// reaction:9,
// userId:"anjali@"
// },

// {
//   id :"2",
//   title :"i am at my home",
//   body:"Hii I am happy to there",
//   tag:["Like","Share"
// ,"Subscribe"],
// reaction:44,
// userId:"anjali@gmail.com"
// }
]


const postListReducer = (currPostList,action)=>{
  let newpostlist =  currPostList;
  if(action.type === "DELETE_POST"){
  newpostlist = currPostList.filter((post)=>post.id !== action.payload.postId)
   }

  else if(action.type === "ADD_POST"){
     newpostlist = [action.payload,...currPostList]
   }

   else if(action.type === "ADD_INITIAL_POSTS"){
   
      newpostlist = action.payload.posts
   }

   return newpostlist;
}

const PostListProvider = ({children})=>{

 const [postList ,dispatchPostList] = useReducer(postListReducer,[]);



// 🌸🌸🌸🌸🌸🌸🌸Submitting data with Fetch

   const addPost = (post)=>{
  dispatchPostList({
    type:"ADD_POST",
    payload:post
  })

 }

  const addPosts = (posts)=>{
  dispatchPostList({
    type:"ADD_INITIAL_POSTS",
    payload:{
   posts:posts
  }})
 }


 const deletePost = (postId)=>{
  console.log(postId)
     dispatchPostList({
      type:"DELETE_POST",
      payload:{
      postId:postId
      }
     })
 }

 const [datafetchState , setdatafetchState] = useState(false)

 useEffect(()=>{
  setdatafetchState(true)

  const controller = new AbortController();
  const signal = controller.signal;
    fetch('https://dummyjson.com/posts' , {signal})
.then(res => res.json())
.then(data => {
  addPosts(data.posts)
  setdatafetchState(false)
})
return () => {
  // console.log("Cleanup code or cancellation code")
   controller.abort()
}
},[]);

  return <PostList.Provider value = {{
  postList:postList,
  addPost,
  deletePost,
  addPosts,
  datafetchState
 }}>
    {children}
  </PostList.Provider>
}


export default PostListProvider;

