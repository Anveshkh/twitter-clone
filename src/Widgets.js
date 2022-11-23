import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';




function Widgets() {
  return (
    
    <div className="Widgets">
        <div className="widgets__input">
          <SearchIcon className='widgets__searchIcon'/>
          <input type="text" placeholder='Search Twitter' />
        </div>
        
        <div className="widgets__widgetContainer">
          <h2>What's happening?</h2>

          <TwitterTweetEmbed tweetId={"858551177860055040"}/>
          
          <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='cleverqazi'
          options={{height : 400}}
          />
          
        </div>
    </div>
    
  )
}

export default Widgets