import React from "react";

const UserDetails = ({ user, onBack }) => {
    const hasAddress = user.address && user.address.trim() !== '';

    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Detalles del Usuario</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>ID: </strong>{user.id}</li>
                        <li className="list-group-item"><strong>Nombre: </strong>{user.name}</li>
                        <li className="list-group-item"><strong>Email: </strong>{user.email}</li>
                        {hasAddress && <li className="list-group-item"><strong>Direccion: </strong> {user.address}</li>}
                    </ul>
                    <button className="btn btn-primary btn-sm mx-2" onClick={onBack}>Volver a la lista de usuarios</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
