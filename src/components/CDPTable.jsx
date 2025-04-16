import React from 'react';
import { useNavigate } from 'react-router-dom';

const CDPTable = ({ cdpList }) => {
    const navigate = useNavigate();

    if (!Array.isArray(cdpList) || cdpList.length === 0) {
        return null;
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="w-full mt-10 text-left text-sm text-[var(--color-light-100)] border-collapse">
                <thead>
                    <tr className="bg-[var(--color-dark-100)] text-[var(--color-light-200)] uppercase text-xs tracking-wider">
                        <th className="px-4 py-3 border-b border-[var(--color-gray-100)]">ID</th>
                        <th className="px-4 py-3 border-b border-[var(--color-gray-100)]">Owner Address</th>
                        <th className="px-4 py-3 border-b border-[var(--color-gray-100)]">Collateral</th>
                        <th className="px-4 py-3 border-b border-[var(--color-gray-100)]">Debt (Without Interest)</th>
                        <th className="px-4 py-3 border-b border-[var(--color-gray-100)]"></th>
                    </tr>
                </thead>
                <tbody>
                    {cdpList.map((cdp) => (
                        <tr key={cdp.id} className="hover:bg-[var(--color-primary)] transition">
                            <td className="px-4 py-3 border-b border-[var(--color-gray-100)]">{cdp.id}</td>
                            <td className="px-4 py-3 border-b border-[var(--color-gray-100)]">{cdp.owner}</td>
                            <td className="px-4 py-3 border-b border-[var(--color-gray-100)]">{cdp.collateral}</td>
                            <td className="px-4 py-3 border-b border-[var(--color-gray-100)]">{cdp.debt}</td>
                            <td className="px-4 py-3 border-b border-[var(--color-gray-100)]">
                                <button
                                    onClick={() => navigate(`/more-info/${cdp.id}`)}
                                    className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CDPTable;
