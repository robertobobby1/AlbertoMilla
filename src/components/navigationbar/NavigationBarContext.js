import React, { createContext, useState } from "react";

export const NavigationBarContext = createContext();

export const NavigationBarProvider = (props) => {
    const [secondLevelNav, setSecondLevelNav] = useState(false);
  
    return (
      <NavigationBarContext.Provider value={{ secondLevelNav, setSecondLevelNav }}>
        {props.children}
      </NavigationBarContext.Provider>
    );
  };