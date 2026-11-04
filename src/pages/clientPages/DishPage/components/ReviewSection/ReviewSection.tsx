import { ChevronRight, Star } from "lucide-react";

const ReviewSection = () => {
  return (
    <div className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Reviews</h2>

        <button
          type="button"
          className="
            flex min-h-9 shrink-0 items-center justify-center gap-1.5
            rounded-full border border-gray-200
            px-3 py-2 text-xs font-medium text-gray-700
            transition-colors
            hover:cursor-pointer hover:bg-gray-50
            sm:gap-2 sm:px-4 sm:text-sm
          "
        >
          View all reviews
          <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
      </div>

      {/* Empty Reviews */}
      <div
        className="
          flex min-h-[210px] flex-col
          items-center justify-center
          py-6 text-center
          sm:min-h-[250px] sm:py-8
        "
      >
        {/* Illustration */}
        <div
          className="
            relative flex h-16 w-24
            items-center justify-center
            rounded-2xl bg-gray-100
            sm:h-20 sm:w-28
          "
        >
          <div className="space-y-2">
            <div className="h-2 w-12 rounded-full bg-white sm:w-14" />
            <div className="h-2 w-9 rounded-full bg-white sm:w-10" />
          </div>

          <div
            className="
              absolute -top-2 -right-2
              flex h-8 w-8 items-center justify-center
              rounded-full bg-white shadow
              sm:h-9 sm:w-9
            "
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5" />
          </div>
        </div>

        {/* Message */}
        <h3 className="mt-5 text-base font-bold text-gray-900 sm:mt-6 sm:text-lg">
          No reviews yet
        </h3>

        <p className="mt-1 max-w-[260px] text-xs leading-5 text-gray-500 sm:max-w-none sm:text-sm">
          Be the first to review this dish!
        </p>

        {/* Write Review Button */}
        <button
          type="button"
          className="
            mt-4 flex min-h-11 items-center justify-center
            rounded-xl border border-gray-200
            px-5 py-2.5 text-sm font-medium text-gray-700
            transition-colors
            hover:cursor-pointer hover:bg-gray-50
            sm:mt-5 sm:px-6 sm:py-3
          "
        >
          Write a review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
