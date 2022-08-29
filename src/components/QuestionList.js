import React, { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [rerender, setRerender] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(json => setQuestions(json))
  }, [rerender])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map(question => <QuestionItem key={question.id} question={question} setRerender={setRerender}/>)
      }</ul>
    </section>
  );
}

export default QuestionList;
