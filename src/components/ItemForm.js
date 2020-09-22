import React from 'react';
import { useForm } from 'react-hook-form';

function ItemForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="What's The Item" name="name" ref={register({required: true})} />
      { errors.name && 'Item Error: Must have a name'}
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
      { errors.description && 'Description Error: Must have a description'}

      <input type="submit" />
    </form>
  );
}

export default ItemForm;