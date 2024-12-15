import "./Post.css";
import Modal from "./Modal";

function posts(props) {
  return (
    <>
      <div
        className="Post"
        onClick={() => {
          props.setIsModalOpen(!props.isModalOpen); props.setPostIndex(props.postIndex)}}
      >
        <img src={props.picture}></img>
      </div>
    </>
  );
}
export default posts;
