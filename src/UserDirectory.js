import React, { useState } from 'react';

const UserDirectory = () => {
    const [addUser, setAddUser] = useState([]); // This holds the list of users
    const [selectedUser, selectSelectedUser] = useState(''); // This holds the currently inputted user

    const addUsr = () => {
        if (selectedUser.trim()) { // Check if the input is not empty
            setAddUser(prevUsers => [...prevUsers, selectedUser]); // Add new user to the existing list
            selectSelectedUser(''); // Clear the input field after adding the user
        }
    }

    return (
        <>
            <div style={{ display: "flex", border: "0px", justifyContent: "left", minHeight: "20px" }}>
                <span>Add User</span>
                <input
                    type="text"
                    style={{ marginLeft: "5px" }}
                    value={selectedUser} // Control the input field with the state
                    onChange={(e) => selectSelectedUser(e.target.value)}
                />
                <button onClick={addUsr} style={{ marginLeft: "5px" }}>Add</button>
                <div>

            </div>
            </div>
            <div style={{ display: 'flex',alignItems: 'flex-start',flexDirection: 'column', gap: '10px', marginTop: '20px', justifyContent: "left", minHeight: "20px" }}>
                     {addUser.map((user, index) => (
                    <div  key={index}>{user} </div> // Add a unique key for each user
                        ))}
            </div>
        </>
    );
}

export default UserDirectory;