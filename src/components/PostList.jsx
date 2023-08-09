import { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import NewSayHi from "./practice/NewSayHi";

function PostList({ isPosting, onStopPosting, isSayingHi, onStopSayingHi }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts)=>[postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
      ) : null}

      {isSayingHi ? (
        <Modal onClose={onStopSayingHi}>
          <NewSayHi />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author="Luisa" body="This is a post 2" />
      </ul>
    </>
  );
}

export default PostList;
