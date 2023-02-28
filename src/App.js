import './App.css';
import ComponenteUm from './components/ComponenteUm';
import ComponenteDois from './components/ComponenteDois';

function App() {  // componente principal - pto de entrada do sistema 
  
  const resultado = 2 + 1;  // 3
  console.log('SPFC eh bom!')
  
  return (
    <div className="container">
      <p>
        isso eh um paragrafo
      </p>
      <p>
        O resultado é {resultado}
      </p>  
      <ComponenteUm />
      <ComponenteDois />
    </div>    
  );
}

export default App;
