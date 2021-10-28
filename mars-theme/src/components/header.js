import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "./logo";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Logo />
          {/* <Title>{state.frontity.title}</Title> */}
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
        <Nav />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 1140px;
  max-width: 100%;
  box-sizing: border-box;
  padding-top: 14px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

// const Title = styled.h2`
//   margin: 0;
//   margin-bottom: 16px;
// `;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
