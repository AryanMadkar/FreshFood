import { createContext, useEffect, useState } from "react";
import { blogdata } from "../assets/Blogdata";

export const Mycontext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, SetisDarkTheme] = useState(false);
  const [getid, Setgetid] = useState();
  const [blogdatacont, setBlogdata] = useState([]);
  const [cartdata, setcartdata] = useState([]);

  const toggleTheme = () => SetisDarkTheme(true);
  const getidonclick = (id) => {
    Setgetid(id);
    setcartdata([...cartdata, blogdatacont.find((item) => item.id === id)]);
  };
  useEffect(() => {
    setBlogdata(blogdata);
    console.log(getid);
    console.log(cartdata);
  }, [getid, cartdata]);

  return (
    <Mycontext.Provider
      value={{
        blogdatacont,
        cartdata,
        isDarkTheme,
        toggleTheme,
        getidonclick,
        getid,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};
