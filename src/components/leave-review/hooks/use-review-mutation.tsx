import axios from "axios";
import { useMutation } from "react-query";
import { REVIEW_URL } from "@/constants";

export const useReviewMutation = () => {
  return useMutation((reviewBody) => axios.post(REVIEW_URL, reviewBody));
};
