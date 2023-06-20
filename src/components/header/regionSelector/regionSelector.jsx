import React, {useState, useEffect} from 'react';

const RegionSelector = ({ closeRegionSelector }) => {
  console.log('sometext');
  const [data, setData] = useState(null)
  /* useEffect(() => {
    const regionsData = require('./regions.JSON');
    const FetchData = async () =>{
      const data = await fetch(regionsData)
      const data1 = await data.json()
       for(let i=1; i < data1.length; i++){
        console.log(data1[i].regionName);
    }
    }
    FetchData()
  }, []); */
  return (
    <div >
        <p>Україна</p>
        <span>Обравши регіон, ми покажемо орієнтовний термін доставки при пошуку товарів</span>
        <button className='region-selector-close'>×</button>
        <ul>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
  );
};

export default RegionSelector;
