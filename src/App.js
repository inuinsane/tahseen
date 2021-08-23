import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Huruf from "./pages/Huruf";
import { CContainer } from "@coreui/react";
import TopNav from "./components/TopNav";
import { ShowProvider } from "./context/ShowContext";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <ShowProvider>
        <Router>
          <div className="c-app c-default-layout">
            <SideNav />
            <div className="c-wrapper">
              <TopNav />
              <div className="c-body">
                <main className="main">
                  <CContainer fluid>
                    <Switch>
                      <Route path="/home" component={Home} />
                      <Route path="/huruf" component={Huruf} />
                    </Switch>
                  </CContainer>
                </main>
              </div>
            </div>
          </div>
          <Redirect from="/" to="home" />
        </Router>
      </ShowProvider>
    </>
  );
}

export default App;
