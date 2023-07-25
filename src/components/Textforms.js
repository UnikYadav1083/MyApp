import React , {useState} from 'react';

export default function Textforms(props){
    const handleUpclick = ()=>{
        // console.log("UpperCase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" ,"success")

    }
    const handlelowclick = ()=>{
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lowercase" ,"success")

    }
    const handleOnchange = (event)=>{
        // console.log("Onchange was happening")
        setText(event.target.value);
    }

const [text, setText] = useState('Enter the text here');
    //setText("hello ");
    return (
        <>
        <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleOnchange}  style={{backgroundColor:props.mode ==='dark'?'grey':'white' , color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to LowerCase</button>
        </div>
         <div className="container my-2" style={{color:props.mode ==='dark'?'white':'black'}}>
             <h1>Your text summary</h1>
             <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.008 * text.split(" ").length} Minutes read</p>
             <h2>Preview</h2>
             <p>{text.length >0 ? text :"Enter something to preview it here" }</p>
         </div>
        </>
    );
};



