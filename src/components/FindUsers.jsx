// components/FindUsers.tsx
"use client"
import { useState } from "react";

export default function FindUsers() {
  const [filters, setFilters] = useState({
    name: "",
    role: "",
    status: "",
    title: "",
  });

  const users = [
    { name: "John Doe", email: "john@example.com", title: "Software Engineer", status: "Active", role: "Owner" },
    { name: "Oscar Rhys", email: "oscar@example.com", title: "Web Developer", status: "Inactive", role: "Member" },
    { name: "George Reece", email: "george@example.com", title: "Software Engineer", status: "Active", role: "Owner" },
    { name: "Thomas Joe", email: "thomas@example.com", title: "Project Manager", status: "Active", role: "Member" },
    { name: "Charlie Kyle", email: "charlie@example.com", title: "Designer", status: "Inactive", role: "Member" },
    // Add more users as needed
  ];

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredUsers = users.filter((user) => {
    return (
      (!filters.name || user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.role || user.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (!filters.status || user.status.toLowerCase() === filters.status.toLowerCase()) &&
      (!filters.title || user.title.toLowerCase().includes(filters.title.toLowerCase()))
    );
  });

  return (
    <div className="mx-auto bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Find Users</h1>

      {/* Filter Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by name"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={filters.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by role"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={filters.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by title"
          />
        </div>
      </div>

      {/* Filtered Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="p-2">NAME</th>
              <th className="p-2">TITLE</th>
              <th className="p-2">STATUS</th>
              <th className="p-2">ROLE</th>
              <th className="p-2">EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.title}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
