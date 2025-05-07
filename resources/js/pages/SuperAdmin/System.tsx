import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Posts',
        href: '/superadmin/system',
    },
];

interface Post {
    id: number;
    title: string;
    content: string;
    type: string;
    image?: string; // Added optional image property
    created_at: string;
}

interface Props {
    posts: Post[];
}

export default function Dashboard({ posts }: Props) {
    const { data, setData, post, put, delete: destroy, reset } = useForm({
        id: null as number | null, // Allow id to be null initially
        title: '',
        content: '',
        type: '',
        image: null as File | null, // Added image field
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('type', data.type);
        if (data.image) {
            formData.append('image', data.image); // Append image to FormData
        }

        if (isEditing) {
            put(`/superadmin/system/${data.id}`, {
               
                onSuccess: () => {
                    reset();
                    setIsEditing(false);
                    toast.success('Post updated successfully!');  // Success toast on edit
                },
                onError: () => {
                    toast.error('Failed to update the post.');  // Error toast on edit failure
                },
            });
        } else {
            post('/superadmin/system', {
              
                onSuccess: () => {
                    reset();
                    toast.success('Post created successfully!');  // Success toast on create
                },
                onError: () => {
                    toast.error('Failed to create the post.');  // Error toast on create failure
                },
            });
        }
    };

    const handleEdit = (post: Post) => {
        setData({
            id: post.id,
            title: post.title,
            content: post.content,
            type: post.type,
            image: null, // Reset image field when editing
        });
        setIsEditing(true);
    };

    const handleDelete = (id: number) => {
        destroy(`/superadmin/system/${id}`, {
            onSuccess: () => {
                toast.success('Post deleted successfully!');  // Success toast on delete
            },
            onError: () => {
                toast.error('Failed to delete the post.');  // Error toast on delete failure
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="SuperAdmin System Page" />
            <div className="flex flex-col gap-6 p-6">
                {/* Form */}
                <form onSubmit={handleSubmit} className="mb-4" encType="multipart/form-data">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            placeholder="Title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="border p-2 rounded"
                        />
                        <select
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className="border p-2 rounded"
                        >
                            <option value="">Select Type</option>
                            <option value="announcement">Announcement</option>
                            <option value="event">Event</option>
                            <option value="meeting">Meeting</option>
                        </select>
                        <textarea
                            placeholder="Content"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            className="border p-2 rounded"
                        />
                        <input
                            type="file"
                            onChange={(e) => setData('image', e.target.files?.[0] || null)} // Handle file input
                            className="border p-2 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {isEditing ? 'Update Post' : 'Create Post'}
                    </button>
                </form>

                {/* Table of Posts */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Content</th>
                                <th className="px-4 py-3">Created At</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
    {posts.length > 0 ? (
        posts.map((post) => (
            <tr
                key={post.id}
                className="border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
            >
                <td className="px-4 py-2">
                    {post.image && (
                        <img
                            src={`/storage/${post.image}`} // Display image
                            alt={post.title}
                            className="w-20 h-20 object-cover rounded"
                        />
                    )}
                </td>
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.type}</td>
                <td className="px-4 py-2 truncate max-w-xs">{post.content}</td>
                <td className="px-4 py-2">
                    {new Date(post.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-right space-x-2">
                    <button
                        onClick={() => handleEdit(post)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                No posts found.
            </td>
        </tr>
    )}
</tbody>
                    </table>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
        </AppLayout>
    );
}