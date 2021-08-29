import createContext from "./createContext";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `This is blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Provider, Context } = createContext(
  blogPostReducer,
  { addBlogPost },
  []
);
