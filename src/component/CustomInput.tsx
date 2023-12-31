import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";

type CustomInputTypeProps = {
  postFunc: (text:string)=>void
}

const CustomInput: FC<CustomInputTypeProps> = ({postFunc}) => {
  let [input, setInput] = useState('')

  const onChangeInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value)
  }
  
  const onClickBtnValue = () => {
    postFunc(input);
    setInput('')
  }

  return (
    <StyledInputForm>
      <StyledCustomInput onChange={onChangeInputValue} value={input}/>
      <StyledBtn onClick={onClickBtnValue}>+</StyledBtn>
    </StyledInputForm>
  );
};

export default CustomInput;


const StyledInputForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const StyledCustomInput = styled.textarea`
  background-color: #F5F7FB;
  width: 50%;
  resize: none;
  min-height: 100px;
  margin-right: 44px;
  overflow-y: hidden;
  border-radius: 20px;
  padding: 12px 24px;

  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000099;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #0083fd61;
    color: #000;
  }
`
const StyledBtn = styled.button`
  background-color: #0066CC;
  padding: 10px 39px;
  border: none;
  color: #fff;
  border-radius: 20px;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  &:hover {
    background-color: #0357aa;
  }

`