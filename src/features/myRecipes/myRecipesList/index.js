import React from "react";
import Section from "../../../common/Section";
import {
  Title,
  Container,
  Item,
  MainInformation,
  Options,
  Button,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectMyRecipes, removeRecipe } from "../myRecipesSlice";
import { Link } from "react-router-dom";
import { toAddRecipe } from "../../../routes";

const MyRecipeList = () => {
  const recipeList = useSelector(selectMyRecipes);
  const dispatch = useDispatch();
  return (
    <Section myRecipe={"true"}>
      {recipeList.length !== 0 ? (
        <>
          <Title>My recipe list</Title>
          <Container list={"true"} as="ul">
            {recipeList.map(({ name }) => (
              <Item key={name}>
                <MainInformation>{name}</MainInformation>
                <Options>
                  <Button>
                    Go to recipe
                    <span as="img" alt="aria-label">
                      {" "}
                      ➡️{" "}
                    </span>
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(removeRecipe(name));
                    }}
                  >
                    Delete
                    <span as="img" alt="aria-label">
                      {" "}
                      🚫{" "}
                    </span>
                  </Button>
                </Options>
              </Item>
            ))}
          </Container>
        </>
      ) : (
        <Container>
          <Title>
            You dont have any recipe...{" "}
            <span as="img" alt="aria-label">
              {" "}
              😳{" "}
            </span>
          </Title>
          <MainInformation noRecipe="true">
            Click on button to add recipe:{" "}
          </MainInformation>
          <Link to={toAddRecipe()}>
            <Button noRecipe="true">
              Add recipe
              <span as="img" alt="aria-label">
                {" "}
                📃 🥘{" "}
              </span>
            </Button>
          </Link>
        </Container>
      )}
    </Section>
  );
};

export default MyRecipeList;
