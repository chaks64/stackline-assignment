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
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  overflow-x: scroll;
  background-color: #f6f8fa;
  gap: 20px;

  .overView {
    flex: 1 1;
  }

  .details {
    display: flex;
    flex: 3 1;
    flex-direction: column;
    min-width: 400px;
    gap: 20px;
  }
`;
