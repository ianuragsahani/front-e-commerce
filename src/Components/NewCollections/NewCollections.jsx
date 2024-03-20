import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch('https://backend-km2o.onrender.com/newcollections')
      .then(response => response.json())
      .then(data => setNewCollections(data))
      .catch(error => console.error('Error fetching new collections:', error));
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.new_price} // Changed to camelCase for consistency
            oldPrice={item.old_price} // Changed to camelCase for consistency
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
