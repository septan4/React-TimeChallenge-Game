import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterdPlayerName, SetEnterdPlayerName] = useState("");

  function handelClick() {
    SetEnterdPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
