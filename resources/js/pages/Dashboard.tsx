import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Resident {
    id: number;
    name: string;
    age: number;
    is_pwd: boolean;
    created_at: string;
    updated_at: string;
}

interface DashboardProps {
    residents: Resident[];
}

export default function Dashboard({ residents }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h2 className="text-2xl font-bold text-gray-800">Residents</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Age</th>
                                <th className="px-4 py-3">PWD</th>
                                <th className="px-4 py-3">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {residents.length > 0 ? (
                                residents.map((resident) => (
                                    <tr
                                        key={resident.id}
                                        className="border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        <td className="px-4 py-2">{resident.id}</td>
                                        <td className="px-4 py-2">{resident.name}</td>
                                        <td className="px-4 py-2">{resident.age}</td>
                                        <td className="px-4 py-2">{resident.is_pwd ? 'Yes' : 'No'}</td>
                                        <td className="px-4 py-2">
                                            {new Date(resident.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                                        No residents found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}