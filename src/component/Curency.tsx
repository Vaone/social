import React, { FC, useState } from "react";

type MoneyPropsType = {
  money: MoneyType[];
};

type MoneyType = {
  banknots: string;
  value: number;
  number: string;
};

const Curency: FC<MoneyPropsType> = ({ money }) => {
  const [filteredMoney, setFilteredMoney] = useState(money)

  const clickHandler = (filter: 'dollars' | "rubls" | "all" ) => {
    if (filter === 'dollars') {
      setFilteredMoney(money.filter((i)=>{
        return i.banknots.toLowerCase() === 'dollars'
      }))
    }
    else if (filter === 'rubls') {
      setFilteredMoney(money.filter((i)=>{
        return i.banknots.toLowerCase() === 'rubls'
      }))
    }
    else {
      setFilteredMoney(money)
    }
  };

  return (
    <div>
      {filteredMoney.map((e, index) => {
        return (
          <div key={index}>
            <span>Curency: {e.banknots}</span> <span>Curency: {e.value}</span>{" "}
            <span>Curency: {e.number}</span>
          </div>
        );
      })}

      <button onClick={()=>{clickHandler('all')}}>All</button>
      <button onClick={()=>{clickHandler('dollars')}}>Dollar</button>
      <button onClick={()=>{clickHandler('rubls')}}>Ruble</button>
    </div>
  );
};

export default Curency;
