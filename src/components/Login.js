import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    ref={register({required: true})} 
                    />
                    { errors.username && 'Username Error: feild cannot be empty'}
                <input 
                    type="text" 
                    placeholder="password" 
                    name="password" 
                    ref={register({required: true})}
                    />
                    { errors.password && 'Password Error: feild cannot be empty'}

                <input type="submit"/>
            </form>
        </div>
     );
}
 
export default Login;
