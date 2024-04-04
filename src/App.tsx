import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import { MainContainer } from "./StyledComponents";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { getProductData } from "./app/slices/productSlice";
import ProductReview from "./Components/ProductReview";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useAppSelector((app) => app.product);

  useEffect(() =>{
    dispatch(getProductData())
  },[dispatch])

  if(loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="App">
      <Header />
      <MainContainer>
        <div className="overview">
          <ProductReview/>
        </div>
        <div className="details"></div>
      </MainContainer>
    </div>
  );
};

export default App;
