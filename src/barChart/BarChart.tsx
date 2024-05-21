import { BarElement } from "./Bar";
import { FieldSelector } from "./FieldSelector";
import { fieldAtom } from "./fieldAtom";
import { resultsAtom } from "../data/resultsAtom";
import styled from "styled-components";
import { useAtomValue } from "jotai";

export const BarChart = () => {
  const results = useAtomValue(resultsAtom);
  const field = useAtomValue(fieldAtom);

  const accumulatedData = results?.reduce<Record<string, number>>(
    (acc, item) => {
      const value = item[field] ?? "Unknown";
      acc[value]++;

      return acc;
    },
    {}
  );

  if (!accumulatedData) return null;

  const dataAsArray = Object.entries(accumulatedData).map(([label, count]) => ({
    label,
    count,
  }));

  dataAsArray.sort((a, b) => b.count - a.count);

  return (
    <BarChartContainer>
      <FieldSelector />
      <BarsContainer>
        {dataAsArray.map(({ label, count }) => {
          const maxCount = Math.max(...dataAsArray.map(({ count }) => count));

          return (
            <BarElement
              key={label}
              label={label}
              count={count}
              widthPercentage={(100 / maxCount) * count}
            />
          );
        })}
      </BarsContainer>
    </BarChartContainer>
  );
};

const BarChartContainer = styled.div`
  min-width: 30%;
  margin: 0 2em;
`;

const BarsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
