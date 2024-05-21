import { Card } from "./Card";
import { resultsAtom } from "../data/resultsAtom";
import styled from "styled-components";
import { useAtomValue } from "jotai";

export const Cards = () => {
  const results = useAtomValue(resultsAtom);

  if (!results) return null;

  return (
    <CardContainer>
      {results.map((result, index) => (
        <Card key={index} item={result} />
      ))}
    </CardContainer>
  );
};

export const CardContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;
