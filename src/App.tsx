import React from "react";
import PageLayout from "./containers/PageLayout";
import ContentPage from "./components/ContentPage";
import PageDrawer from "./components/page-layout/PageDrawer";
import "./App.css";

function App() {
  return (
    <div>
      <PageLayout>
        <ContentPage />
      </PageLayout>
    </div>
  );
}

export default App;
