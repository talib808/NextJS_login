"use client"

import { useState, useEffect } from 'react';

export default function Table() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('/api/dashboard/employees');
      const data = await response.json();
      setEmployees(data);
    }

    fetchEmployees();
  }, []);

  return (
    <table className="table-auto w-full bg-white rounded shadow-lg">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-4 py-2">EmpID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Delivery Center</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.EmpID} className="border-b">
            <td className="px-4 py-2">{employee.EmpID}</td>
            <td className="px-4 py-2">{employee.Name}</td>
            <td className="px-4 py-2">{employee.DelCenter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
