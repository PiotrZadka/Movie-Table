import { useMediaQuery } from "@mui/material";
import { ModalWrapper } from "../modal-wrapper/ModalWrapper";
import { ReviewForm } from "../review-form/ReviewForm";

export const LeaveReview = ({ title }: { title: string }) => {
  const isDesktopView = useMediaQuery("(min-width:600px)");

  return (
    <>
      {!isDesktopView ? (
        <ModalWrapper>
          <ReviewForm title={title} />
        </ModalWrapper>
      ) : (
        <ReviewForm title={title} />
      )}
    </>
  );
};
