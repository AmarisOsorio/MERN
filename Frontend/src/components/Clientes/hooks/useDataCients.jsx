/*
   Campos: 
     name
     lastName
     birthday
     email
     password
     telephone
     dui
     isVerified (esto es booleano)
*/

import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useDataClients = () => {
    const ApiRegister = "http://localhost:4000/api/registerClients";
    const ApiClients = "http://localhost:4000/api/clients";
 
    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dui, setDui] = useState("");
    const [isVerified, setIsVerified] = useState("");
    const [errorCliente, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [clients, setClients] = useState([]);
    
    const cleanData = () => {
        setId("");
        setName("");
        setLastName("");
        setBirthday("");
        setEmail("");
        setPassword("");
        setTelephone("");
        setDui("");
        setIsVerified("");
    };
    
    // Función para guardar los datos del usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !lastName || !birthday || !email || !password || !telephone || !dui || !isVerified) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }

        // Validar longitud mínima de contraseña
        if (password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres");
            toast.error('La contraseña debe tener al menos 4 caracteres');
            return;
        }

        // Validar longitud máxima de DUI
        if (dui.length > 10) {
            setError("El formato del DUI debe ser 12345678-9");
            toast.error('El formato del DUI debe ser 12345678-9');
            return;
        }
    
        try {
            setLoading(true);
            const newClient = {
                name,
                lastName,
                birthday,
                email,
                password,
                telephone,
                dui,
                isVerified
            };
    
            console.log(newClient, "Un nuevo cliente registrado");
    
            const response = await fetch(ApiRegister, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newClient),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Hubo un error al registrar el cliente");
            }
    
            const data = await response.json();
            toast.success('El cliente se ha registrado correctamente');
            setSuccess("El cliente se ha registrado correctamente");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            toast.error(error.message || 'Ocurrió un error al registrar un cliente');
        } finally {
            setLoading(false); 
        }
    };
    
    // Función para obtener los datos de los clientes
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(ApiClients);
            if (!response.ok) {
                throw new Error("Error al obtener los clientes");
            }
            const data = await response.json();
            console.log(data);
            setEmployees(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error al cargar los clientes");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    // Función para eliminar los datos de los clientes
    const deleteClients = async (clientsId) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            return;
        }

        try {
            const response = await fetch(`${ApiClients}/${clientsId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
    
            if (!response.ok) {
                throw new Error("Error al eliminar un cliente");
            }
    
            const result = await response.json();
            console.log("Deleted:", result);
            toast.success('Cliente eliminado correctamente');
            fetchData();
        } catch (error) {
            console.error("Error deleting employee:", error);
            toast.error("Error al eliminar un empleado");
        }
    };


    // Función para actualizar los datos de los clientes
    const updateClient = async (dataClient) => {
        setId(dataClient._id);
        setName(dataClient.name);
        setLastName(dataClient.lastName);
        setBirthday(dataClient.birthday);
        setEmail(dataClient.email);
        setTelephone(dataClient.telephone);
        setDui(dataClient.dui);
        setIsVerified(dataClient.isVerified);

        // No establecer la contraseña por seguridad
        setPassword("");
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
    
        if (!name || !lastName || !email || !password || !telephone || !dui || isVerified) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }

        // Solo validar contraseña si se proporciona
        if (password && password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres");
            toast.error('La contraseña debe tener al menos 4 caracteres');
            return;
        }

        // Validar longitud máxima de DUI
        if (dui.length > 10) {
            setError("El formato del DUI debe ser 12345678-9");
            toast.error('El formato del DUI debe ser 12345678-9');
            return;
        }
    
        try {
            setLoading(true);
            const updatedClient = {
                name, lastName , email, password, telephone , dui , isVerified
            };

            // Solo incluir contraseña si se proporciona
            if (password) {
                updatedClient.password = password;
            }
    
            const response = await fetch(`${ApiClients}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedClient),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error al actualizar un cliente");
            }
    
            toast.success('Cliente actualizado correctamente');
            setSuccess("Cliente actualizado correctamente");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            toast.error(error.message || "Error al actualizar un empleado");
        } finally {
            setLoading(false);
        }
    };

    return {
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
    };
};

export default useDataClients;
