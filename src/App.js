import Image from './image';
import Text from './text.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>404 Not Found</p>
      </header>
      <div className="body">
        <Image />
        <Text />
      </div>
      <footer className="App-footer">
        <p><a href="https://twitter.com/RolanCt">Rolando Cornejo</a> 🇸🇻 @ DevChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
