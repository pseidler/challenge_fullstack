import { BarChart } from "./barChart/BarChart";
import { Cards } from "./cards/Cards";
import { Search } from "./search/Search";
import { SimilaritySearch } from "./similaritySearch/SimilaritySearch";
import styled from "styled-components";
import { useGetItems } from "./data/useGetItems";

export const App = () => {
  useGetItems();

  return (
    <BaseStyle>
      <h1>Artwork search</h1>
      <Search />
      <ResultArea>
        <Cards />
        <BarChart />
      </ResultArea>
      <SimilaritySearch />
    </BaseStyle>
  );
};

const BaseStyle = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 1em;
`;

const ResultArea = styled.div`
  display: flex;
  align-items: start;
`;
