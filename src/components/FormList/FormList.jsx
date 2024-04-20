import React, { useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import shortid from 'shortid';
import Notiflix from 'notiflix';
import { Form, Label, Input, Button, Span } from './FormList.styled';

const FormList = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (setter) => (e) => {
    const prevValue = e.target.value;
    setter(prevValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prevName = name;
    const prevNumber = number;

    const isValidated = validateContact(prevName, prevNumber);
    if (!isValidated) return;

    onSubmit({ id: shortid.generate(), name: prevName, number: prevNumber });

    resetForm();
  };

  const validateContact = (prevName, prevNumber) => {
    if (!prevName.trim() || !prevNumber.trim()) {
      Notiflix.Notify.failure('Some field is empty.');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setName(prevName => '');
    setNumber(prevNumber => '');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          autoComplete='on'
          placeholder="Contact Name"
          name="name"
          value={name}
          onChange={handleChange(setName)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          placeholder="Contact Number"
          name="number"
          value={number}
          onChange={handleChange(setNumber)}
          pattern="\+?\d{1,4}[-.\s]*\(?\d{1,3}\)?[-.\s]*\d{1,4}[-.\s]*\d{1,4}[-.\s]*\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add to contacts
      <UserAddOutlined /></Button>
    </Form>
  );
};

export default FormList;
