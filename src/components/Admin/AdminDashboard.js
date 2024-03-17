import React, { useState } from "react";
import UserList from './UserList';
import UserDetails from './UserDetails';
import Navbar from "../Navbar";

const AdminDashboard = () => {
    const users = [
        { id: 1, name: 'Jose Eduardo Arevalo Coutino', email: 'jose@example.com', role: 'Normal', isCollaborator: false },
        { id: 2, name: 'Hospitalidad y solidaridad', email: 'HyS@example.com', role: 'Colaborador', isCollaborator: true, address: "Carretera a Puerto Madero, Kilómetro 12+500, 30799 Tapachula de Córdova y Ordóñez, Chis., México" },
        { id: 3, name: 'Pablo Julian Garai de Leon', email: 'pablo@example.com', role: 'Normal', isCollaborator: false, },
        { id: 4, name: 'Jose Marti', email: 'josemarti@example.com', role: 'Colaborador', isCollaborator: true, address: "Ciudad hidalgo" },
    ];

    const [selectedUser, setSelectedUser] = useState(null); 
    const [filter, setFilter] = useState('normal');

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const handleDeleteUser = (userId) => {
        console.log(`Eliminar usuario con ID ${userId}`);
    };

    const handleAcceptCollaborator = (userId) => {
        console.log(`ACEPTAR SOLICITUD ${userId}`);
    };

    const normalUsers = users.filter(user => user.role === 'Normal');
    const collaboratorUsers = users.filter(user => user.role === 'Colaborador');

    return (
        <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Panel de administración</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-center"><h2>Usuarios</h2></div>
                        <UserList users={normalUsers} onSelect={handleUserSelect} onDeleteUser={handleDeleteUser} onAcceptCollaborator={handleAcceptCollaborator} />
                    </div>
                    <div className="col-md-6">
                        <div className="text-center"><h2 >Usuarios Colaboradores</h2></div>
                        <UserList users={collaboratorUsers} onSelect={handleUserSelect} onDeleteUser={handleDeleteUser} onAcceptCollaborator={handleAcceptCollaborator} />
                    </div>
                </div>
                {selectedUser && (
                    <div className="row mt-4">
                        <div className="col-md-6 mx-auto">
                            <h2>Detalles del Usuario</h2>
                            <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
