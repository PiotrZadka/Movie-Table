export const averageReview = (reviews: number[]) => {
  const sum = reviews.reduce((a: number, b: number) => a + b, 0);
  const avg = sum / reviews.length || 0;
  return Math.round(avg);
};
