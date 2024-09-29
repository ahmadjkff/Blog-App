import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="flex flex-col w-[320px] p-5 border rounded-md hover:bg-gray-50 transition duration-200">
      <img src={data.image} alt="placeholder" />
      <p className="bg-blue-50 w-full max-w-24 rounded-sm text-blue-500 my-5">
        {data.category}
      </p>
      <h2 className="font-bold text-start">{data.title}</h2>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <img
            className="rounded-full w-9 h-9"
            src={data.authorImage}
            alt="placeholder"
          />
          <p className="mt-1">{data.author}</p>
        </div>
        <p>{data.date}</p>
      </div>
    </div>
  );
}

export default Card;
