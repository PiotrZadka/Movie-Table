import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { useState } from "react";

export const MoviesTable = ({
  movies,
  setSelectedMovie,
}: {
  movies: MovieData[];
  setSelectedMovie: Function;
}) => {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const handleRowClick = (title: string) => {
    setSelectedMovie(title);
    setSelectedCell(title);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableCell>Title</TableCell>
            <TableCell align="right">Review</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Release Year</TableCell>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow
                onClick={() => handleRowClick(movie.title)}
                key={movie.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor:
                    selectedCell === movie.title ? "lightblue" : "inherit",
                }}
              >
                <TableCell component="th" scope="row">
                  {movie.title}
                </TableCell>
                <TableCell align="right">{movie.reviews}</TableCell>
                <TableCell align="right">{movie.companyName}</TableCell>
                <TableCell align="right">{movie.cost}</TableCell>
                <TableCell align="right">{movie.releaseYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
