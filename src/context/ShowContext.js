import { createContext, useState } from "react";

export const ShowContext = createContext();

export const ShowProvider = (props) => {
  const [show, setShow] = useState({
    sidebar: true,
    navbar: false,
  });

  return (
    <ShowContext.Provider value={[show, setShow]}>
      {props.children}
    </ShowContext.Provider>
  );
};
