import React, { useState, useEffect } from "react";
import registerClients from "../components/Clientes/RegisterClients.jsx";
import ListClients from "../components/Clientes/ListClients.jsx";
import { Toaster } from 'react-hot-toast';

import useDataEmployees from "../components/Employees/hooks/useDataEmployee.jsx";

const Employees = () => {
  // Efecto para cambiar el título de la página cuando se carga la página
  useEffect(() => {
    document.title = 'Clientes';
  }, []);

  const {
    activeTab,
       setActiveTab,
       id,
       setId,
       name,
       setName,
       lastName,
       setLastName,
       birthday,
       setBirthday,
       email,
       setEmail,
       password,
       setPassword,
       telephone,
       setTelephone,
       dui,
       setDui,
       isVerified,
       setIsVerified,
       errorCliente,
       setError,
       success,
       setSuccess,
       loading,
       setLoading,
       clients,
       setClients,
       cleanData,
       handleSubmit,
       fetchData,
       deleteClients,
       updateClient,
       handleUpdate 
  } = useDataEmployees();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestión de Clientes</h1>
        
       
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "list"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("list")}
              >
                Lista de Empleados
              </button>
              <button
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "form"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => {
                  setActiveTab("form");
                  cleanData();
                }}
              >
                {id ? "Editar Empleado" : "Agregar Empleado"}
              </button>
            </nav>
          </div>
        </div>

        
        <div>
          {activeTab === "list" && (
            <ListEmployees
              setId={setId}
              setActiveTab={setActiveTab}
              updateEmployee={updateEmployee}
              handleUpdate={handleUpdate}
              deleteEmployee={deleteEmployee}
              employees={employees}
              loading={loading}
            />
          )}
          
          {activeTab === "form" && (
            <div className="flex justify-center">
              <RegisterEmployees
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                salaries={salaries}
                setSalaries={setSalaries}
                idRole={idRole}
                setIdRole={setIdRole}
                errorEmpleado={errorEmpleado}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                employees={employees}
                setEmployees={setEmployees}
                cleanData={cleanData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            </div>
          )}
        </div>
      </div>
      
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Employees;