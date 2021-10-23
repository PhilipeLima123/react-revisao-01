import logo from './logo.svg';
import './App.css';
import Cabecalho from './Cabecalho/Cabecalho';
import Conteudo from './meio/Conteudo';
import Rodape from './Rodape/Rodape';
function App() {
  return (
    <div className="App">
     <header>
       <p>Home</p>
       <p>Perfil</p>
     </header>
     <Cabecalho/>
     <Conteudo/>
     <Rodape/>
    </div>
  );
}

export default App;
