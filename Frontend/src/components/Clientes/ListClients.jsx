/** Tienes que cambiar toda esta parte */


import React from "react";

const ListClients = ({
  deleteClient,
  updateClient,
  loading,
  clients,
  setActiveTab,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setActiveTab("form")}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Agregar cliente
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Nombre</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Apellido</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Fecha de Nacimiento</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Correo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Contraseña</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Teléfono</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">DUI</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Verificado</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">
                    Cargando...
                  </td>
                </tr>
              )}
              
              {!loading && employees?.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">
                    No hay clientes registrados
                  </td>
                </tr>
              )}

              {!loading && clients?.map((clients) => (
                <tr key={clients._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{clients.name}</td>
                  <td className="py-3 px-4 text-gray-600">{clients.lastName}</td>
                  <td className="py-3 px-4 text-gray-800">{clients.birthday}</td>
                  <td className="py-3 px-4 text-gray-600">{clients.email}</td>
                  <td className="py-3 px-4 text-gray-600">{clients.password}</td>
                  <td className="py-3 px-4 text-gray-600">{clients.telephone}</td>
                  <td className="py-3 px-4 text-gray-600">{clients.dui}</td>
                  <td className="py-3 px-4 text-gray-600">{clients.isVerified}</td>
                  
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateClient(clients)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteClient(clients._id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListClients;
