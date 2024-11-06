import { useState } from "react";
import React from "react";
import axios from "axios"
import { Button } from "antd";

function chatbot(){

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    async function generateAnswer(){
        setAnswer("loading")
       const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBlJVxPFwuyuPQMXD5JKBt4O5xRYwYlalM",
            method:"post",
            data:{
            contents:[
                {parts:[{text: question}]}
            ]}
            })
          setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }
  return (
    <div style={{backgroundColor:'#bdeea5',width:'100%',height:'100%'}}>
        <h1 style={{textAlign:'center'}}>ChatBot</h1>
        <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} style={{width:'260px',height:'60px',marginLeft:'3px'}}
          placeholder="Ask your doubt with us 24*7"> </textarea>
        <Button onClick={generateAnswer}
        style={{backgroundColor:'#3ab57e',width:'170px',height:'40px',fontSize:'18px',marginLeft:'20%'}}>Generate Answer</Button>

        <pre>{answer}</pre>
    </div>
  )
}
export default chatbot