function Message({OnGetPost}){
  return <center>

   <div className="py-5"> <h1 className="display-5 fw-bold text-black">Welcome</h1> <div className="col-lg-6 mx-auto"> <p className="fs-5 mb-4">There is no Post yet.<br/>If you want create your own post and display here.<br/>Click on Create Post.</p> <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick = {OnGetPost} >Get Post from Server</button>  </div> </div> </div>


  </center>
}

export default Message;