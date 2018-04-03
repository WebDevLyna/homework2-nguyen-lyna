import React from 'react';
import { Post } from '../post';
import { mockedState } from './timeline.mock';
import './timeline.css'


export const Timeline = (props) => (
  <div className="timeline">
   <div className="timeline__post-container">
     { mockedState.posts.map(post => (
       <div className="timeline__post">
         <Post
           id={post.id}
           owner={post.owner}
           location={post.location}
           imageUrl={post.imageUrl}
           likes={post.likes}
           comments={post.comments}
           // onCommentSubmit={(event) => this.handleCommentSubmission(post.id, event)}
         />
       </div>) )
     }
   </div>
 </div>
);

// export class Timeline extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = mockedState;
//   }
//
//   // Handle the comment submission
//   handleCommentSubmission(postId, event) {
//     // prevent page from refreshing
//     event.preventDefault();
//     const text = event.target[0].value;
//
//     // find the post by id
//     const allPosts = this.state.posts;
//     const index = allPosts.findIndex(post => post.id === postId);
//     const foundPost = allPosts[index];
//
//     // Add the new comment to the found post
//     const comment = { owner: this.state.user.name, text: text };
//     foundPost.comments.push(comment);
//
//     // update the state of the component with the new comment
//     this.setState({
//       posts: allPosts
//     });
//   }
//
//   render() {
//     return (
//       <div className="timeline">
//         <div className="timeline__post-container">
//           { this.state.posts.map(post => (
//             <div className="timeline__post">
//               <Post
//                 id={post.id}
//                 owner={post.owner}
//                 location={post.location}
//                 imageUrl={post.imageUrl}
//                 likes={post.likes}
//                 comments={post.comments}
//                 onCommentSubmit={(event) => this.handleCommentSubmission(post.id, event)}
//               />
//             </div>) )
//           }
//         </div>
//       </div>
//     )
//   }
// }
