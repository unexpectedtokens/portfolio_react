import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./Config/theme";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Index";
import Navbar from "./Components/Navbar";
import { Transition, TransitionGroup } from "react-transition-group";
import { useState } from "react";
import About from "./Pages/About";
import Work from "./Pages/Work";

const BaseCss = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Lato', sans-serif;
    background-color: ${(props) => props.theme.colors.whiteDarkest};
  }

`;

function App() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("/");
  return (
    <ThemeProvider theme={theme}>
      <BaseCss />
      <Navbar key={location.key} activeRoute={activeRoute} />
      <TransitionGroup>
        <Transition key={location.key} timeout={1500} unmountOnExit={true}>
          {(state) => {
            return (
              <Switch location={location}>
                <Route
                  path="/about"
                  render={() => (
                    <About state={state} setActiveRoute={setActiveRoute} />
                  )}
                />
                <Route
                  path="/work"
                  render={() => (
                    <Work state={state} setActiveRoute={setActiveRoute} />
                  )}
                />
                <Route
                  path="/"
                  exact
                  render={() => (
                    <HomePage state={state} setActiveRoute={setActiveRoute} />
                  )}
                />
              </Switch>
            );
          }}
        </Transition>
      </TransitionGroup>
    </ThemeProvider>
  );
}

export default App;
