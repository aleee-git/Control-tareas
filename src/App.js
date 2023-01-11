import './App.css';
import Homework from'./Images/Homework.jpg'
import ListaTareas from './Componentes/ListaTareas'

function App() {
  return (
    <div className="App">

      <div className="logo-container">
        <img src={Homework}
        className="logo" alt="Gatito"/>
      </div>

      <div className="main-list">
        <h1>Mis Tareas 🙄</h1>
        <ListaTareas/>
      </div>

    </div>
  );
}

export default App;
