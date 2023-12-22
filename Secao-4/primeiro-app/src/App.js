import Nome from './components/Nome'

function App(){
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Nícolas" idade={30}/>  
      <br/>
      <Nome aluno="Felipe" idade={25}/>
    </div>
  );
}

export default App;

