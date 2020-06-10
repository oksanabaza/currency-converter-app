import React, { useState, useEffect } from 'react';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const items = await data.json();
    setItems(items)
  };

  return (
    <div>{items.map(item => (
      <h1 key={item.id}>Имя Клиента: {item.name} </h1>
    ))}
    </div>
  );
}

export default Shop;
