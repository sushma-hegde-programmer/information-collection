import React from "react";
import PageLayout from "./containers/PageLayout";
import TestContentPage from "./components/TestContentPage";
import "./App.css";

function App() {
  return (
    <div>
      <PageLayout>
        <TestContentPage />
      </PageLayout>
    </div>
  );
}

export default App;
