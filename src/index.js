import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@rmwc/theme";
import Job from "./job/Job";
import TopBar from "./common/TopBar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/theme/dist/mdc.theme.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/button/dist/mdc.button.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider
        options={{
          primary: "#00CB63",
          onPrimary: "#FFFFFF"
        }}
      >
        <TopBar />
        <Job />
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
