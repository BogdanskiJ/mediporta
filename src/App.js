import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataTags } from "./getData";
import {
  selectTagsBrowserData,
  selectTagsBrowserDateFrom,
  selectTagsBrowserDateTo,
  selectTagsBrowserInname,
  selectTagsBrowserMax,
  selectTagsBrowserMin,
  selectTagsBrowserOrder,
  selectTagsBrowserPage,
  selectTagsBrowserPageSize,
  selectTagsBrowserSort,
} from "./slice";
import EnhancedTable from "./components/table";
import { RequestOptions } from "./components/requestOptions";
import { createUrlLink } from "./components/createUrlLink";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectTagsBrowserData);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const page = useSelector(selectTagsBrowserPage);
  const pageSize = useSelector(selectTagsBrowserPageSize);
  const dateFrom = useSelector(selectTagsBrowserDateFrom);
  const dateTo = useSelector(selectTagsBrowserDateTo);
  const order = useSelector(selectTagsBrowserOrder);
  const min = useSelector(selectTagsBrowserMin);
  const max = useSelector(selectTagsBrowserMax);
  const sort = useSelector(selectTagsBrowserSort);
  const inname = useSelector(selectTagsBrowserInname);

  const [showMenu, setShowMenu] = useState(false);

  // display: ${(props) => (props.$initialClicked ? "none" : "flex")};
  // $clicked={clicked}
  // $initialClicked={initialClicked}

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (loading) {
    // console.log("data w loading", data);
  }
  if (!loading) {
    // console.log("data w !loading", data);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <div>
        <RequestOptions />
      </div>
      <div>
        cokolwiek
        <button onClick={toggleMenu}>pokaż menu</button>
        <button
          onClick={() =>
            dispatch(
              fetchDataTags({
                page,
                pageSize,
                dateFrom,
                dateTo,
                order,
                min,
                max,
                sort,
                inname,
              })
            )
          }
        >
          klik
        </button>
      </div>

      <div>{data ? <EnhancedTable data={data} /> : ""}</div>
    </div>
  );
}

export default App;
