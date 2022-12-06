import { React, useState, useEffect, useCallback, useRef } from "react";
import { addToCart,deleteItem } from "../Redux/CartSlice.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import MyModal from "./MyModal"
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailAPI = () => {
  const [searchTerm, setSearchTerm] = useState("d");
  const [cocktails, setCocktails] = useState([]);
  const dispatch = useDispatch()

  const fetchDrinks = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        console.log(newCocktails);
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  console.log(cocktails);
  function searchCocktail(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <>
    <MyModal/>
      <div className="search-cocktail">
        <h2>Search Cocktail</h2>
        <form>
          <input
            type="text"
            placeholder="search Your favourite one"
            onChange={searchCocktail}
          />
        </form>
      </div>
      <Container>
        <div className="grid-cocktails">
          {cocktails.map((item) => (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.info}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      // dispatch(addToCart("burger",456,""))
                      dispatch(
                        addToCart({
                          name: item.name,
                          image: item.image,
                          desc: item.info,
                        })
                      )
                    }
                  >
                    add
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CocktailAPI;
