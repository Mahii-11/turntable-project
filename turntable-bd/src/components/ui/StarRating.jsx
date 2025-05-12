import { Star } from "lucide-react";

const StarRating = ({ rating = 0 }) => {
  return (
    <div
      className="flex items-center space-x-1"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-500"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default StarRating;
