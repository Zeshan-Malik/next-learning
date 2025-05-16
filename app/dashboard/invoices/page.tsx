import React from 'react';

const InvoicesPage = () => {
    const invoices = [
        { id: 1, customer: 'John Doe', amount: 250, status: 'Paid' },
        { id: 2, customer: 'Jane Smith', amount: 450, status: 'Pending' },
        { id: 3, customer: 'Mike Johnson', amount: 300, status: 'Overdue' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Invoices</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Customer</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                            <td className="border border-gray-300 px-4 py-2">{invoice.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{invoice.customer}</td>
                            <td className="border border-gray-300 px-4 py-2">${invoice.amount}</td>
                            <td className="border border-gray-300 px-4 py-2">{invoice.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoicesPage;