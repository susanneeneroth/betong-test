import React from "react";
import { connect, styled } from "frontity";
import logoImage from "../assets/images/logoImage.png";

const Logo = () => {
  return <img src={logoImage} alt="Betongror logo" width="181" />;
};

export default connect(Logo);
