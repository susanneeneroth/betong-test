import React from "react";
import { connect, styled } from "frontity";

const ContentOne = () => {
  return <Container>Två bilder</Container>;
};

export default connect(ContentOne);

const Container = styled.div`
  height: 490px;
  width: 1366px;
  background-color: #eceef5;
`;
