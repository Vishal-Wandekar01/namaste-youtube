import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./Utils/store";

function App() {
  return (
<Provider store={store}>

    <div>
      
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
       *    Sidebar
       *      MenuItems
       *    MainContainer
       *      ButtonsList
       *      VideoContainer
       *        VideoCard
       * 
       * 
       */
