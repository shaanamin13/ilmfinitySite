import React from 'react';
import Main from './components/main';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Main />
      <FooterComponent />
    </div>
  );
}

export default App;
