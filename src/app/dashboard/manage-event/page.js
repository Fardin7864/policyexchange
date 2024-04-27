/* eslint-disable @next/next/no-img-element */
"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

//
const columns = [
  { id: "image", label: "Image", minWidth: 100 },
  { id: "title", label: "Title", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "link", label: "Link", minWidth: 100 },
  { id: "detail", label: "Detail", minWidth: 100 },
  { id: "manage", label: "Manage", minWidth: 100 },
];

export default function ManageEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {/* breadcrumb */}
      <div role="presentation" className="my-5 flex justify-between">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            className="text-black"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            className="text-black"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            Manage Events
          </Typography>
        </Breadcrumbs>
        <button className="bg-[#00263a] px-3 py-2 text-white rounded-lg duration-300 hover:bg-[#0282B7]">
          Add New
        </button>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {/* table */}

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className="font-bold bg-[#a2bcd6] text-center"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {events
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className="text-center"
                          >
                            {column.id === "image" ? (
                              <img
                                src={value}
                                alt="Publication"
                                style={{ width: "100px", height: "auto" }}
                              />
                            ) : column.id === "link" ? (
                              value ? (
                                <a
                                  href={value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600"
                                >
                                  {value}
                                </a>
                              ) : (
                                "N/A"
                              )
                            ) : column.id === "manage" ? (
                              <div className="flex gap-3 justify-center">
                                <FaEdit
                                  onClick={() => handleEdit(row.id)}
                                  className="text-[#00263a] text-base"
                                />
                                <DeleteIcon
                                  className="text-red-700 text-base"
                                  onClick={() => handleDelete(row.id)}
                                />
                              </div>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={events.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
