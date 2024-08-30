"use client"

const hireMeButtonListener = () => {
    console.log("HIRE ME");
}

const Button = ({text, className} : {text:string, className: string}) => {
    return (
        <button onClick={hireMeButtonListener} className={`${className} m-5 bg-blue-500 text-white hover:bg-blue-700 font-bold px-2 rounded whitespace-nowrap`}>{text}</button>
    );
}

export default Button;