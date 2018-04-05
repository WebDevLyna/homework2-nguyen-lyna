import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Comment } from './comment.js';

export class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Check state, will auto-update in DOM
      comments: props.comments,
      likes: props.likes,
      isLikedByMe: props.isLikedByMe,
      updated: false,
      shown: true
    }
  }

handleCommentSubmission(event) {
  // prevent page from refreshing
  event.preventDefault();

  // Create a comment object from the text
  const text = event.target[0].value;
  const comment = { owner: 'Lyna', text: text };

  // Erase the text from the input box
  event.target[0].value = '';
  console.log(event);

  // include the new comment in the comment array
  const comments = this.state.comments
  comments.push(comment);

  // update the state of the component with the new comment
  this.setState({
    comments: comments
  });
}

// Toggle heart/like
updateHeart = () => {
  if(!this.state.updated) {
    const isLikedByMe = this.state.likes + 1;

    this.setState((prevState, props) => {
      return {
        // Red heart
        likes: isLikedByMe,
        heartURL: "https://i.imgur.com/ZKVhI3C.png",
        updated: true,
        shown: false
      };
    });

  } else {
    const unlikedByMe = this.state.likes - 1;

    this.setState((prevState, props) => {
      return {
        // Clear heart
        likes: unlikedByMe,
        heartURL: "https://i.imgur.com/Q1aK7V8.png",
        updated: false,
        shown: true
      };
    });
  }
}

  render(){
    return (
      <div className="post">
       <div className="post__header">
         <div className="post__avatar">
           <Avatar avatarUrl={this.props.owner.avatarUrl} />
         </div>
         <div className="post__header-info">
           <div><b>{this.props.owner.name}</b></div>
           <div>{this.props.location}</div>
         </div>
       </div>
       <img className="post__img" src={this.props.imageUrl} alt='post'/>
       <div className="post__body">

         <div className="post__likes">
           <b>{this.props.likes} likes</b>
           <button onClick={this.updateHeart}>
             <img className="post__heart-clear" src="https://i.imgur.com/Q1aK7V8.png" />
             <img className="post__heart" src={this.state.heartURL} />
           </button>
         </div>

         { this.props.comments.map(comment => <Comment owner={comment.owner} text={comment.text} />) }
         <hr className="post__body-separator" />
         <form
           onSubmit={(event) => this.handleCommentSubmission(event)}
           className="post__comment-form">
           <input placeholder="Add a comment..." className="post__comment-input"/>
         </form>
       </div>
     </div>
    );
  }
}
