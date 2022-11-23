import React from 'react'
import './Tweetbox.css'
import { Button , Avatar } from '@mui/material' 

function Tweetbox() {
  return (
    <div className='tweetBox'>
        <form action="">
            <div className="tweetBox__input">
                <Avatar></Avatar>
                <input type="text" placeholder="What's happening?" />
                {/* <input type="text" placeholder="Enter image URL" /> */}

            </div>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox