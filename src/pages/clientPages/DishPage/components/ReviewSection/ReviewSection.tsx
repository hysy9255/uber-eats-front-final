import { ChevronRight, Star } from "lucide-react";

const ReviewSection = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Reviews</h2>

        <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
          View all reviews
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex min-h-[230px] flex-col items-center justify-center text-center">
        <div className="relative flex h-20 w-28 items-center justify-center rounded-2xl bg-gray-100">
          <div className="space-y-2">
            <div className="h-2 w-14 rounded-full bg-white" />
            <div className="h-2 w-10 rounded-full bg-white" />
          </div>

          <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        <h3 className="mt-6 text-lg font-bold">No reviews yet</h3>

        <p className="mt-1 text-sm text-gray-500">
          Be the first to review this dish!
        </p>

        <button className="mt-5 rounded-xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50">
          Write a review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
