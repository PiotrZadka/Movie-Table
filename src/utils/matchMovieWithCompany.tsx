import { averageReview } from "./averageReview";

export const matchMovieWithCompany = (
  movies?: Movie[],
  companies?: Company[]
) => {
  const moviesData = movies?.map((movie) => {
    const company = companies?.find(
      (company) => company.id === movie.filmCompanyId
    );

    return {
      id: movie.id,
      reviews: averageReview(movie?.reviews),
      title: movie?.title || "Title not found",
      companyName: company?.name || "Company not found",
      cost: movie?.cost || "Cost not found",
      releaseYear: movie?.releaseYear || "Year not found",
    };
  });

  return moviesData;
};
