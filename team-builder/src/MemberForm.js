import React, {useState} from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
    background-color: transparent;
    color: dodgerblue;
    font-weight: bold;
    border-radius: 10px;
    border: 2px solid lightseagreen;
    padding: 1%
    margin: 2%;
    &:hover {
        background-color: dodgerblue;
        color: white;
    }
`;
const Section = styled.section`
    color: lightseagreen;
    font-weight: bold;
    padding: .5%;
`;
const TeamForm = styled.form`
    width: 35%;
    margin: 0 auto;
    border: 2px solid lightseagreen;
`;

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
        setMember({name: '', email: '', role: ''});
        props.addNewMembers(member);
    };

    return (
        <TeamForm onSubmit={submitForm}>
            <label htmlFor='name'><Section>Name: </Section></label>
            <input 
            name='name'
            id='name'
            type='text'
            placeholder='name'
            onChange={changeHandler}
            value={member.name}
            /><br />

            <label htmlFor='email'><Section>Email: </Section></label>
            <input 
            name='email'
            id='email'
            type='text'
            placeholder='email'
            onChange={changeHandler}
            value={member.email}
            /><br />

            <label htmlFor='role'><Section>Role: </Section></label>
            <input 
            name='role'
            id='role'
            type='text'
            placeholder='role'
            onChange={changeHandler}
            value={member.role}
            /><br />

            <SubmitButton type='submit'>Add New Member</SubmitButton>
        </TeamForm>
    );
};

export default MemberForm;