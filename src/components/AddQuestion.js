import { useEffect, useState } from "react";
import { supabase } from "../client";

export const AddQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    createId();
  }, [questions]);

  const createId = () => {
    setId(questions.length + 1);
  };

  const fetchPosts = async () => {
    const { data } = await supabase.from("questions").select();
    setQuestions(data);
  };

  const createQuestion = async () => {
    await supabase.from("questions").insert({ id, text });

    setId("");
    setText("");
    fetchPosts();
  };

  const textHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div>
      <input placeholder="text" onChange={textHandler} value={text} />
      <button onClick={createQuestion}>Create Question</button>
      <button onClick={() => console.log(id)}>show id</button>

      <button onClick={() => console.log(questions)}>show questions</button>
    </div>
  );
};
