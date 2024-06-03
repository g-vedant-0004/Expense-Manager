import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  background-color: aliceblue
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
  // background: url('../public/images/Expense_Manager.png');
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
  background-image: "url('/images/Expense_Manager.png')"
`;

const App = () => {
  return (
    <Container className='red'>
      <Header>Expense Manager</Header>
      <HomeComponent />
    </Container>
  );
};

export default App;
