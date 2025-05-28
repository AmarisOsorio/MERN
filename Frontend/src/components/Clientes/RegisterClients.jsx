/** Tienes que cambiar toda esta parte */


import React from "react";

const registerClients = ({
  id,
  name,
  setName,
  lastname,
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
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full mr-3">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            {id ? "Editar cliente" : "Agregar cliente"}
          </h2>
        </div>

        <form onSubmit={id ? handleUpdate : handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Nombre"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Apellido"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Fecha de Nacimiento"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Correo electrónico"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Contraseña"
              minLength="4"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Teléfono"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="dui"
              value={dui}
              onChange={(e) => setDui(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="DUI"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="isVerified"
              value={isVerified}
              onChange={(e) => setIsVerified(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="DUI"
              required
            />
          </div>


          

          <div className="flex justify-center space-x-4 pt-6">
            <button
              type="button"
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
              onClick={() => {
                // Reset form o cerrar modal
                setName("");
                setLastName("");
                setBirthday("");
                setEmail("");
                setPassword("");
                setTelephone("");
                setDui("");
                setIsVerified("");
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              {id ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default registerClients;
    