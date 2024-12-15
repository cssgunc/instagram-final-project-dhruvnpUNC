import Sidebar from "../components/Sidebar.jsx";
import "./Feed.css";
function Feed() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <div className="feed-profile-pic"></div>
          <p1>Username</p1>
        </div>
        <div className="feed-post"></div>
      </div>

      <div className="content">
        <div className="content-header">
          <div className="feed-profile-pic"></div>
          <p1>Username</p1>
        </div>
        <div className="feed-post"></div>
      </div>
      <div className="content">
        <div className="content-header">
          <div className="feed-profile-pic"></div>
          <p1>Username</p1>
        </div>
        <div className="feed-post"></div>
      </div>
    </>
  );
}

export default Feed;
