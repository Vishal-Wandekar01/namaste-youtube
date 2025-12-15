
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import './index.css';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div >
    
      <Head />
      <Body />
     
    </div>
    </Provider>
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