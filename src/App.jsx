import React from "react";
import { Header } from "./pages/Header/Header";
import { Hero } from "./pages/Hero/hero";
import { Manage } from "./pages/Manage/manage";
import { Said } from "./pages/Said/said";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Manage/>
      <Said/>
    </>
  )
}

export default App
