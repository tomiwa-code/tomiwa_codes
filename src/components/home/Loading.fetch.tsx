import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="md:mt-12 w-[70%]">
      <Skeleton style={{ width: "200px", height: 40 }} />
      <Skeleton className="mt-5" style={{ maxWidth: "80%", height: 200 }} />
      <Skeleton className="mt-5" style={{ width: "300px", height: 50 }} />
      <div className="flex gap-x-6 mt-6">
        {[0, 1].map((items, index) => (
          <Skeleton
            className="mt-5"
            style={{ width: "200px", height: 60 }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
