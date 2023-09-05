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

export const SidebarWrapper = () => {
   const router = useRouter();
   const { collapsed, setCollapsed } = useSidebarContext();
   // const [auth, setAuth] = useState(true);
   useEffect(() => {
      // let auth1 = localStorage.getItem('user');
      // if (auth1) {
      //    setAuth(true);
      // }
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
                     <SidebarItem
                        isActive={router.pathname === '/admin/account'}
                        title="Accounts"
                        icon={<AccountsIcon />}
                        href="/admin/account"
                     />
                     <SidebarItem
                        isActive={router.pathname === '/admin/business'}
                        title="Business"
                        icon={<BalanceIcon />}
                        href="/admin/business"
                     />
                     {/* <SidebarItem
                        isActive={router.pathname === '/payments'}
                        title="Payments"
                        icon={<PaymentsIcon />}
                     />
                     <CollapseItems
                        icon={<BalanceIcon />}
                        items={['Banks Accounts', 'Credit Cards', 'Loans']}
                        title="Balances"
                     />

                     <SidebarItem
                        isActive={router.pathname === '/customers'}
                        title="Customers"
                        icon={<CustomersIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/products'}
                        title="Products"
                        icon={<ProductsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/reports'}
                        title="Reports"
                        icon={<ReportsIcon />}
                     /> */}
                  </SidebarMenu>

                  {/* <SidebarMenu title="General">
                     <SidebarItem
                        isActive={router.pathname === '/developers'}
                        title="Developers"
                        icon={<DevIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/view'}
                        title="View Test Data"
                        icon={<ViewIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/settings'}
                        title="Settings"
                        icon={<SettingsIcon />}
                     />
                  </SidebarMenu> */}

                  {/* <SidebarMenu title="Updates">
                     <SidebarItem
                        isActive={router.pathname === '/changelog'}
                        title="Changelog"
                        icon={<ChangeLogIcon />}
                     />
                  </SidebarMenu> */}
               </Sidebar.Body>
               {/* <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size={'sm'}
                     />
                  </Tooltip>
               </Sidebar.Footer> */}
            </Flex>
         </Sidebar>
      </Box>
   );
};
