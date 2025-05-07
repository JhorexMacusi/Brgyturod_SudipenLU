import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'AdminUserPage',
        href: '/dashboard',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    users: User[];
}

export default function Users({ users: initialUsers }: Props) {
    const [editingUser, setEditingUser] = useState<User | null>(null);

    // Use Inertia's useForm for handling updates
    const { data, setData, put, delete: destroy, reset } = useForm({
        name: '',
        email: '',
    });

    const handleEditUser = (user: User) => {
        setEditingUser(user); // Set the user to edit
        setData('name', user.name); // Populate the form with the user's current data
        setData('email', user.email);
    };

    const handleUpdateUser = () => {
        if (!editingUser) return;

        put(`/admin/users/${editingUser.id}`, {
            onSuccess: () => {
                setEditingUser(null); // Exit edit mode
                reset(); // Reset the form
                toast.success('User updated successfully!'); // Show success toast
            },
            onError: (errors) => {
                console.error(errors);
                toast.error('Failed to update user.'); // Show error toast
            },
        });
    };

    const handleDeleteUser = (id: number) => {
        destroy(`/admin/users/${id}`, {
            onSuccess: () => {
                toast.success('User deleted successfully!'); // Show success toast
            },
            onError: (errors) => {
                console.error(errors);
                toast.error('Failed to delete user.'); // Show error toast
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users Management" />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Users Management</h1>

                {/* Users Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialUsers.map((user) => (
                                <tr key={user.id}>
                                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleEditUser(user)}
                                            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUser(user.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Edit User Form */}
                {editingUser && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Edit User</h2>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="border p-2 rounded"
                            />
                            <button
                                onClick={handleUpdateUser}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => {
                                    setEditingUser(null);
                                    reset();
                                }}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Toast Container */}
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
        </AppLayout>
    );
}