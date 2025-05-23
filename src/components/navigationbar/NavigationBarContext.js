import React, { createContext, useState } from "react";

export const NavigationBarContext = createContext();

export const NavigationBarProvider = (props) => {
  const [secondLevelNav, setSecondLevelNav] = useState(false);
  const [hideNavBar, setHideNavBar] = useState(false);

  return (
    <NavigationBarContext.Provider
      value={{
        secondLevelNav,
        setSecondLevelNav,
        hideNavBar,
        setHideNavBar,
      }}
    >
      {props.children}
    </NavigationBarContext.Provider>
  );
};
