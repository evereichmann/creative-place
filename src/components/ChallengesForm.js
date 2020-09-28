import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { Button, Form, Label } from 'semantic-ui-react'


const ChallengesForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const reqObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  ...data,
                user_id: props.auth.id
                })
            }
        fetch('http://localhost:3001/challenges', reqObj)
            .then(resp => resp.json())
            .then(data => {
                //update redux maybe. Don't really need to
            })    
    }

    return ( 
        <div>
            {props.auth ? 
                <div>
                    <p>Create your own challenge and share it with the art community.</p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text" 
                            placeholder="title" 
                            name="title" 
                            ref={register({required: true})} 
                            />
                            { errors.title && <Label basic color='red'>'Title Error: must have a title'</Label>}
                        <input 
                            type="text" 
                            placeholder="length" 
                            name="length" 
                            ref={register({required: true})} 
                            />
                            { errors.length && <Label basic color='red'>'Length Error: must have a duration'</Label>}
                        <textarea 
                            type="text" 
                            placeholder="description" 
                            name="description" 
                            ref={register({required: true})} 
                            />
                            { errors.rules && <Label basic color='red'>'Rule Error: must have rules'</Label>}

                        <input 
                            type="text" 
                            placeholder="img_url" 
                            name="img_url" 
                            ref={register}
                            />
                        <Button color="blue" type="submit">Submit</Button>
                        </Form>
                </div>
            
            : 
            <p>create an account</p>}
            
        </div>
     );
}
const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}
 
export default connect(mapStateToProps, null)(ChallengesForm);