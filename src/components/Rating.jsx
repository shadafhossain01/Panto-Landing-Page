import { FaStar } from "react-icons/fa";

const Rating = ({ rate = 0, total = 5, size = 18 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <FaStar
          key={i}
          size={size}
          className={i < rate ? "text-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default Rating;
