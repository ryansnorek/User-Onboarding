import React from 'react'

export default function Form(props) {
    const { values, disabled, change, submit } = props

    const onChange = (e) => {
        // Pull the data out of the event object after the user has made a change
        const { name, value, checked, type } = e.target
        // if the value type is a checkbox than use checked instead of value
        const theValue = type === 'checkbox' ? checked : value
        // setFormValues(...formValues, [name]: value)
        console.log(checked)
        change(name, theValue)
    }

    const onSubmit = (e) => {
        // Prevent browser refresh
        e.preventDefault()
        // Posts the new user and resets the form values
        submit()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name 
                    <input type="text" name="name" value={values.name} onChange={onChange}></input>
                </label>
                <label>Email 
                    <input type="email" name="email" value={values.email} onChange={onChange}></input>
                </label>
                <label>Password
                    <input type="password" name="password" value={values.password} onChange={onChange}></input>
                </label>
                <label>Terms
                    <input type="checkbox" name="terms" checked={values.terms} onChange={onChange}></input>
                </label>
                <button id='submit' disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}
