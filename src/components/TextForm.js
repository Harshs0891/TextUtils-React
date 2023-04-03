import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
        props.showAlert("characters are converted to UpperCase","Success")
    }

    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("characters are converted to LowerCase","Success")
    }
    
    const handleClearClick = () =>{
      let newText = '';
      setText(newText)
      props.showAlert("Text cleared","Success")
    }

    const handleRevWorClick = () =>{
      // const words = text.split(' ');
      let strArr = text.split(" ");
      let newtext = strArr.reverse();
      let joinWords = newtext.join(" ");
      setText(joinWords);
      props.showAlert("Words are reversed","Success")
    }
    
    const handleRevCharClick = () =>{
      // const words = text.split(' ');
      let strArr = text.split("");
      let newtext = strArr.reverse();
      let joinWords = newtext.join("");
      setText(joinWords);
      props.showAlert("characters are reversed","Success")
      props.showAlert("characters are reversed","Success")
    }

    const handleCapClick = () =>{
      let myArr = text.split(" ").map(str =>{
        return str[0].toUpperCase() + str.slice(1)
      }).join(" ");
      setText(myArr);
      props.showAlert("Texts are capitalised","Success")
      
    }

    const handlePTextClick = () =>{
      let colors = ["red","yellow","cyan","blue"];
      let x = colors[Math.floor(Math.random() * 4)];
      document.getElementById("myBox").style.color=x;
      props.showAlert("color of preview text is changed","Success")
    }

    const handleIncClick = () =>{
      document.getElementById("myBox").style.fontSize="130%";
      props.showAlert("Font size is increased","Success")
    }
    
    const handleDectClick = () =>{
      document.getElementById("myBox").style.fontSize="80%";
      props.showAlert("Font size is decreased","Success")

    }

    const handleFindClick = () =>{
      let newText = text.replaceAll(Find,"");
      setText(newText);

    }

    const handleCopy = () =>{
      var texts = document.getElementById("myBox")
      texts.select();
      navigator.clipboard.writeText(texts.value);
    }




    
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleOnChangeFind = (event) =>{
      setFind(event.target.value)
    }

    const[text,setText]=useState('');
    const[Find,setFind]=useState('Enter to find');
    // text="New Text" //wrong way to change the text
    // setText("New Text"); //correct way to change the text
  return (
    <>
    <div className="container">
        <h1 style={{color : props.mode=== 'light' ? 'black' : 'red'}}>{props.heading} </h1>
        <div className="mb-3">
        <textarea value={text} className="form-control" onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white' , color: props.mode=== 'light' ? 'black' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleRevWorClick}>Reverse Words</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleRevCharClick}>Reverse Characters</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlePTextClick}>Change Preview TextColor</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>Capitalise</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleIncClick}>Increase Font size </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDectClick}>Decrease Font Size</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <h4 style={{color : props.mode=== 'light' ? 'black' : 'white'}}>Find and Delete Word</h4>
        <textarea className="my-2 mx-2" value={Find} id="" cols="16" onChange={handleOnChangeFind} rows="1"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleFindClick}>Delete the word</button>

    </div>

    <div className="container my-3" style={{color : props.mode=== 'light' ? 'black' : 'white'}}>
      <h2>Your summary</h2>
      <p>{text.split(/[  ]+/).length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      {/* <p>{text.search({Find})}</p> */}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    
    <footer style={{color : props.mode=== 'light' ? 'black' : 'white',marginLeft:"50%",fontWeight:"900"}}>Created By Harsh</footer>
    </>
  )
}
