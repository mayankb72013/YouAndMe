import Quote from "../icons/quote";
import ReactStars from 'react-rating-stars-component'
export default function Card(props) {
    return (
        <>
            <div className="shadow-lg bg-blue-300 w-sm flex flex-col justify-start items-center p-5">
                <div className="self-start"><Quote></Quote></div>
                <div><ReactStars></ReactStars></div>
                <div>"The Review"</div>
                <div>Name and place</div>
            </div>
        </>
    )
}