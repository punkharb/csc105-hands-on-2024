import React, { useState } from "react";
import "../sty/cer.css";

export default function Ser() {
  const [t, st] = useState([]);
  const [nt, snt] = useState("");
  const [ide, side] = useState(null);
  const [up, sup] = useState("");

  function addItem() {
    if (nt.trim() === "") return;
    const newId = Date.now();
    const newItem = {
      id: newId,
      name: nt,
    };
    const update = [...t, newItem];
    st(update);
    snt("");
  }

  function startEdit(id) {
    const itemToEdit = t.find(function (item) {
      return item.id === id;
    });
    sup(itemToEdit.name);
    side(id);
  }

  function saveEdit() {
    if (up.trim() === "") return;
    st(
      t.map((item) => {
        if (item.id === ide) {
          return { ...item, name: up };
        } else {
          return item;
        }
      })
    );
    side(null);
    sup("");
  }

  function removeItem(id) {
    st(
      t.filter(function (item) {
        return item.id !== id;
      })
    );
  }

  return (
    <div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add a new item"
          value={nt}
          onChange={function (e) {
            snt(e.target.value);
          }}
        />
        <button onClick={addItem}>Add</button>
      </div>
      {ide && (
        <div>
          <input
            type="text"
            value={up}
            onChange={function (e) {
              sup(e.target.value);
            }}
          />
          <button onClick={saveEdit}>Save Edit</button>
        </div>
      )}
      <ul>
        {t.map(function (item) {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <div className="a">
                <button
                  className="e"
                  onClick={function () {
                    startEdit(item.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="r"
                  onClick={function () {
                    removeItem(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
