import {Switch, BrowserRouter, Route,Redirect} from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import Navbar from "./components/NavBar/Navbar";
import {useAuthContext} from "./hooks/useAuthContext";

function App() {
  const {authIsReady,user} = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login"/>}
              {user && <Home/>}
            </Route>
            <Route path="/login">
              {!user && <Login/>}
              {user && <Redirect to="/"/>}
            </Route>
            <Route path="/signup">
              {user && <Redirect to='/'/>}
              {!user && <Signup/>}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
