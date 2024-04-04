import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import { MainContainer } from "./StyledComponents";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { getProductData } from "./app/slices/productSlice";
import ProductReview from "./Components/ProductReview";
import Sales from "./Components/Sales";
import SalesDetails from "./Components/SalesDetails";
import load from "./assests/imgs/loading.gif";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useAppSelector((app) => app.product);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <img src={load} alt="Loading" />
        </div>
      ) : (
        <div className="App">
          <Header />
          <MainContainer>
            <div className="overview">
              <ProductReview />
            </div>
            <div className="details">
              <Sales />
              <SalesDetails />
            </div>
          </MainContainer>
        </div>
      )}
    </>
  );
};

export default App;
