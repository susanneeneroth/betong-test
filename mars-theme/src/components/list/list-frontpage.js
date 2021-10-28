import { connect, styled, decode } from "frontity";
import ListItemFrontpage from "./list-item-frontpage";
import Pagination from "./pagination";

const ListFrontPage = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.slice(0, 3).map(({ type, id }) => {
        const item = state.source[type][id];
        console.log(data.items[0]);

        // Render one Item component for each one.
        return <ListItemFrontpage key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(ListFrontPage);

const Container = styled.section`
  width: 1140px;
  height: auto;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 0;

  /* background-color: pink; */
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
