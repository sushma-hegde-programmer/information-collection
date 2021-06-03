import React from "react";
import PageLayout from "./containers/PageLayout";
import TestContentPage from "./components/TestContentPage";
import "./App.css";
import AdminPageNavBar from "./components/page-layout/AdminPageNavBar";

function App() {
  //const role=//from backend
  return (
    <PageLayout>
      <TestContentPage />
    </PageLayout>

    // <AdminPageNavBar />
  );
}

export default App;
