{
  /* stores the whole state of the app in an immutable object tree 
recommended to have only one store for the entire app*/
}
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'



export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
