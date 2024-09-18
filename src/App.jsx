import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [national, setNational] = useState("Uzbek");
  const [desc, setDesc] = useState("");

  const [users, setUsers] = useState([]);

  function funcName(event) {
    setUserName(event.target.value);
  }
  function funcEmail(event) {
    setEmail(event.target.value);
  }
  function funcSelect(event) {
    setNational(event.target.value);
  }
  function funcText(event) {
    setDesc(event.target.value);
  }

  function funcSave(event) {
    event.preventDefault();

    const userForm = {
      username: username,
      email: email,
      national: national,
      desc: desc,
      id: Date.now(),
    };

    let coped = [...users];
    coped.push(userForm);
    setUsers(coped);

    setUserName("");
    setEmail("");
    setNational("Uzbek");
    setDesc("");
  }

  return (
    <div>
      <form className="wrraper">
        <input className="ism"
          onChange={funcName}
          value={username}
          type="text"
          placeholder="Enter ism..."
        />
        <input
        className="ism"
          onChange={funcEmail}
          value={email}
          type="text"
          placeholder="Enter familya.."
        />

        <select onChange={funcSelect} value={national} name="" id="" className="ism">
          <option value="Uzbek">Uzbek</option>
          <option value="Russian">Russian</option>
          <option value="English">English</option>
        </select>

        <textarea
        className="ism"
          onChange={funcText}
          value={desc}
          name=""
          id=""
          placeholder="Enter description..."
        ></textarea>
        {/* <button className="btn" onClick={funcSave}>SAVE</button> */}
        <button onClick={funcSave} class="glow-on-hover" type="button">SAVE</button>
      </form>

      <div className="cards">
        {users.map(function (user) {
          return (
            <div key={user.id} className="card">
              <p>{user.username}</p>
              <p>Gmail: {user.email}</p>
              <p>Milati: {user.national}</p>
              <p>Desc: {user.desc}</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;
