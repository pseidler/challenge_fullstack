import { searchTermAtom } from "./searchTermAtom";
import styled from "styled-components";
import { useSetAtom } from "jotai";

export const Search = () => {
  const setSearchTerm = useSetAtom(searchTermAtom);
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSearchTerm(formData.get("searchTerm")?.toString() ?? "");
  };

  return (
    <SearchContainer onSubmit={handleSearch}>
      <SearchInput
        name="search"
        type="text"
        placeholder="Enter search term..."
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  height: 4em;
  margin-bottom: 2em;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 400px;
  box-sizing: border-box;
  font-size: 2em;
  border-radius: 5px;
  border: 1px solid rgb(118, 118, 118);
  padding-left: 0.2em;
`;

const SearchButton = styled.button`
  height: 100%;
  margin-left: 1em;
  padding: 0 1em;
  font-size: 2em;
  background-color: white;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 5px;

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  &:active {
    background-color: rgb(210, 210, 210);
  }
`;
