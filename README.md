# My-Insta

## Overview
My-Insta is an application is meant mimic an instagram timeline. The application simply displays a list of posts. A post, in the context of this application, is a styled slice of the UI that displays an image, comments, and the owner of the post.

## Components
Below is a list of components that are used in this application along with a description of their purpose.

1. **Post**: The post component is composed of an owner, image, and a list comments. A component has been created for this slice of the user interface because it is repetitive pattern in the application with different in only in the data presented. This component intakes the owner, location, image url, and array of comment objects as properties to display the intended view.

2. **Comment**: The comment component is composed of the name of the comment owner and the text that represents the comment per se. In my opinion, creating a comment component may have been unnecessary. This is because I do not foresee comments being used outside the context of a post. In addition, visualizing the comment is a very simple implementation. I just find it easier to loop ( use map function ) over a component as it becomes easier to identify what is being looped over. As a compromise, I have placed the comment component in the post folder to show that it only exists in the context of a post.

3. **Avatar**: In many applications, avatars are used in many places. In future iteration of this application,I may decide to put an avatar by every comment. If I do so, I will be prepared with an avatar component.

4. **Timeline**: The Timeline component is the container of my application. It is the component that manages the whole page. It is responsible for centering the posts on the page and adding margins between them.
