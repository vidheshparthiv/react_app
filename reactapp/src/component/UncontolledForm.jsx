import React, { useRef } from 'react';

function FormData() {
    const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert("The name you entered was: " + nameRef.current.value);
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          ref={nameRef}
        />

        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default FormData;
