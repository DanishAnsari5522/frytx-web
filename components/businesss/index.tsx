import { Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BusinessTable from './businessTable';
import dynamic from 'next/dynamic';

const TableLayoutDanish = dynamic(
   () => import('./businessTable').then((mod) => mod.default),
   {
      ssr: false,
   }
);

export const Businesss = () => {
   const router = useRouter()
   useEffect(() => {
      let auth = localStorage.getItem('user');
      if (!auth) {
         router.push("/auth/login")
      }
   }, [])
   return (
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <TableLayoutDanish />
         {/* <BusinessTable /> */}
      </Flex>
   );
};
