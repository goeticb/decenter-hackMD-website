import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { loadData } from '../services/MoreInfoService';

const MoreInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const [signedMessage, setSignedMessage] = useState(null);
    const [isSigning, setIsSigning] = useState(false);
    const [cdpData, setCdpData] = useState(null);

    useEffect(() => {
        loadData(id, setCdpData);
    }, [id]);

    if (!cdpData) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="w-12 h-12 border-4 border-[var(--color-light-100)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    else if (cdpData == 'Collateral type not supported.') {
        return (
            <div className="wrapper">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-sm text-[var(--color-light-200)] hover:underline"
                >
                    ← Back
                </button>

                <div className="bg-[var(--color-dark-100)] rounded-xl shadow-lg p-8 text-[var(--color-light-100)] max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4 text-gradient">Unsupported Collateral Type</h1>
                    <p className="text-base sm:text-lg text-[var(--color-light-200)]">
                        The CDP ID <span className="font-semibold text-[var(--color-light-100)]">#{id}</span> has a collateral type
                        that is currently <span className="font-semibold text-red-400">not supported</span> on this page.
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-[var(--color-light-200)]">
                        Only the following collateral types are supported:
                        <br />
                        <span className="inline-block mt-1 font-medium text-[var(--color-light-100)]">
                            ETH-A, WBTC-A, USDC-A
                        </span>
                    </p>

                    <button
                        onClick={() => navigate('/')}
                        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded transition"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );

    }

    return (
        <div className="wrapper">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-sm text-[var(--color-light-200)] hover:underline"
            >
                ← Back
            </button>

            <div className="bg-[var(--color-dark-100)] rounded-xl shadow-lg p-8 text-[var(--color-light-100)] max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gradient">CDP Details for #{id}</h1>

                <div className="space-y-5 text-base sm:text-lg">
                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Collateral Type</span>
                        <span className="font-semibold text-right">{cdpData.collateralType}</span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Collateral</span>
                        <span className="font-semibold text-right">{cdpData.collateral}</span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Debt (without interest)</span>
                        <span className="font-semibold text-right">{cdpData.debt}</span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Debt (with interest)</span>
                        <span className="font-semibold text-right">{cdpData.debtWithInterest}</span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Collateralization Ratio</span>
                        <span className="font-semibold text-right">{cdpData.collateralizationRatio}</span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Liquidation Ratio</span>
                        <span className="font-semibold text-right">{cdpData.liquidationRatio}</span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-[var(--color-gray-100)] pb-2">
                        <span className="w-1/2">Max Withdrawable Collateral</span>
                        <span className="font-semibold text-right">{cdpData.maxWithdrawCollateral}</span>
                    </div>

                    <div className="flex justify-between gap-4">
                        <span className="w-1/2">Max Additional Debt</span>
                        <span className="font-semibold text-right">{cdpData.maxAdditionalDebt}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
                {!isConnected ? (
                    <button
                        disabled
                        className="bg-gray-600 text-white px-6 py-2 rounded cursor-not-allowed opacity-50"
                    >
                        Connect your wallet, please
                    </button>
                ) : signedMessage ? (
                    <div className="text-[var(--color-light-200)] break-all">
                        <span className="font-bold">Signed message:</span><br />
                        {signedMessage}
                    </div>
                ) : (
                    <button
                        onClick={async () => {
                            try {
                                setIsSigning(true);
                                const signature = await signMessageAsync({ message: 'Ovo je moj CDP' });
                                setSignedMessage(signature);
                            } catch (err) {
                                console.error('Signing cancelled or failed:', err);
                            } finally {
                                setIsSigning(false);
                            }
                        }}
                        className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded transition"
                        disabled={isSigning}
                    >
                        {isSigning ? 'Signing...' : 'Sign "Ovo je moj CDP"'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default MoreInfo;
