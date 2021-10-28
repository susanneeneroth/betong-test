import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./home";
import Page from "./page";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Container>
        {/* Add some metatags to the <head> of the HTML. */}
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>

        {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={globalStyles} />

        {/* Add the header of the site. */}
        <HeadContainer>
          <Header />
        </HeadContainer>

        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <Home when={data.isHome} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <Page when={data.isPage} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </Container>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow-x: hidden; /* Temporary solution, horizontal overflow hidden because of strange margin-right built into the theme which I can't find */
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
`;

const HeadContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  background-color: #514f60;
  padding: 5px 0 0 0;
  width: 100vw;
  height: 118px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
