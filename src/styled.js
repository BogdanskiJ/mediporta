import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`;

export const StyledPageBox = styled.div`
  width: 100%;
  padding: 30px;
`;

export const StyledDataBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 5vh auto;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoint.max};

  @media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
    flex-direction: column;
    margin: 5vh auto;
    align-items: center;
    height: 60%;
  }
`;

export const StyledDataBox = styled.div`
  width: 50%;
  display: flex;
  margin: 1%;

  @media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
    width: 80%;
  }
`;
