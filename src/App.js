import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Huruf from "./pages/Huruf";
import { CContainer } from "@coreui/react";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <Router>
        <div className="c-app c-default-layout">
          <div className="c-wrapper">
            <TopNav />
            <div className="c-body">
              <main className="main">
                <CContainer fluid>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/huruf" component={Huruf} />
                  </Switch>
                </CContainer>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
