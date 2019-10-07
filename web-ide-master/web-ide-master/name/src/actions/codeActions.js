import axios from 'axios';
import { SAVE_OUTPUT } from './types';

export const giveOutput =(output) =>dispatch=>{
    dispatch({
      type:SAVE_OUTPUT,
      payload:output
    })
};

export const getOutputPython =(CodeData,history)=>{
    axios
        .post('/users/p',CodeData)
        .then(res=>console.log(res.data)
        //history.push('/login')
        )
        .catch(err=>
          console.log(err)
         );
};

export const getOutputPhp =(CodeData,history)=>{
  axios
      .post('/users/a',CodeData)
      .then(res=>console.log(res.data)
      //history.push('/login')
      )
      .catch(err=>
        console.log(err)
       );
};