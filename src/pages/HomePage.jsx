import React, { useState } from 'react';
import Search from '../components/Search';
import CDPTable from '../components/CDPTable';

const HomePage = ({ }) => {

  const [cdpList, setCdpList] = useState();
  const [progressCount, setProgressCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const [rawInput, setRawInput] = useState('');
  const [collateralType, setCollateralType] = useState('ETH-A');

  return (
    <div className="wrapper">
      <header>
        <h1 className="text-gradient">
          MakerDAO CDP Tracker
        </h1>
      </header>
      <Search setCdpList={setCdpList}
        progressCount={progressCount}
        setProgressCount={setProgressCount}
        percent={percent}
        setPercent={setPercent}
        rawInput={rawInput}
        setRawInput={setRawInput}
        collateralType={collateralType}
        setCollateralType={setCollateralType}
      />
      <CDPTable cdpList={cdpList} />
    </div>
  );
};

export default HomePage;
