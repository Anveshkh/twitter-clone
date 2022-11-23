import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Widgets from './Widgets';
// By default the app container does something like display inline which basically stacks things on top of each other



function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    
  );
}

export default App;
