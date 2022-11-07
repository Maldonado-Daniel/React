import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/NavBar/CartWidget/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemsListContainer name="Bienvenidos a mi tienda online"/>
    </>
  );
}

export default App;
