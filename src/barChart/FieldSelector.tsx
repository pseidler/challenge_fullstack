import { FIELDS, fieldAtom } from "./fieldAtom";

import styled from "styled-components";
import { useSetAtom } from "jotai";

export const FieldSelector = () => {
  const setField = useSetAtom(fieldAtom);

  return (
    <FieldSelection
      onChange={(event) => {
        /**
         * Fix this TypeScript error without casting.
         *
         * Hint: You may need an advanced type feature.
         */
        setField(event.currentTarget.value);
      }}
    >
      {Object.entries(FIELDS).map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </FieldSelection>
  );
};

const FieldSelection = styled.select`
  border: none;
  font-size: 1em;
  padding: 0 0 0.2em 0;
`;
