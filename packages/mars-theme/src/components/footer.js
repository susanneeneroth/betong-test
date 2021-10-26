import React from "react";
import { connect, styled } from "frontity";

const Footer = () => {
  return (
    <ContainerFooter>
      <Content>Footer component</Content>
    </ContainerFooter>
  );
};

export default connect(Footer);

const ContainerFooter = styled.div`
  width: 100vw;
  height: 100px;
  margin: 0;
  padding: 24px;
  list-style: none;
  background-color: #888888;
`;

const Content = styled.div`
  width: 800px;
  margin: auto;
`;
