import React, { useState } from 'react';
import Card from './Card'

function UsersList(props) {

    const listItems = props.users.map(({username,age}) =>
    <li key={username+age}>{username} {age}</li>
  );
    return (
        <Card>
        <div className="users">
        <ul>{listItems}</ul>
       </div>
        </Card>

    )
}

export default UsersList;