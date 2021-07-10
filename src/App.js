import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Person Cards</h1>
      <Card firstName={'Killua'} lastName={'Zoldyck'} age={'12'} hairColor={'White'}/>
      <Card firstName={'Gon'} lastName={'Freecss'} age={'12'} hairColor={'Black and Green'}/>
      <Card firstName={'Isaac'} lastName={'Netero'} age={'120'} hairColor={'White'}/>
      <Card firstName={'Biscuit'} lastName={'Krueger'} age={'57'} hairColor={'Blonde'}/>
    </div>
  );
}

export default App;
