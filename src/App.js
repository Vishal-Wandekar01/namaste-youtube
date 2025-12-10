
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import './index.css';

function App() {
  return (
    <div >
      <h1 className="text-3xl font bold">Namaste react</h1>
      <Head />
      <Body />
    </div>
  );
}

export default App;


/**
 * Head
 * Body
 *  Sidebar
 *    MenuItems
 *  MainContainer
 *    ButtonList
 *    VideoContainer
 *      VideoCard
 */