import createContext from "./createContext";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogpost":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
  };
};

const editBlogPost = (dispatch) => {
  return (title, content, id) => {
    dispatch({ type: "edit_blogpost", payload: { title, content, id } });
  };
};

export const { Provider, Context } = createContext(
  blogPostReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
