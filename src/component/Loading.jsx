import { MdDownloading } from "react-icons/md";


const Loading = () =>{

  return <>

<div class="d-flex justify-content-center loading" 

>
  <div class="spinner-border" role="status"
  style={{width: "4rem", height: "4rem"}}
  >
    <span class="visually-hidden">Loading...</span>
  </div>
</div>


  </>
}
export default Loading;

