import React, { useEffect, useState } from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox';
import Post from './Post';
import { getCollectionAndDocuments } from './firebase.utils';


function Feed() {

  const [Posts, setPosts] = useState([]);

  useEffect(()=>{
    setPosts(getCollectionAndDocuments());
  },[])

  return (

    <div className='feed'>
      <div className="feed__header">
            <h3>HOME</h3>
       </div>
      <Tweetbox />
      {console.log(Posts)}
      {/* {Posts.map((post) => {
        return(
          <Post
            displayName={post.displayName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar} 
            image={post.image}
          />
        )
      })} */}
      


        
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>

  )
}
export default Feed;