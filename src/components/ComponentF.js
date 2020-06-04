import React, { Component,useContext } from 'react'
import { UserConsumer } from './UserContext';
import { UserContext, ChannelContext } from '../App';

function ComponentF(){
   const user = useContext(UserContext);
  const channel= useContext(ChannelContext);

     
        return (    
            <div>
                {user}-{channel}
            </div>
        )
    }


export default ComponentF
