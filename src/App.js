
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import { RoutesComponent } from './components/Routes';
import { NavBar } from './components/NavBar';
// import { Home } from "./components/Home";

function App() {
  return (
   
     <Router>

        <NavBar />
        <RoutesComponent />
      

     </Router>

    

  );
}

export default App;
