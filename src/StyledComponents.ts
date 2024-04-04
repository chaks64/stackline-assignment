import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  max-width: 100%;
  height: 5rem;
  background-color: #052849;
  padding-left: 1rem;
  .logo {
    height: 50%;
    filter: brightness(0) invert(1);
  }
`;

export const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column; /* Change direction to row */
  }
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  overflow-x: scroll;
  background-color: #f6f8fa;
  gap: 20px;

  .overview {
    flex: 0.75 1;
  }

  .details {
    display: flex;
    flex: 3 1;
    flex-direction: column;
    min-width: 400px;
    gap: 20px;
  }
`;

export const ProductReviewContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  gap: 10px;

  .metadata {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    .product-image {
      width: 80%;
      margin: auto;
    }

    .product-title {
      margin-bottom: 0.5rem;
      color: #333;
      font-size: 1.5em;
      text-align: center;
    }

    .product-subtitle {
      margin-top: 0;
      color: #999;
      font-size: 0.9rem;
      text-align: center;
    }
  }
  .borders {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    .tags {
      display: flex;
      margin-left: 0.75rem;
      flex-wrap: wrap;
      width: fit-content;
      padding: 16px 0px;

      gap: 8px;

      .tag {
        padding: 5px 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: #666;
        font-size: 0.75em;
      }
    }
  }
`;

export const SalesContainer = styled.div`
  box-sizing: border-box;
  flex: 1 1;
  min-height: 200px;
  padding: 20px 0px;
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductDetailsContainer = styled.div`
  flex: 1 1;
  min-height: 200px;
  overflow: auto;
  background-color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);

  table {
    width: 100%;
    overflow: scroll;
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    padding: 15px 15px;
    text-align: right;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  th {
    z-index: 10;
    position: sticky;
    top: 0;
    overflow: hidden;
    border-bottom: 2px solid #eaeaea;
    background-color: white;
    color: #333;
    font-size: 0.75rem;
    font-weight: normal;
    direction: rtl;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  th span {
    font-family: monospace;
  }

  td {
    border-bottom: 1px solid #eaeaea;
    color: #97a7bb;
    font-size: 0.75rem;
  }

  tbody td{
    padding-right: 2rem !important;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }
`;
