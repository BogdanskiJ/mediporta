import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const StyledButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 10px;

  span {
    width: 100%;
    display: flex;
    align-items: stretch;
  }
  button {
    width: 100%;
  }
`;

export const StyledTableViewBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-height: 70vh;
  overflow: auto;
`;
