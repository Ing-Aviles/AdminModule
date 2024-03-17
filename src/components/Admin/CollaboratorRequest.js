import React from "react";

const CollaboratorRequest = () => {
    const collaboratorRequest = [
        { id: 5, username: "Universidad Politecnica de Tapachula", email: "uptap@example.com", address: "Carretera a Puerto Madero Km. 24+300, Tapachula - Puerto de San Bento, 30830 Puerto de San Benito, Chis., México" },
        { id: 6, username: "Tecnologico de Tapachula", email: "TECNM@example.com", address: ""},
        { id: 7, username: "Universidad Autonoma de Chiapas", email: "UNACH@example.com", address: "1081 Colina Universitaria s/n, Col. Terán. Tuxtla Gutiérrez, Chiapas, C.P. 29050." },
    ];

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Solicitudes de Colaborador</h2>
            <ul className="list-group">
                {collaboratorRequest.map((request) => (
                    <li key={request.id} className="list-group-item d-flex flex-column align-items-start">
                        <div>
                            <strong>Usuario: </strong> {request.username}
                        </div>
                        <div>
                            <strong>Email: </strong> {request.email}
                        </div>
                        <div>
                            <strong>Dirección: </strong> {request.address}
                        </div>
                        <button className="btn btn-primary btn-sm mt-3">Aceptar solicitud</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollaboratorRequest;
