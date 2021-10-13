import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialDisabled = true

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    // Validate the new inputs with yup before setting state
    // yup
  }
  const inputChange = (name, value) => {
    // Every time the input changes we will validate the change
    // Then set the formValues state with only the changed form values
    // validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    // When the user presses the submit button we want to post the form
    // and then reset the fields to the blank initial values
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally(() => setFormValues(initialFormValues))
  }
  return (
    <div className="App">
      <Form 
        values={formValues} 
        disabled={disabled}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
