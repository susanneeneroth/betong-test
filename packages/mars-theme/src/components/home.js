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
      <Main>
        <ContentTwo>Hello second div</ContentTwo>
        <Switch>
          <Loading when={data.isFetching} />
          <ListFrontPage when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page when={data.isPage} />
          <PageError when={data.isError} />
        </Switch>
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
  width: 1140px;
  margin: 0 auto;
  /* background-color: #cccccc; */
`;

const ContentOne = styled.section`
  height: 250px;
  background-color: bisque;
`;

const ContentTwo = styled.section`
  height: 250px;
  background-color: palegreen;
`;
