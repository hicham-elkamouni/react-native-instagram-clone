import { users } from "./users.js";

export const posts = [
    { 
        imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        user: users[0].user,
        profile_picture: users[0].image,
        caption: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        hasLiked: true,
        likes: 1200,
        comments: [
            {
                user: users[1].user,
                comment: "Nice post mate!",
            },
            {
                user: users[2].user,
                comment: "I like your post",
            },
        ],
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        user: users[1].user,
        profile_picture: users[1].image,
        caption: "Nice view!",
        hasLiked: false,
        likes: 12,
        comments: [
 
        ],
    },
    {
        imageUrl: "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg",
        user: users[3].user,
        profile_picture: users[3].image,
        caption: "codding is fun, right? codding is fun, right? codding is fun, right?",
        hasLiked: false,
        likes: 12,
        comments: [
            {
                user: users[4].user,
                comment: "Yeah I like that",
            },
            {
                user: users[2].user,
                comment: "of course, I do",
            },
        ],
    },

];