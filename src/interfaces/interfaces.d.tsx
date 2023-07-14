interface Movie {
  id: string;
  reviews: number[];
  title: string;
  filmCompanyId: string;
  cost: number;
  releaseYear: number;
}

interface Company {
  id: string;
  name: string;
}

interface MovieData {
  id: string;
  reviews: number;
  title: string;
  companyName: string;
  cost: number | string;
  releaseYear: number | string;
}

interface ReviewBody {
  review: string;
}
