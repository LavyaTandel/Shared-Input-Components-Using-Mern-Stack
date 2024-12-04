// src/components/Form.js
import React, { useState } from 'react';
import SharedInput from './SharedInput';

const Form = () => {
  const [formData, setFormData] = useState({
    textInput: '',
    textareaInput: '',
    checkboxInput: false,
    radioInput: ''
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Data submitted successfully');
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SharedInput
        type="text"
        name="textInput"
        value={formData.textInput}
        onChange={handleChange}
        label="Text Input"
      />
      <SharedInput
        type="textarea"
        name="textareaInput"
        value={formData.textareaInput}
        onChange={handleChange}
        label="Textarea Input"
      />
      <SharedInput
        type="checkbox"
        name="checkboxInput"
        value={formData.checkboxInput}
        onChange={handleChange}
        label="Checkbox Input"
      />
      <SharedInput
        type="radio"
        name="radioInput"
        value={formData.radioInput}
        onChange={handleChange}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ]}
        label="Radio Input"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;