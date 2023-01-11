import './App.css';
import Homework from'./Images/Homework.jpg'
import Tarea from './Componentes/Tarea';
import Formulario from './Componentes/Formulario';

function App() {
  return (
    <div className="App">

      <div className="logo-container">
        <img src={Homework}
        className="logo" alt="Gatito"/>
      </div>

      <div className="main-list">
        <h1>Mis Tareas 🙄</h1>
        <Formulario/>
        
        <Tarea texto="Aprender React"/>
      </div>

    </div>
  );
}

export default App;
