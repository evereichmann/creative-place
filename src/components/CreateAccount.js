import React from 'react';
import { useForm } from 'react-hook-form';

function CreateAccount() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return ( 
        <div id="main-body">
        <div id="form-content">  
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder="first name" 
                name="first_name" 
                ref={register({required: true, maxLength: 50, pattern: /[A-Za-z]/i})} 
                />
                { errors.first_name && 'First Name Error: Can only be letters, and max 50 charaicters'}
            <input 
                type="text" 
                placeholder="last name" 
                name="last_name" 
                ref={register({required: true, min: 50, pattern: /[A-Za-z]/i})} 
                />
                { errors.last_name && 'First Name Error: Can only be letters, and max 50 charaicters'}
            {/* <input 
            type="text" 
            placeholder="Email" 
            name="Email" 
            ref={register({required: true, pattern: /^\S+@\S+$/i})} 
            /> */}
            <input 
                type="text" 
                placeholder="username" 
                name="username" 
                ref={register({required: true, max: 20, min: 8})} 
                />
                { errors.username && 'Username Error: needs to be 8 - 20 charaters'}
            <input 
                type="text" 
                placeholder="password" 
                name="password" 
                ref={register({required: true, max: 8, min: 20})} 
                />
                { errors.password && 'Password Error: needs to be 8 - 20 charaters'}
            <input type="submit" />
      </form>
      </div>  
      </div>
     );
}
 
export default CreateAccount;