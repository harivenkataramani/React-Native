import createContext from "./createContext";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
        return state.filter(blogPost=>blogPost.id !==action.payload)
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `This is blog post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
      dispatch({ type: "delete_blogpost" , payload: id});
    };
  };

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Provider, Context } = createContext(
  blogPostReducer,
  { addBlogPost, deleteBlogPost },
  []
);
