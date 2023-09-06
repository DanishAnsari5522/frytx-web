import React, { useEffect, useState } from 'react';
import { Box } from '../styles/box';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { TestTable } from '../businesss/TestTable';
// import TableLayoutDan from '../businesss/Test';

// const Chart = dynamic(
//    () => import('../charts/steam').then((mod) => mod.Steam),
//    {
//       ssr: false,
//    }
// );

// const TableLayoutDanish = dynamic(
//    () => import('../businesss/businessTable1').then((mod) => mod.BusinessTable1),
//    {
//       ssr: false,
//    }
// );

export const Content = () => {
   // const [auth, setAuth] = useState(false);
   const router = useRouter()
   useEffect(() => {
      let auth = localStorage.getItem('user');
      if (!auth) {
         router.push("/landing")
      }
   }, [])
   return (
      <Box css={{ overflow: 'hidden', height: '100%' }}>
         <div>
            <p>Home Page</p>
            {/* <Chart /> */}
            {/* <TableLayoutDanish /> */}
            {/* <TestTable /> */}
            {/* <TableLayout /> */}
            {/* <TableLayoutDan /> */}
         </div>
      </Box>
   );
}
