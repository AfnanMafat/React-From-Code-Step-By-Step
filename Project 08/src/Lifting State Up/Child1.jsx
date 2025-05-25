import React from "react";

export default function Child1({setUser}) {
  
  return (
    <>
      <h1>Add User</h1>
      <input
        onChange={(e) => {
          setUser(e.target.value);
        }}
        type="text"
        placeholder="Add User"
      />
    </>
  );
}
