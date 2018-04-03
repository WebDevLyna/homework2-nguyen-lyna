import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Comment } from './comment.js';

export class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments: props.comments
    }
  }

handleCommentSubmission(event) {
  // prevent page from refreshing
  event.preventDefault();

  // Create a comment object from the text
  const text = event.target[0].value;
  const comment = { owner: 'alaboudi', text: text };

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
         <div className="post__likes"><b>{this.props.likes} likes</b></div>
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
