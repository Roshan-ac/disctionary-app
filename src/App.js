import Navbar from "./components/Navbar";
import Disctonary from "./pages/Disctonary";
import React, {useContext} from 'react'
import AppContext from "./states/AppContext";

function App() {
const context =useContext(AppContext);
const {toglemode,tooglebutton}=context;

  return (
    <div className={`${toglemode==='light'?'bg-white':'bg-slate-700'} h-screen`}>
      <Navbar data={{toglemode,tooglebutton}}/>
      <Disctonary data={{toglemode}}/>
    </div>
  );
}

export default App;
