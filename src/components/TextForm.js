import React, {useState} from 'react'

export default function TextForm(props) {
    const upclick= ()=>{
        
        console.log("converted to uppercase")
       
        if(text==='')
        {
            props.onAlert(': Please Enter Some Text First','warning')
        }
        else{
            if (text===text.toUpperCase())
            {
                props.onAlert(': Already in UpperCase','warning')
            }
            else{
            let newText=text.toUpperCase();
            setText(newText);
            props.onAlert(': Text is converted to Uppercase','success')}
       }
        
    }
    const lwclick= ()=>{
       
        if(text==='')
        {
            props.onAlert(': Please Enter Some Text First','warning')
        }
        else{
            if (text===text.toLowerCase())
            {
                props.onAlert(': Already in LowerCase','warning')
            }
            else{
            let newText=text.toLowerCase();
            setText(newText);
            props.onAlert(': Text is converted to LowerCase','success')}
        }
        
    }
        
    
    const ClearText= ()=>{
        let newText="";
        setText(newText);
        if(text==='')
        {
            props.onAlert(': Already Cleared','warning')
        }
        else{
        props.onAlert(': Text is Cleared','success')}
        
    }
        
    
   
    const onExSpaces= ()=>{
        
        if(text==='')
        {
            props.onAlert(': Please Enter Some Text First','warning')
        }
        else{ 
           
            let v=/\s+/g;
                let newText=text.replace(v," ");
                
                setText(newText);
                props.onAlert(': Extra Spaces have been removed','success')
            
            
                
            
        }
        
    }
    const onCopy= ()=>{
        let copyText=document.getElementById("my_Box");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if(text==='')
        {
            props.onAlert(': No Text to Copy','warning')
        }
        else{
        props.onAlert(': Copied to Clipboard','success')}
    }
    
    const handleOnChange= (event)=>{
        console.log("on change ")
        setText(event.target.value);
    }
    const [text, setText]=useState('');
   
    
    
  return (
    <>
   
    <div className={`container `} >
        
    <div className="container my-3">
        <div className="mb-3">
            <h5 className={`text-${props.myStyle==='light'?'black':'white'}`}>{props.Heading}</h5>
            <textarea className={`form-control bg-${props.myStyle==='light'?'dark':'white'} text-${props.myStyle==='light'?'white':'black'} `} onChange={handleOnChange} value={text} id="my_Box" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" style={{background:'blue'}} onClick={upclick}>Uppercase</button>
        <button className="btn btn-primary mx-1" style={{background: 'blue'}} onClick={lwclick}>lowercase</button>
        <button className="btn btn-primary mx-1" style={{background: 'blue'}} onClick={ClearText}>Clear Text</button> 
        <button className="btn btn-primary mx-1" style={{background: 'blue'}} onClick={onCopy}>Copy Text</button> 
        <button className="btn btn-primary mx-1" style={{background: 'blue'}} onClick={onExSpaces}>remove Extra Spaces</button>  
    </div>
    <div className={`container text-${props.myStyle==='light'?'black':'white'}`}>
        <h5>Your Text Summary</h5>
        <p>Total Characters: <strong>{text.length}</strong> 
        <br></br>
        Total Words: <strong>{text===''?'0':text.trim().split(/\s+/g).length}</strong>
        <br></br>
        Total Minutes to Read That Text: <strong>{text===''?'0':0.008 * text.split(" ").length}</strong>
        </p>
        <h5>Preview Text</h5>
        <p>{text}</p>
    </div>
    </div>
    </>
  )
}
