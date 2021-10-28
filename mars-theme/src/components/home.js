import React from "react";
import { connect, styled } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import ListFrontPage from "./list/list-frontpage";
import Post from "./post";
import Loading from "./loading";
import PageError from "./page-error";
import Page from "./page";
import Footer from "./footer";
import Hero from "./home-sections/hero";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container>
      <Hero />

      <Main>
        <ContentOne>
          <ContentOneItem>Content one</ContentOneItem>
        </ContentOne>
        <ContentTwo>
          <ContentTwoItem>Content two</ContentTwoItem>
        </ContentTwo>
        <ContentThree>
          <ContentThreeItem>
            <Switch>
              <Loading when={data.isFetching} />
              <ListFrontPage when={data.isArchive} />
              <Post when={data.isPostType} />
              <Page when={data.isPage} />
              <PageError when={data.isError} />
            </Switch>
          </ContentThreeItem>
        </ContentThree>
      </Main>

      <Footer />
    </Container>
  );
};

export default connect(Home);

const Container = styled.div`
  width: 100vw;
  background-color: powderblue;
`;

const Main = styled.div`
  width: 100vw;
  margin: 0 auto;
  /* background-color: #cccccc; */
  position: relative;
`;

const ContentOne = styled.section`
  height: 250px;
  width: 100vw;
  margin: 0 auto;
  background-color: #eceef5;
`;

const ContentOneItem = styled.div`
  width: 1140px;
  height: 250px;
  margin: 0 auto;
  background-color: #eceef5;
`;

const ContentTwo = styled.section`
  height: 250px;
  background-color: #ffffff;
  position: relative;
`;

const ContentTwoItem = styled.div`
  width: 1140px;
  height: 250px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const ContentThree = styled.section`
  height: 250px;
  background-color: #eceef5;
  position: relative;
`;

const ContentThreeItem = styled.div`
  width: 1140px;
  height: 250px;
  margin: 0 auto;
  background-color: #eceef5;
`;
