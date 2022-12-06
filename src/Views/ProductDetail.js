import React, {useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "./ProductsData";
import Grumpy from "../images/9.png";
import Stretch from "../images/10.png";
import Hungry from "../images/11.png";
import Crossfire from "../images/12.png";
import {Container,Row,Col} from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import useLocalStorageState from 'use-local-storage-state'

let images = {
  Grumpy,
  Stretch,
  Hungry,
  Crossfire,
};

function ProductDetail() {

  // custom hook useLocalStorage


  const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );
  
    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
  
    return [value, setValue];
  };


    // custom hook useLocalStorage



 const [cartArray, setCartArray] = useLocalStorage( "cartArr",[ 
    {
      id: "1",
      name: "Grumpy",
      description: "Everyone's favorite cat who loves to hate",
      price: 15,
    }
]);



  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);
  console.log(thisProduct.name);

 
  // const addToCart = (product) => {
  //   setCartArray([
  //     ...cartArray,
  //     {
  //       id: (cartArray.length += 1),
  //       name: product.name,
  //       description: product.description,
  //       price: product.price,
  //     },
  //   ]);
  //   console.log(cartArray);
  //   console.log(product);
  // };

  return (
    <>
    <Container>
      <div className="item-detail">
        <h1>{thisProduct.name}</h1>
        <img src={images[thisProduct.name]} />
        <p>Price: ${thisProduct.price}</p>
        <p>{thisProduct.description}</p>
        {/* <button onClick={() => addToCart(thisProduct)}>Add To Cart</button> */}
      </div>
      <div className="cart-sec">
        {cartArray.map((item) => (
       <Table striped bordered hover key={item.id}>
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>PRICE</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td> <img src={images[item.name]} className="cart-img"/></td>
          </tr>
         </tbody>
      </Table>
        ))}
      </div>
      </Container>
    </>
  );
}

export default ProductDetail ;
