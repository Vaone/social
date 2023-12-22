import React, { FC, useState, ChangeEvent } from "react";

type CustomInputTypeProps = {
  postFunc: (text:string)=>void
}

const CusomInput: FC<CustomInputTypeProps> = ({postFunc}) => {
  let [input, setInput] = useState('')

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }
  
  const onClickBtnValue = () => {
    postFunc(input);
    setInput('')
  }

  return (
    <div>
      <input onChange={onChangeInputValue} value={input}/>
      <button onClick={onClickBtnValue}>+</button>
    </div>
  );
};

export default CusomInput;
