import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { loginSuccess } from '../actions/auth'
import { connect } from 'react-redux'

function CreateAccount(props) {
    const [error, setError] = useState(null)
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        const reqObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'user': data })
        }
      
        fetch('http://localhost:3001/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
              setError(data.error)
          }else if (data.username == "has already been taken"){
            setError("sorry about this but that username has taken already")
          } 
          else {
            props.loginSuccess(data)
            props.history.push('/')
          }
        })
      }

    return ( 
        <div id="main-body">
        <div id="form-content">  
        { error ? <h3>{ error }</h3> : null }
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
 
const mapDispatchToProps = {
    loginSuccess
  }
  
  export default connect(null, mapDispatchToProps)(CreateAccount)