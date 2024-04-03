import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import {
  selectTagsBrowserDataFaq,
  selectTagsBrowserDataRel,
  selectTagsBrowserDataSyn,
  selectTagsBrowserDataType,
} from "../../../slice";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "@mui/material";

export default function BasicTable() {
  const dataFaq = useSelector(selectTagsBrowserDataFaq);
  const dataRel = useSelector(selectTagsBrowserDataRel);
  const dataSyn = useSelector(selectTagsBrowserDataSyn);
  const dataType = useSelector(selectTagsBrowserDataType);

  return (
    <>
      {dataFaq || dataRel || dataSyn ? (
        <TableContainer>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            size={"small"}
          >
            <TableHead>
              <TableRow hover>
                <TableCell>
                  {dataType === "dataFaq"
                    ? "Frequently Asked Questions"
                    : dataType === "dataRel"
                    ? "Related Tags"
                    : "Synonyms"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ maxHeight: "70vh" }}>
              {dataType === "dataFaq"
                ? dataFaq &&
                  dataFaq.items.map((row) => (
                    <TableRow
                      hover
                      key={nanoid()}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Link
                          href={row.link}
                          underline="hover"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.title}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                : dataType === "dataRel"
                ? dataRel &&
                  dataRel.items.map((row) => (
                    <TableRow
                      hover
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                    </TableRow>
                  ))
                : dataSyn &&
                  dataSyn.items.map((row) => (
                    <TableRow
                      hover
                      key={row.from_tag}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.from_tag}
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </>
  );
}
