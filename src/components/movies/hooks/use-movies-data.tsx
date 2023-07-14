import { useData } from "./use-data";
import { MOVIE_COMPANIES_URL, MOVIES_URL } from "@/constants";
import { matchMovieWithCompany } from "@/utils/matchMovieWithCompany";

export const useMoviesData = () => {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useData(MOVIES_URL);
  const {
    data: companies,
    loading: companiesLoading,
    error: companiesError,
  } = useData(MOVIE_COMPANIES_URL);

  const isError = moviesError || companiesError;
  const isLoading = moviesLoading || companiesLoading;

  let movieData: MovieData[] = [];

  if (!isLoading) {
    if (isError) {
      console.error(
        "There has been an error fetching:",
        moviesError || companiesError
      );
    } else {
      movieData = matchMovieWithCompany(movies, companies) || [];
    }
  }

  return { data: movieData, isLoading, isError };
};
