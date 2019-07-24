import React from 'react';
import Hello from './view/Hello'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name={'zhangtao'} enthusiasmLevel={3}/>
      </header>
    </div>
  );
}

export default App;
