import { useState } from "react";

import { MoviesTable } from "../movies-table/MoviesTable";
import { LeaveReview } from "../leave-review/LeaveReview";
import { useMoviesData } from "./hooks/use-movies-data";

export const Movies = () => {
  const { data: moviesArray, isLoading, isError } = useMoviesData();
  const [selectedMovie, setSelectedMovie] = useState("");

  if (isLoading) {
    return <p>Movies are loading!</p>;
  }

  if (isError) {
    return <p>There was an error fetching movies!</p>;
  }

  return (
    <>
      <h2>Welcome to Movie database!</h2>
      <p>Total movies displayed {moviesArray.length}</p>
      <MoviesTable movies={moviesArray} setSelectedMovie={setSelectedMovie} />
      {selectedMovie && <LeaveReview title={selectedMovie} />}
    </>
  );
};
