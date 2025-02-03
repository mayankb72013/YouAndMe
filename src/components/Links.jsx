import { Link } from "react-router-dom"
export default function Links(props){
    return (
        <Link className="hover:underline hover:decoration-pink-600" to={`${props.to}`}>{props.children}</Link>
    )
}