import React, { useEffect } from "react";
import Layout from "./components/organism/Layout";
import Header from "./components/organism/Header";
import MainContent from "./components/organism/MainContent";
import { useDispatch } from "react-redux";
import { fetchData } from "./config/redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <MainContent />
    </Layout>
  );
}

export default App;
