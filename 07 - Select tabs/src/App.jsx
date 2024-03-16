import Header from './components/Header';
import RenderTabInfo from './components/RenderTabInfo';
import { data } from './data';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(index) {
    setActiveTab(index);
  }

  return (
    <div className="app">
      <Header>
        <Buttons data={data} handleClick={handleClick} activeTab={activeTab} />
      </Header>
      <RenderTabInfo data={data} activeTab={activeTab} />
    </div>
  );
}

export default App;
