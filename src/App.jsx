import Player from "./components/Player"


function App() {
  

  return <main>
    <div id="game-container">
      <ol id="players">
        <Player  name='Player 1' symbol='x'/>
        <Player  name='Player 12' symbol='o'/>
      </ol>
    </div>
  </main>
}

export default App
