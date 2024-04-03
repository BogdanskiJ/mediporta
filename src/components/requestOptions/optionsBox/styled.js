import styled from "styled-components";

export const StyledRequestOptionsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  width: 100%;
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 330px;
  align-items: center;
  justify-content: flex-end;
  transition: 0.5s ease-in-out;
  background: white;
  transform: ${(props) =>
    props.$showMenu ? "translateY(-351px);" : "translateY(0px);"};
  border-bottom: 1px solid #d2d2d2;
`;

export const StyledOptionsBox = styled.div`
  padding: 20px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  div {
    width: fit-content;
    height: auto;
  }
`;

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

export const StyledButtonBox = styled.div`
  width: 100%;
  height: 30px;
  transition: 0.3s ease-in-out;

  button {
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
  }
`;
