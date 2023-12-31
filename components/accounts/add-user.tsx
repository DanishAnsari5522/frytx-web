import { Button, Divider, Input, Modal, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';

export const AddUser = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);

   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };

   return (
      <div>
         <button  onClick={handler} className='text-white mb-4 bg-blue-400 pl-3 pr-3 pt-1 pb-1 rounded-xl'>
            Add User
         </button>
         <Modal
            closeButton
            aria-labelledby="modal-title"
            width="600px"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header css={{ justifyContent: 'start' }}>
               <Text id="modal-title" h4>
                  Add new user
               </Text>
            </Modal.Header>
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
                     />
                     <Input
                        label="Phone Number"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Phone Number"
                     />
                  </Flex>
               </Flex>
            </Modal.Body>
            <Divider css={{ my: '$5' }} />
            <Modal.Footer>
               <button onClick={closeHandler} className='text-white mb-4 bg-blue-400 pl-3 pr-3 pt-1 pb-1 rounded-xl'>
                  Add User
               </button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
