import { useState } from "react";

export function TodoList() {
    const [items, setItems] = useState(['run', 'walk', 'swim']);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem.trim() !== '') {
          setItems([...items, newItem]);
          setNewItem('');
        }
    };
    const resetItems = () => {
        setItems([]);
      };
    return (
        <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <button onClick={resetItems}>Reset</button>
      </div>
    </div>
    );
}