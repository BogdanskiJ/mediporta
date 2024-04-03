import styled from "styled-components";

export const StyledSearchBox = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.max};
  width: 100%;
  height: fit-content;
  transition: 0.3s ease-in-out;
  margin-bottom: 10px;

  button {
    height: 40px;
  }
`;
