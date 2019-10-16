import React from 'react';

const Members = props => {
    return (
        <div className='member-list'>
            {props.teamList.map((member, index) => {
                return (
                    <div className='member' key={index}>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Members;