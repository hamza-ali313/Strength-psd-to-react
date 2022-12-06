import React from "react";
import items from "./ProductsData";
console.log(items.image)
const Test = () => {
  return (
    <div>
      <h3>Test</h3>
      {items.map(item =>
       <img src={item.image}/>
       )
      }
    </div>
  );
};

export default Test;
