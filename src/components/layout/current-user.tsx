import { useGetIdentity } from '@refinedev/core'
import { Button, Popover } from 'antd'
import React from 'react'
import type {User} from '@/graphql/schema.types';
import { CustomAvatar } from '../custom-avatar';

function CurrentUser() {
    const {data: user} = useGetIdentity<User>()
  return (
    <>
    <Popover placement='bottomRight' trigger={"click"} 
    overlayInnerStyle={{padding: 0}}
    overlayStyle={{zIndex: 9999}}
    >
         <CustomAvatar /> 
    </Popover>
    </>
  )
}

export default CurrentUser