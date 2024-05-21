import styled from "styled-components";

type BarProps = {
  label: string;
  count: number;
  widthPercentage: number;
};

export const BarElement = ({ label, count, widthPercentage }: BarProps) => (
  <BarContainer>
    <Bar $width={widthPercentage} />
    <BarText>
      <span>{label}</span>
      <span>{count}</span>
    </BarText>
  </BarContainer>
);

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
  margin: 0.1em 0;
  position: relative;
`;

const Bar = styled.div.attrs<{
  $width: number;
}>((props) => ({
  style: { width: `${props.$width}%` },
}))`
  height: 100%;
  background-color: lightblue;
`;

const BarText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 0 0.5em;
  box-sizing: border-box;
`;
