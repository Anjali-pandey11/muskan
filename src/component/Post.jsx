import { RiChatDeleteFill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";


function Post({post}){

 const {deletePost} = useContext(PostList)

  return <>

   <div className="card post-card bgcolor" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    
    <RiChatDeleteFill 
    onClick = {()=>deletePost(post.id)}
    />
  </span>

    </h5>
    <p className="card-text">{post.body}</p>
    {post?.tags?.map((tags) =>(
  <span key = {tags} className="badge text-bg-info hashtag">{tags}</span>
    ))}
  
  <div className="alert alert-secondary badges" role="alert">
  This post has been reacted by {post.reactions.likes}.

</div>
</div>
</div>

  </>
}

export default Post;