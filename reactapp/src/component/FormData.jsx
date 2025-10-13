import React, { useState } from 'react';

function FormData() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("The name you entered was: " + name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default FormData;
