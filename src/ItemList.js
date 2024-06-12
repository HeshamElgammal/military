// src/ItemList.js
import React from 'react';
import './App.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      <table className="item-list">
        <thead>
          <tr>
            <th>تاريخ الصرف</th>
            <th>الرتبه</th>
            <th>الاسم</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <div className='itemDate'>
                <td className='date'>{'السنه/اليوم/الشهر'}</td>
              <td>{item.exchangeDate}</td>
              </div>
              <td>{item.rank}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
