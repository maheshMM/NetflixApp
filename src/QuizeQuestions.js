import React, { useState } from "react"

const qizQuestions = 
                 [ 
                    {
                            Question: "what is the capital of the france?",
                            options : ["paris","london","zambia","hyderabad"],
                            Answer : "paris"
                    },
                    {
                            Question: "what is the capital of the Telangana?",
                            options : ["paris","london","zambia","hyderabad"],
                            Answer : "hyderabad"
                    },
                    {
                        Question: "what is the capital of the UK?",
                        options : ["paris","london","zambia","hyderabad"],
                        Answer : "london"
                    },


                ]


const QuizeQuestions = () => {

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(null);
        const handleAnswerChange =(e,index)=> {
            setSelectedAnswers({
                ...selectedAnswers, [index]: e.target.value,
            });
        };
        const handleSubmit=()=>{
            let userScore =0;
            qizQuestions.forEach( (question,index) => {
                if(selectedAnswers[index] === question.Answer ){
                    userScore++;
                }}

            );

            setScore(userScore);
            }
    return(
        <>
        <h1>Quiz Application</h1>
        <div>

        { qizQuestions.map((que,index)=>            
            <div key={index} >
                <h2>{que.Question}</h2>
                  { que.options.map( (opt,optInx) => ( <label  key={optInx}> <input  type="radio"  name={`question- ${index}`} value={opt} onChange={(e)=> handleAnswerChange(e,index)} checked={selectedAnswers[index]===opt}/> {opt} </label> ))  }
          </div> 
         ) } 
        </div>
        <div style={{ marginTop: "20px" }}>
        <button onClick={handleSubmit} >Submit</button>
        </div>
        { score!=null && (<div> <h3>you are score is out {score} </h3></div>) }
        </>
    )
}
export default QuizeQuestions;