import  NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import { ItemCount } from './components/ItemCount/itemCount';

function App() {
  return (
    <div className="App">
      < NavBar />
      < ItemListContainer name="Jennifer Constanza" />
      < ItemCount/>
    </div>
  );
}

export default App;
