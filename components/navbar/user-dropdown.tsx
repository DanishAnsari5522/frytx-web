import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from './darkmodeswitch';
import { useRouter } from 'next/router';

export const UserDropdown = () => {
   const router = useRouter();
   const [emial, setEmail] = useState();
   const [name, setName] = useState();
   const logout = () => {
      localStorage.removeItem("user");
      router.reload();
   }
   useEffect(() => {
      // const auths = JSON.parse(localStorage.getItem('user'));
      // setName(auths.data.name)
      const storedUser = localStorage.getItem('user');
      if (storedUser !== null) {
         const auths = JSON.parse(storedUser);
         setName(auths.data.name);
      }


   })
   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => console.log({ actionKey })}
         >
            <Dropdown.Item key="profile" css={{ height: '$18' }}>
               <Text b color="inherit" css={{ d: 'flex' }}>
                  Signed in as
               </Text>
               <Text b color="inherit" css={{ d: 'flex' }}>
                  {/* {zoey@example.com} */}
                  {name}
               </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
               Settings
            </Dropdown.Item>
            {/* <Dropdown.Item key="help_and_feedback" withDivider>
               Help & Feedback
            </Dropdown.Item> */}
            <Dropdown.Item key="logout" withDivider color="error">
               <button onClick={logout}>Log Out</button>
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch />
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
