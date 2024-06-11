// src/App.js
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './App.css';
import dataaa from './data/مستشفي طنطا العسكري.json'
import dataaa2 from './data/صف مستشفي طنطا العسكري.json'

//give me ranks please

const ranks = [
  "لواء",
  "عميد",
  "عقيد",
  "مقدم",
  "رائد",
  "نقيب",
  "ملازم اول",
  "ملازم",

]



const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showItems, setshowItems] = useState(false);
  // const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Strawberry'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setshowItems(false)
  };
  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.length >= 2) setshowItems(true)
    }, 1000)
    //Stop the invocation
    return () => clearTimeout(timer)
  }, [searchTerm])
  const handleItemClick = (item) => {
    setSearchTerm(item);
    setShowDropdown(false);
    alert(`You selected: ${item}`);
  };


  return (
    <div className="app">
      <div className='header'>
        <div className='fixedHeader'>
          <h1>ابحث بالاسم لمعرفة ميعاد صرف الدواء الخاص بك</h1>
          {/* <div className="dropdown-search"> */}
          {/* <div className="dropdown-list">
          {ranks.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div> */}

          <input
            type="text"
            className="search-bar"
            placeholder="..اكتب الاسم للبحث"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyUp={() => {
              if (searchTerm.length>=5)
                setshowItems(true)
            }}
          />
        </div>
      </div>
      {/* </div> */}
      {showItems ? <ItemList items={[...dataaa.filter((item) => item?.name.includes(searchTerm)), ...dataaa2.filter((item) => item?.name.includes(searchTerm))]} /> : null}
    </div>
  );
};

export default App;


