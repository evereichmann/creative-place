import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { loginSuccess } from '../actions/auth'
import { connect } from 'react-redux'
import { Label, Form, Button } from 'semantic-ui-react'

function CreateAccount(props) {
    const [error, setError] = useState(null)
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
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
        <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder="first name" 
                name="first_name" 
                ref={register({required: true, maxLength: 50, pattern: /[A-Za-z]/i})} 
                />
                { errors.first_name && <Label basic color='brown'>'First Name Error: Can only be letters, and max 50 charaicters'</Label>}
            <input 
                type="text" 
                placeholder="last name" 
                name="last_name" 
                ref={register({required: true, min: 50, pattern: /[A-Za-z]/i})} 
                />
                { errors.last_name && <Label basic color='brown'>'Last Name Error: Can only be letters, and max 50 charaicters'</Label>}
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
                { errors.username && <Label basic color='brown'>'Username Error: needs to be 8 - 20 charaters'</Label>}
            <input 
                type="text" 
                placeholder="password" 
                name="password" 
                ref={register({required: true, max: 8, min: 20})} 
                />
                { errors.password && <Label basic color='brown'>'Password Error: needs to be 8 - 20 charaters'</Label>}
            <Form.Field>
            <Button color='brown' type="submit">Submit</Button>
            </Form.Field>
      </form>
      </Form>
      </div>  
      </div>
     );
}
 
const mapDispatchToProps = {
    loginSuccess
  }
  
  export default connect(null, mapDispatchToProps)(CreateAccount)