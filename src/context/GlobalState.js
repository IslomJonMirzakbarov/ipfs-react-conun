import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  imgUrls: localStorage.getItem("imgUrls")
    ? JSON.parse(localStorage.getItem("imgUrls"))
    : [],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("imgUrls", JSON.stringify(state.imgUrls));
  }, [state]);

  const addImageUrl = (newUrl) => {
    dispatch({ type: "ADD_IMAGE_URL", payload: newUrl });
  };

  return (
    <GlobalContext.Provider value={{ imgUrls: state.imgUrls, addImageUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
