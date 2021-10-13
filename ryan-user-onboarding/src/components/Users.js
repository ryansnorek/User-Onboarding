import React from 'react'

export default function Users({ user }) {

    const { name, email, password, terms } = user

    return (
        <div className="user">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{password}</h4>
            <h4>{terms}</h4>
        </div>
    )
}
