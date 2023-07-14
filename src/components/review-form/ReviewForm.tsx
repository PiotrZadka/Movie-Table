import { useState } from "react";

import { TextField, FormLabel, FormControl, Button } from "@mui/material";
import { useReviewMutation } from "../leave-review/hooks/use-review-mutation";

export const ReviewForm = ({ title }: { title: string }) => {
  const [reviewBody, setReviewBody] = useState("Please share your review here");
  const [reviewResponse, setReviewResponse] = useState();
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const charLimit = 100;

  const postReview = useReviewMutation();

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    setReviewBody(inputValue);
    setSubmitEnabled(inputValue.length <= charLimit && inputValue.length > 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await postReview.mutateAsync({ review: reviewBody });
    setReviewResponse(response.data.message);
  };

  return (
    <FormControl>
      <FormLabel>You have selected: {title}</FormLabel>
      <TextField onChange={handleChange} placeholder={reviewBody} />
      {submitEnabled ? (
        <Button type="button" onClick={handleSubmit}>
          Submit review
        </Button>
      ) : (
        <FormLabel>
          Your review cannot be longer than 100 characters total
        </FormLabel>
      )}
      {reviewResponse && <FormLabel>{reviewResponse}</FormLabel>}
    </FormControl>
  );
};
