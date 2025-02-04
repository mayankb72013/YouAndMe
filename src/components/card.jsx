import Quote from "../icons/quote";
import StarRatingComponent from "react-star-rating-component";

export default function Card(props) {
  return (
    <>
      {(props.type == "testimonial") && <div className="drop-shadow-lg bg-slate-50 w-sm  flex flex-col justify-start items-center p-5 rounded-sm">
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
      </div>}

      {(props.type == "about") && <div className="drop-shadow-lg bg-slate-50 w-sm gap-6 p-5 rounded-sm">
        <div className="flex gap-6 flex-col justify-center items-center">
          <div className="rounded-full size-5 flex justify-self-center">{props.photo}</div>
          <div>
            <div className="font-semibold gap-2 flex justify-self-center">{props.heading}</div>
            <div>{props.description}</div>
          </div>
        </div>
      </div>}
    </>
  );
}
// Create an About Card