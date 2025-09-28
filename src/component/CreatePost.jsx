import { useContext ,useRef } from "react"
import { PostList } from "../store/post-list-store";


function CreatePost(){

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

 const handelPost= (event) => {
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(' ');

  // userIdElement.current.value = ""
  // postTitleElement.current.value =""
  // postBodyElement.current.value = ""
  // reactionsElement.current.value = ""
  // tagsElement.current.value = ""


// 🌸🌸🌸🌸🌸🌸🌸Submitting data with Fetch

  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  
   title:postTitle,
   body:postBody,
   userId :userId,
   tags:tags,
   reactions:{
    likes:reactions}
    
  })
})
.then(res => res.json())
.then(post => {
  addPost(post)
  console.log(post)
});

  // addPost(userId,postTitle,postBody,reactions,tags)
 }


  return <>

  <form className = "create-form" onSubmit = {handelPost}>

   <div className="mb-3">
    <label htmlFor="userId" className="form-label">USER ID</label>
    <input type="type" 
    ref = {userIdElement}
    className="form-control" id="userId" 
     placeholder = "UserId" />
  </div>

  <div class="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="type" 
    ref = {postTitleElement}
    className="form-control" id="title" 
     placeholder = "How are you feeling ?" />
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows = "4" type="type" 
    ref = {postBodyElement}
    className="form-control" id="body" 
     placeholder = "Tell us more about it" />
  </div>

  <div className="mb-3">
    <label htmlFor="reaction" className="form-label">Reaction</label>
    <input type="type"
    ref = {reactionsElement}
     className="form-control" id="reaction" 
     placeholder = "Number of reaction on post"  />
  </div>

   <div className="mb-3">
    <label htmlFor="tag" className="form-label">Given Tag</label>
    <input type="type" 
    ref = {tagsElement}
    className="form-control" id="tag" 
     placeholder = "given the hashtags"  />
  </div>

  <button type="submit" className="btn btn-primary" >Post</button>
</form>

  </>
}

export default CreatePost




















