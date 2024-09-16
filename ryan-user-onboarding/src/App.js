import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'
import Users from './components/Users'
import schema from './validation'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(false)

  const inputChange = (name, value) => {
    // Every time the input changes we will validate the change
    // Then set the formValues state with only the changed form values
    // Validate the new inputs with yup before setting state
    yup.reach(schema, name).validate(value)
    setFormValues({ ...formValues, [name]: value })
  }

  // Each time the form values change run them through the schema for validation
  // If they are valid then allow the user to submit
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const formSubmit = () => {
    // When the user presses the submit button we want to post the form
    // and then reset the fields to the blank initial values
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        // set users state with the new data injected before the users data
        setUsers([res.data, ...users])
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
      <div className="users">
        <h1>Users</h1>
        {users.map((user, idx) => <Users key={idx} user={user}/>)}
      </div>
    </div>
  );
}

export default App;
