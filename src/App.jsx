import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// - Get a React project off the ground with Vite (after installing Node)
// - Put all the HTML from the pokemon challenge inside the App.jsx
//   - class -> className
//   - Call Anton or Timo for help when shit breaks
// - Take a look at pikachu state below and use them
// - Create a Pokemon component (and use them ofcourse :))
// - Fix the battle

function Pokemon({ name, lvl, image }) {
  return (
    <>
      <h2>
        {name} {lvl}
      </h2>
      <img src={image} />
    </>
  );
}

function Battlefield({ children }) {
  return (
    <div style={{ backgroundColor: "green", width: "100vw", height: "100vh" }}>
      {children}
    </div>
  );
}

function WeaponApp() {
  const [weapons, setWeapons] = useState([
    {
      name: "Denitsa's destruction",
      ammo: 1,
    },
    {
      name: "Slobodan's mercy",
      ammo: 2,
    },
  ]);

  async function retrieveWeaponsFromServer() {
    const response = await fetch("http://localhost:8080/weapons");
    const weaponData = await response.json();
    setWeapons(weaponData);
  }

  function Weapon(weapon) {
    return (
      <li>
        {weapon.name} - {weapon.ammo}
      </li>
    );
  }

  return (
    <>
      <button onClick={retrieveWeaponsFromServer}>Get weapons</button>
      {/* <Battlefield>
        <Pokemon name="Slobodan" lvl="10" image={reactLogo} />
        <Pokemon name="Marc" lvl="2" image={reactLogo} />
      </Battlefield> */}
      <ul>
        {weapons.map((weapon, index) => (
          <Weapon {...weapon} key={index} />
        ))}
      </ul>
    </>
  );
}

function OldApp() {
  const [name, setName] = useState("timo");
  const [pikachu, setPikachu] = useState({
    name: "pikachu",
    hp: 30,
    maxHealth: 30,
    lvl: 12,
  });

  function attack() {
    setName("Ionut");
    const damage = 10;

    setPikachu({
      ...pikachu, // spread operator
      hp: pikachu.hp - damage,
    });
  }

  const data = {
    name: "timo",
    age: 32,
  };

  data.name = "Nikolay";
  data.age = 16;

  const [count, setState] = useState(0); // object deconstruction

  function handleClick() {
    setState(count + 1);
  }

  return (
    <>
      <div>
        {name}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={attack}>count is {count}</button>
        {count > 10 && <h3>holy cow</h3>}
        {count > 10 ? <h3>holy cow</h3> : <h3>Hold on...</h3>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function App() {
  return <WeaponApp />;
}

export default App;
