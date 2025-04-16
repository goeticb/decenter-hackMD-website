import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import inputValidator from '../utils/inputValidator';
import { fillSemaphore, resetParameters } from '../services/SearchService';

const Search = ({ setCdpList, progressCount, setProgressCount, percent, setPercent, rawInput, setRawInput, collateralType, setCollateralType }) => {

  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      const parsed = parseInt(rawInput, 10);

      if (!isNaN(parsed) && parsed > 0) {
        setIsSearching(true);
        setProgressCount(0);
        setPercent(0);
        setCdpList();
        resetParameters();
        fillSemaphore(parsed, collateralType, 6, setProgressCount, setPercent, setIsSearching, setCdpList);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [rawInput]);

  return (
    <div className="mt-10 w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <select
          className="w-full sm:w-1/2 bg-[var(--color-dark-100)] text-[var(--color-light-100)] px-4 py-2 rounded-lg border border-[var(--color-gray-100)] focus:outline-none"
          value={collateralType}
          onChange={(e) => setCollateralType(e.target.value)}
        >
          <option value="ETH-A">ETH-A</option>
          <option value="WBTC-A">WBTC-A</option>
          <option value="USDC-A">USDC-A</option>
        </select>

        <div className="w-full sm:w-1/2 flex gap-2">
          <input
            type="text"
            placeholder="Enter CDP ID"
            disabled={isSearching}
            value={rawInput}
            onChange={(e) => inputValidator(e, setRawInput)}
            className="flex-1 bg-[var(--color-dark-100)] text-[var(--color-light-100)] px-4 py-2 rounded-lg border border-[var(--color-gray-100)] focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            onClick={() => navigate(`/more-info/${rawInput}`)}
            disabled={isSearching || (rawInput !== '' && rawInput <= 0)}
            className={`px-4 py-2 rounded-lg text-white transition
    ${rawInput !== '' && rawInput <= 0
                ? 'bg-red-600 cursor-not-allowed'
                : isSearching
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
          >
            {rawInput !== '' && rawInput <= 0
              ? 'No CDPs with ID less than 1'
              : isSearching
                ? 'Searching...'
                : 'View Details'}
          </button>
        </div>
      </div>

      <div className="mt-10 mb-6">
        <p className="text-sm text-[var(--color-light-200)] mb-1">{progressCount}/20 CDPs found</p>
        <div className="w-full h-2 rounded bg-[var(--color-dark-100)]">
          <div
            className="h-full bg-green-500 rounded transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  )
}


export default Search