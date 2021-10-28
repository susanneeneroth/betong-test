import React from "react";
import { connect, styled } from "frontity";
import cementa from "../../assets/images/cementa.jpeg";

const Hero = () => {
  return (
    <>
      <Container>
        {/* <img src={cementa} alt="Hero image kalkbrott" /> */}
      </Container>
    </>
  );
};

export default connect(Hero);

const Container = styled.div`
  width: 100vw;
  height: 300px;
  background-image: url(${cementa});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  position: relative;
`;
