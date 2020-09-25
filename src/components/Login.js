import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { loginSuccess } from '../actions/auth'
import { connect } from 'react-redux'
import { Label, Form, Button } from 'semantic-ui-react'

function Login(props) {

    const [error, setError] = useState(null)
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        const reqObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        
        fetch('http://localhost:3001/api/v1/auth', reqObj)
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
              setError(data.error)
          } else {
            localStorage.setItem('CreativePlace', data.token)
            props.loginSuccess(data)
            props.history.push('/')
          }
        })
    }

    return ( 
        <div id="main-body">
            <div id="form-content">
            { error ? <h2>{ error }</h2> : null }
            <Form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    ref={register({required: true})} 
                    />
                    { errors.username && <Label basic color='brown'>'Username Error: feild cannot be empty'</Label> }
                <input 
                    type="text" 
                    placeholder="password" 
                    name="password" 
                    ref={register({required: true})}
                    />
                    { errors.password && <Label basic color='brown'>'Password Error: feild cannot be empty'</Label>}
                <Form.Field>
                <Button color='brown' type="submit">Submit</Button>
                </Form.Field>
            </Form>
            </div>
        </div>
     );
}
 
const mapDispatchToProps = {
    loginSuccess
  }
  
  export default connect(null, mapDispatchToProps)(Login)
