import React from 'react';
import styled from 'styled-components';

const MemberCard = styled.div`
    width: 25%;
    margin: 0 auto;
    margin-top: 2%;
    border: 2px solid black;
    background-color: slategrey;
    color: khaki;
`;
const CardArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Members = props => {
    return (
        <CardArea>
            {props.teamList.map((member, index) => {
                return (
                    <MemberCard key={index}>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </MemberCard>
                );
            })}
        </CardArea>
    );
};

export default Members;