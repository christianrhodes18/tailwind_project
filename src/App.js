import SideBar from './components/SideBar'
import ChannelBar from './components/ChannelBar'
import './App.css';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
    </div>
  );
}

export default App;
