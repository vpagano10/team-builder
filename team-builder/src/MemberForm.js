import React, {useState} from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMembers(member);
        setMember({name: '', email: '', role: ''});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input 
            name='name'
            id='name'
            type='text'
            placeholder='name'
            onChange={changeHandler}
            value={member.name}
            /><br />

            <label htmlFor='email'>Email: </label>
            <input 
            name='email'
            id='email'
            type='text'
            placeholder='email'
            onChange={changeHandler}
            value={member.email}
            /><br />

            <label htmlFor='role'>Role: </label>
            <input 
            name='role'
            id='role'
            type='text'
            placeholder='role'
            onChange={changeHandler}
            value={member.role}
            /><br />

            <button type='submit'>Add New Member</button>
        </form>
    );
};

export default MemberForm;