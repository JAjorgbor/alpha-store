import { createContext, useState } from "react";


export const SidebarContext = createContext(null);

function Providers({ children }) {
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  return (
    <>
      <SidebarContext.Provider value={[collapseSidebar, setCollapseSidebar]}>
        {children}
      </SidebarContext.Provider>
    </>
  );
}

export default Providers;
