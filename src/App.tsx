import React, { useState, useEffect, FC } from "react";
import { Button } from "antd";
import PageNavbar from "./components/PageNavBar";
import PageLayout from "./containers/PageLayout";
import ContentPage from "./components/ContentPage";
import "./App.css";

import Axios from "axios";

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
