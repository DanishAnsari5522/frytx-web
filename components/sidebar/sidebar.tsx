import React, { useEffect, useState } from 'react';
import { Box } from '../styles/box';
import { Sidebar } from './sidebar.styles';
import { Flex } from '../styles/flex';
import { CompaniesDropdown } from './companies-dropdown';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { BalanceIcon } from '../icons/sidebar/balance-icon';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { useSidebarContext } from '../layout/layout-context';
import { useRouter } from 'next/router';
import { Tooltip } from '@nextui-org/react';

export const SidebarWrapper = () => {
   const router = useRouter();
   const { collapsed, setCollapsed } = useSidebarContext();
   const [auth, setAuth] = useState(false);
   useEffect(() => {
      let auth1 = localStorage.getItem('user');
      if (auth1) {
         console.log(JSON.parse(auth1).data['type']);
         if (JSON.parse(auth1).data['phone'] === 9262786676) {
            setAuth(true);
         }
      }
   })

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{ height: '100%' }}
            >
               <Sidebar.Body className="body sidebar">

                  <SidebarItem
                     title="Home"
                     icon={<HomeIcon />}
                     // isActive={auth ? router.pathname === '/' : router.pathname === '/accounts'}
                     // href={auth ? "/" : "accounts"}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="Main Menu">

                     {
                        auth ? <>
                           <SidebarItem
                              isActive={auth ? router.pathname === '/admin/account' : router.pathname === '/'}
                              title="Accounts"
                              icon={<AccountsIcon />}
                              href="/admin/account"
                           />
                           <SidebarItem
                              isActive={router.pathname === '/admin/business'}
                              title="Business"
                              icon={<BalanceIcon />}
                              href={auth ? "/admin/business" : "/"}
                           />
                        </>
                           : <>
                              {/* <SidebarItem
                                 isActive={router.pathname === '/admin/account'}
                                 title="Accounts"
                                 icon={<AccountsIcon />}
                                 href="/admin/account"
                              /> */}
                              <SidebarItem
                                 isActive={router.pathname === '/admin/business'}
                                 title="Business"
                                 icon={<BalanceIcon />}
                                 href="/admin/business"
                              />
                           </>
                     }

                  </SidebarMenu>
               </Sidebar.Body>
            </Flex>
         </Sidebar>
      </Box>
   );
};
