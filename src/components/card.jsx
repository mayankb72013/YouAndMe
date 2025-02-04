import Quote from "../icons/quote";
import StarRatingComponent from "react-star-rating-component";

export default function Card(props) {
  return (
    <>
      <div className="drop-shadow-lg bg-slate-50 w-sm  flex flex-col justify-start items-center p-5 rounded-sm">
        <div className="self-start">
          <Quote />
        </div>
        <div className="text-4xl"> {/* Adjust size using Tailwind */}
          <StarRatingComponent editing={false} starCount={5} value={props.rating} />
        </div>
        <div>"{props.review}"</div>
        <div>
            <div>{props.photo}</div>
            <div className="font-semibold">{props.name}</div>
            <div>{props.place}</div>
        </div>
      </div>
    </>
  );
}
