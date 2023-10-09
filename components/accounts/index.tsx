import "tabulator-tables/dist/css/tabulator.min.css";
import { ReactTabulator } from 'react-tabulator';
import React from 'react';
import { Flex } from '../styles/flex';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Table } from "@nextui-org/react";
import Link from 'next/link';
import { EyeIcon } from './EyeIcon';
import { EditIcon } from './EditIcon';
import { DeleteIcon } from './DeleteIcon';
import { AddUser } from './add-user';
import { Button, Divider, Input, Modal, Text, Loading } from '@nextui-org/react';


const columns = [
   { title: "Name", field: "name", headerFilter: "input" },
   { title: "Email", field: "email", headerFilter: "input" },
   { title: "Phone No.", field: "phone", headerFilter: "input" },
   { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
];

export const Accounts = () => {
   const router = useRouter()
   const [lod, setLod] = useState([]);
   const [data1, setData1] = useState([]);
   const [visibleView, setVisibleView] = React.useState(false);
   const [visibleEdit, setVisibleEdit] = React.useState(false);
   const [dataofuser, setDataofuser] = useState([]);
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [nameUpdate, setNameUpdate] = useState('');
   const [emailUpdate, setEmailUpdate] = useState('');
   const [phoneUpdate, setPhoneUpdate] = useState('');
   const [informationTextUpdate, setInformationTextUpdate] = useState('');
   const [currentId, setCurrentId] = useState('');

   const handlerView = async (id: string) => {
      let result = await fetch(`https://frytx-backend.onrender.com/v1/user/getuserbyid?id=${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'

         },
      }).then(res => res.json()).then(
         async data => {
            if (data.success == false) {
            } else if (data.success == true) {
               // console.log(data.data);
               setDataofuser(data.data);
               setName(data.data.name);
               setEmail(data.data.email);
               setPhone(data.data.phone);
            }
         }
      )
      setVisibleView(true);
   }


   const handlerEdit = async (id: string) => {
      setCurrentId(id)
      let result1 = await fetch(`https://frytx-backend.onrender.com/v1/user/getuserbyid?id=${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'

         },
      }).then(res => res.json()).then(
         async data => {
            if (data.success == false) {
            } else if (data.success == true) {
               // console.log(data.data);
               setDataofuser(data.data);
               setNameUpdate(data.data.name);
               setEmailUpdate(data.data.email);
               setPhoneUpdate(data.data.phone);
            }
         }
      )
      setVisibleEdit(true);
   }

   const UpdateUser = async () => {
      if (!nameUpdate) {
         setInformationTextUpdate("Name Required");
      } else if (!emailUpdate) {
         setInformationTextUpdate("Email Required");
      } else if (!phoneUpdate) {
         setInformationTextUpdate("phone Required");
      }
      // console.log("match");
      let result = await fetch(`https://frytx-backend.onrender.com/v1/user/updateUser/${currentId}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ name: nameUpdate, email: emailUpdate, phone: phoneUpdate })
      }).then(res => res.json()).then(
         async data => {
            // console.log(data.user_detail);
            if (data.user_detail) {
               getUser()
               setVisibleEdit(false);
            }
         }
      )
   }

   const closeHandlerView = () => {
      setVisibleView(false);
   }

   const closeHandlerEdit = () => {
      setVisibleEdit(false);
   }
   const getUser = async () => {
      let result = await fetch('https://frytx-backend.onrender.com/v1/user/getuser', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         },
      }).then(res => res.json()).then(
         async data => {
            if (data.success == false) {
            } else if (data.success == true) {
               // console.log(data.data);
               setData1(data.data);
            }
         }
      )
   }

   useEffect(() => {
      let auth = localStorage.getItem('user');
      if (!auth) {
         router.push("/auth/login")
      }
      getUser();
   }, [])



   return (
      <>
         {/* // for view detail start */}
         <Modal
            closeButton
            aria-labelledby="modal-title-view"
            width="600px"
            open={visibleView}
            onClose={closeHandlerView}
         >
            <Modal.Header css={{ justifyContent: 'start' }}>
               <Text id="modal-title-view" h2 className='text-xl'>
                  Account Detail
               </Text>
            </Modal.Header>
            <Text id="modal-title-view" h4 className='text-red-400'>
               {/* {informationText} */}
            </Text>
            <Divider css={{ my: '$5' }} />
            <Modal.Body css={{ py: '$10' }}>
               <Text>Name :- {name}</Text>
            </Modal.Body>
            <Modal.Body css={{ py: '$10' }}>
               <Text>Email :- {email}</Text>
            </Modal.Body>
            <Modal.Body css={{ py: '$10' }}>
               <Text>Phone :- {phone}</Text>
            </Modal.Body>
            <Divider css={{ my: '$5' }} />
         </Modal>
         {/* // for view detail end */}

         {/* // for Edit detail start */}
         <Modal
            closeButton
            aria-labelledby="modal-title-edit"
            width="600px"
            open={visibleEdit}
            onClose={closeHandlerEdit}
         >
            <Modal.Header css={{ justifyContent: 'start' }}>
               <Text id="modal-title-edit" h2 className='text-xl'>
                  Edit Details
               </Text>
            </Modal.Header>
            <Text id="modal-title-edit" h4 className='text-red-400'>
               {informationTextUpdate}
            </Text>
            <Divider css={{ my: '$5' }} />
            <Modal.Body css={{ py: '$10' }}>
               <Flex
                  direction={'column'}
                  css={{
                     'flexWrap': 'wrap',
                     'gap': '$8',
                     '@lg': { flexWrap: 'nowrap', gap: '$12' },
                  }}
               >
                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': { flexWrap: 'nowrap' },
                     }}
                  >
                     <Input
                        label="Name"
                        bordered
                        clearable
                        fullWidth
                        size="lg"
                        placeholder="Name"
                        value={nameUpdate}
                        onChange={(e) => { setNameUpdate(e.target.value) }}
                     />
                  </Flex>

                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': { flexWrap: 'nowrap' },
                     }}
                  >
                     <Input
                        label="Email"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Email"
                        value={emailUpdate}
                        onChange={(e) => { setEmailUpdate(e.target.value) }}
                     />
                     <Input
                        label="Phone Number"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Phone Number"
                        maxLength={10}
                        value={phoneUpdate}
                        onChange={(e) => { setPhoneUpdate(e.target.value) }}
                     />
                  </Flex>
               </Flex>
            </Modal.Body>
            <Divider css={{ my: '$5' }} />
            <Modal.Footer>
               {/* {loading ? <Loading /> : <p></p>} */}
               <button onClick={UpdateUser} className='text-white mb-4 bg-blue-400 w-1/5 pt-1 pb-1 rounded-xl'>
                  Add User
               </button>
            </Modal.Footer>
         </Modal>
         {/* // for Edit detail end */}

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


            <Flex direction={'row'} css={{ gap: '$6' }} wrap={'wrap'}>
               {/* <AddUser /> */}
            </Flex>
            <Text h3 className='mb-4'>All Accounts</Text>

            <div>
               <Table
                  lined
                  headerLined
                  bordered
                  shadow={true}
                  aria-label="Example static bordered collection table"
                  selectionMode="single"
                  css={{
                     height: "auto",
                     minWidth: "100%",
                  }}
               >
                  <Table.Header>
                     <Table.Column>NAME</Table.Column>
                     <Table.Column>EMAIL</Table.Column>
                     <Table.Column>PHONE</Table.Column>
                     <Table.Column>ACTIONS</Table.Column>
                  </Table.Header>
                  {
                     data1.length >= 1 ?
                        <Table.Body>
                           {data1.map((value, ind) => {
                              return (
                                 <Table.Row key={ind}>
                                    <Table.Cell>{value['name']}</Table.Cell>
                                    <Table.Cell>{value['email']}</Table.Cell>
                                    <Table.Cell>{value['phone']}</Table.Cell>
                                    <Table.Cell>
                                       <button onClick={() => { handlerView(value['_id']) }}><EyeIcon size={20} fill="#979797" /></button>

                                       <button onClick={() => { handlerEdit(value['_id']) }}><EditIcon size={20} fill="#357a38" className="ml-3" /></button>


                                       <button><DeleteIcon size={20} fill="#FF0080" className="ml-3" /></button>
                                    </Table.Cell>
                                 </Table.Row>
                              )
                           })}
                        </Table.Body>
                        : <Table.Body>
                           <Table.Row>
                              <Table.Cell>Loading<Loading type="points" size="sm" className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' /></Table.Cell>
                              <Table.Cell>Loading<Loading type="points" size="sm" className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' /></Table.Cell>
                              <Table.Cell>Loading<Loading type="points" size="sm" className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' /></Table.Cell>
                              <Table.Cell>Loading<Loading type="points" size="sm" className='text-white  bg-blue-600 w-full py-3 rounded-md mt-4' /></Table.Cell>
                           </Table.Row>
                        </Table.Body>
                  }
               </Table>
            </div>
         </Flex>
         {/* <ReactTabulator
            data={data1}
            columns={columns}
            layout={"fitColumns"}
            responsiveLayout={"hide"}
            height={"500px"}
            pagination={'local'}
            paginationSize={4}

         /> */}
      </>
   );
};
