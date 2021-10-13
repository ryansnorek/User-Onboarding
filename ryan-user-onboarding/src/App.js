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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
