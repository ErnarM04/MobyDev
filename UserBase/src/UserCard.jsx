import React, { useState } from "react";

function UserCard({ user, changeStatus }) {

  console.log("Rendered #", user.id)

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px black solid",
        borderRadius: "8px",
        padding: "8px 16px",
      }}
    >
      <p style={{ fontSize: "21px", fontWeight: "600" }}>{user.name}</p>
      <p style={{ fontSize: "18px" }}>{user.age}</p>
      <p style={{ fontSize: "18px" }}>{user.email}</p>
      {user.isFav ? (
        <button
          onClick={() => {
            changeStatus(user.id);
          }}
        >
          Убрать
        </button>
      ) : (
        <button
          onClick={() => {
            changeStatus(user.id);
          }}
        >
          В избранные
        </button>
      )}
    </div>
  );
}

export default React.memo(UserCard);
