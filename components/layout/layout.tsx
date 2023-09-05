import React, { useEffect, useState } from 'react';
import { useLockedBody } from '../hooks/useBodyLock';
import { NavbarWrapper } from '../navbar/navbar';
import { SidebarWrapper } from '../sidebar/sidebar';
import { SidebarContext } from './layout-context';
import { WrapperLayout } from './layout.styles';

interface Props {
   children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
   const [sidebarOpen, setSidebarOpen] = React.useState(false);
   const [_, setLocked] = useLockedBody(false);
   const [auth, setAuth] = useState(false);

   const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
      setLocked(!sidebarOpen);
   };

   useEffect(() => {
      let auth1 = localStorage.getItem('user');
      if (auth1) {
         setAuth(true);
      }
   })

   return (


      <SidebarContext.Provider
         value={{
            collapsed: sidebarOpen,
            setCollapsed: handleToggleSidebar,
         }
         }
      >
         <WrapperLayout>
            {auth ? <SidebarWrapper /> : <></>}
            {auth ? <NavbarWrapper>{children}</NavbarWrapper> : <> {children}</>}
         </WrapperLayout>
      </SidebarContext.Provider >

   );
};
