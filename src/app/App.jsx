import Navbar from "../components/Navbar";
import Provider from "../state/AppContext";
import List from "../components/List";
import './App.css';

function App() {
  return (
    <Provider>
      <Navbar/>
      <List/>
    </Provider>
  );
}

export default App;
