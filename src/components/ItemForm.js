import React from 'react';
import { Label, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { addItem } from '../actions/auth'


function ItemForm(props) {

    const { register, handleSubmit, errors } = useForm();
  
    const onSubmit = data => {
        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                artbox_id: props.auth.artbox.id
            })
          }
        
        fetch('http://localhost:3001/items', reqObj)
            .then(resp => resp.json())
            .then(data => {
                props.addItem(data)
                console.log(data)
            })  
    }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input list="name" name="name"  ref={register({ required: true })}></input>
      <datalist id="name" name="name">
        <option>Bic Pen</option>
        <option>Prismacolor Color Pencil</option>
        <option>Prismacolor Marker</option>
        <option>Staedtler Pencil</option>
        <option>Faber-Castell Pencil</option>
        <option>Winsor & Newton Pencil</option>
        <option>Dick Blick Color Pencil</option>
        <option>Dick Blick Marker</option>
        <option>Copic Marker</option>
        <option>Tombow Marker</option>
        <option>Sharpie Marker</option>
        <option>Pigma Liners</option>
        <option>Highlighter</option>
        <option>Jelly Pen</option>
        <option>Zebra Pen</option>
        <option>Staedtler Triplus</option>
        <option>Papermate Pen</option>
      </datalist>
      { errors.name && <Label basic color='red'>'Item Error: Must have a name'</Label>}
      <input list="description" name="description"  ref={register({ required: true })}></input>
      <datalist id="description" name="description">
        <option>Black</option>
        <option>White</option>
        <option>Grey</option>
        <option>Red</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Green</option>
        <option>Blue</option>
        <option>Purple</option>
        <option>Pink</option>
      </datalist>
      { errors.description && <Label basic color='red'>'Description Error: Must have a description'</Label>}
      <Button type="submit">Add</Button>
    </Form>
  );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);