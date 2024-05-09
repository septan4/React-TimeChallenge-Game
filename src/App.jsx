import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"easy"} targetTime={1} />
        <TimerChallenge title={"NOT EASY"} targetTime={5} />
        <TimerChallenge title={"getting TOUGH"} targetTime={10} />
        <TimerChallenge title={"PROS ONLY"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
