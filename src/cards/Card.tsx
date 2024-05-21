import { ResultItem } from "../data/resultsAtom";
import styled from "styled-components";

type CardProps = { item: ResultItem };

export const Card = ({ item }: CardProps) => {
  return (
    <CardOuter>
      <HeaderContainer>
        <Header title={item.title}>{item.title}</Header>
      </HeaderContainer>
      <Img
        src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
        alt={item.thumbnail?.alt_text ?? item.title}
      />
    </CardOuter>
  );
};

const CardOuter = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

const HeaderContainer = styled.div``;

const Header = styled.div``;

const Img = styled.img``;
