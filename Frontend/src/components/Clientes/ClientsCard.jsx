/** Tienes que cambiar toda esta parte */

import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const EmployeeCard = ({ 
  employee, 
  index, 
  isEditing, 
  editingEmployee,
  onEdit, 
  onDelete, 
  onSaveEdit, 
  onCancelEdit, 
  onEditChange 
}) => {
  
  if (isEditing) {
    // Edit Mode
    return (
      <div className={`px-6 py-4 border-b border-gray-100 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="grid grid-cols-6 gap-4 items-center">
          <input
            type="text"
            value={editingEmployee.nombre}
            onChange={(e) => onEditChange({...editingEmployee, nombre: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="email"
            value={editingEmployee.correo}
            onChange={(e) => onEditChange({...editingEmployee, correo: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={editingEmployee.telefono}
            onChange={(e) => onEditChange({...editingEmployee, telefono: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={editingEmployee.salario}
            onChange={(e) => onEditChange({...editingEmployee, salario: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={editingEmployee.area}
            onChange={(e) => onEditChange({...editingEmployee, area: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="flex space-x-2">
            <button
              onClick={onSaveEdit}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              Guardar
            </button>
            <button
              onClick={onCancelEdit}
              className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // View Mode
  return (
    <div className={`px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-900">{employee.nombre}</div>
        <div className="text-sm text-gray-600">{employee.correo}</div>
        <div className="text-sm text-gray-600">{employee.telefono}</div>
        <div className="text-sm text-gray-900 font-medium">{employee.salario}</div>
        <div className="text-sm text-gray-600">{employee.area}</div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(employee)}
            className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
            title="Editar empleado"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(employee.id)}
            className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
            title="Eliminar empleado"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;