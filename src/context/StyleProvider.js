import { useState } from "react";
import PackageContext from "./StyleContext";

const initialTheme = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid red"

}

const StyleProvider = (props)=>{
    const [theme, setTheme] = useState(initialTheme)

    return(
       <PackageContext.Provider value={{
              theme: theme,
              setTheme: setTheme,
              lightMode: ()=>setTheme(initialTheme),

              darkMode: ()=>setTheme({...theme, 
                color: "white",
                backgroundColor: "black",
                border: "1px solid green"})
       }}>
              {props.children}
       </PackageContext.Provider>
    )

}

export default StyleProvider;