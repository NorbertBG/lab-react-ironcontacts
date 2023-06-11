import contacts from "../contacts.json";
import React, { useState } from 'react';

function List() {
  const initialContacts = [...contacts]; // Make a copy of the contacts array
  const newList = initialContacts.splice(0, 5);

  const [myList, updateList] = useState(newList);

  const addRandom = () => {
    const remainingContacts = initialContacts.filter(contact => !myList.includes(contact));
    const random = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    const newList2 = [...myList, random];
    updateList(newList2);
  };

  newList.forEach(artist => {
    if (artist.wonOscar) {
      artist.oscar = "🏆";
    } else if (artist.wonEmmy) {
      artist.emmy = "🏆";
    }
  });

  return (
    <div className='table'>
      <h2>IronContacts</h2>
      <button onClick={addRandom}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {myList.map(element => (
            <tr key={element.id}>
              <td><img src={element.pictureUrl} alt={element.name} width="75px" /></td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              <td>{element.oscar}</td>
              <td>{element.emmy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
