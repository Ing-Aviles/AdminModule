import React, { useState } from "react";
import UserDetails from "./UserDetails";

const UserList = ({ users, onSelect, onDeleteUser, onAcceptCollaborator }) => {
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDeleteUser = (userId) => {
        onDeleteUser(userId);
    };

    const handleAcceptCollaborator = (userId) => {
        onAcceptCollaborator(userId);
    };

    const handleUserDetails = (user) => {
        setSelectedUser(user);
        setShowUserDetails(true);
    };

    return (
        <div>
            {showUserDetails ? (
                <UserDetails user={selectedUser} onBack={() => setShowUserDetails(false)} />
            ) : (
                <ul className="list-group">
                    {users.map((user) => (
                        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div onClick={() => onSelect(user)}>
                                {user.name}
                            </div>
                            <div>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>Eliminar</button>

                                <button onClick={() => handleUserDetails(user)} className="btn btn-primary btn-sm mx-2">Mostrar Detalles</button>

                                {/* {user.role === 'Colaborador' && (
                                    <button className="btn btn-primary btn-sm mx-2" onClick={() => handleAcceptCollaborator(user.id)}>Aceptar Colaborador</button>
                                )} */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
