import { useState } from 'react';

import Nome from './components/Nome'

function App(){
  const [aluno, setAluno] = useState('Nícolas');
  const [idade, setIdade] = useState(0);

  function handleChangeName(nome){
    setAluno(nome);
  }

  return (
    <div>
      <h1>Componente App</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Fernando Machado') }>
        Mudar nome
      </button>
{/*       <Nome aluno="Miguel" idade={30}/>  */}    
 </div>
  );
}

export default App;

