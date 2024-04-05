import React from "react";
import { useSelector } from "react-redux";
import { selectTagsBrowserError, selectTagsBrowserLoading } from "./slice";

import EnhancedTable from "./components/table";
import { RequestOptions } from "./components/requestOptions";
import { ViewBox } from "./components/viewBox";
import { LoadingPage } from "./components/loading";
import { ErrorPage } from "./components/error";

import { StyledApp, StyledDataBox, StyledDataBoxes } from "./styled";

function App() {
  const loading = useSelector(selectTagsBrowserLoading);
  const error = useSelector(selectTagsBrowserError);

  return (
    <StyledApp className="App">
      <RequestOptions />
      <StyledDataBoxes>
        {loading ? (
          <LoadingPage color={"primary"} />
        ) : error ? (
          <ErrorPage />
        ) : (
          <>
            <StyledDataBox>
              <EnhancedTable />
            </StyledDataBox>
            <StyledDataBox>
              <ViewBox />
            </StyledDataBox>
          </>
        )}
      </StyledDataBoxes>
    </StyledApp>
  );
}

export default App;
