import React,{ useState } from 'react';



export default function TextForm(props) {

    const [text, setText] = useState("");
    const [dark, setDark1] = useState({
        color:'black',backgroundColor:'white'
    });
    const [btText,setbtText] = useState('Dark Mode');
    const [cText,setclText] = useState('copy');

    const clickme3=(e)=>{
        e.preventDefault();
        var txt=document.getElementById('textarea');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        setclText('copied')
    }
    const clickme=(e)=>{
        e.preventDefault();
        setText(text.toUpperCase());;
    }
    const clickme1=(e)=>{
        e.preventDefault();
        setText(text.toLowerCase());;
    }
    const clickme2=(e)=>{
        e.preventDefault();
        setText('');
        setclText('copy')
        
    }
    const extraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const ochangeto=(event)=> {
        setText(event.target.value)
    }
    const dkMode=(e)=>{
        e.preventDefault();
        if(dark.color==='black'){
            setDark1({
                color:'white',backgroundColor:'black'
            });
            document.body.style.backgroundColor="black"
            document.title="home-Dark Mode"
            setbtText('Light Mode')
        }
        else{
            setDark1({
                color:'black',backgroundColor:'white'
            });
            document.body.style.backgroundColor="white"
            setbtText('Dark Mode');
            document.title="home-light Mode";
        }
    }

    
    return (
        <>
            <div className="container rounded " style={dark} >
                <div className="container">
                    <h1>{props.heading}</h1>
                    <div className="form-group mb-3">
                        <textarea className="form-control" style={dark} placeholder='Enter text here...' value={text} onChange={ochangeto} id="textarea" rows="8"></textarea>
                        <button className="btn btn-primary my-2 mx-2" onClick={clickme}>convert to uppercase</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={clickme1}>convert to lowercase</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={extraspaces}>Remove Extra Spaces</button>
                        <button className="btn btn-danger my-2 mx-2" onClick={clickme3}>{cText}</button>
                        <button className="btn btn-dark my-2 mx-2 float-right" onClick={dkMode}>{btText}</button>
                        <button className="btn btn-danger my-2 mx-2 float-right" onClick={clickme2}>clearText</button>
                        

                    </div>
                </div>
                <div className='container'>
                    <h2>your summary</h2>
                    <p><b>{text.split(" ").length-1}</b> words <b>{text.length}</b> character</p>
                    <p><b>{0.008*(text.split(" ").length-1)}</b> minutes take to read</p>
                    <h2>Preview</h2>
                    <p className='border-bottom flex widthp border-secondary pl-5'>{text}</p>
                </div>
            </div>
        </>
    )
}

