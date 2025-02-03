const variant = {
    "type1": "bg-gradient-to-tr from-pink-500 via-red-500 to-orange-500 rounded-3xl text-white",
    "type2": "bg-slate-100 rounded-3xl",
    "type3": "bg-transparent rounded-3xl"
}
const size = {
    "sm": "px-5 py-3",
    "md": "px-6 py-4",
    "lg": "px-7 py-5"
}
const font = {
    "normal" : "",
    "bold": "font-semibold",
    "xbold": "font-bold"
}
export default function Button(props){
    return(
        <button className={`${variant[props.type]} ${size[props.size]} ${font[props.thickness]}`}>
             {props.frontImage}
             {props.text}
             {props.endImage}
        </button>
    )
}