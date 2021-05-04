import React, { useEffect } from "react";
import {
  Section,
  Wrapper,
  Title,
  Image,
  List,
  Key,
  Value,
  Recipe,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMealRecipe,
  selectMealRecipeStatus,
  fetchMealRecipe,
} from "../mealRecipeSlice";
import { useSelectElements, useShowElementsValue } from "./useSelectElement";

const MealRecipeSubpage = () => {
  const mealRecipe = useSelector(selectMealRecipe);
  const mealRecipeStatus = useSelector(selectMealRecipeStatus);
  const selectElements = useSelectElements();
  const elementsValue = useShowElementsValue();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealRecipe());
  }, [dispatch]);

  if (mealRecipeStatus === "success") {
    const ingredients = elementsValue(
      selectElements(mealRecipe, "strIngredient")
    );
    const measures = elementsValue(selectElements(mealRecipe, "strMeasure"));

    const IngredientsAndMeasuresArray = Object.entries(
      Object.fromEntries(
        ingredients.map((_, i) => [ingredients[i], measures[i]])
      )
    );

    return (
      <Section>
        <Wrapper>
          <Title>{mealRecipe.strMeal}</Title>
          <Image url={mealRecipe.strMealThumb} />
          <List details>
            <Key>Category:</Key>
            <Value>{mealRecipe.strCategory}</Value>
            <Key>Area:</Key>
            <Value>{mealRecipe.strArea}</Value>
            <Key>See on youtube:</Key>
            <Value>
              <a href={mealRecipe.strYoutube}>YOUTUBE</a>
            </Value>
          </List>
          <List>
            {IngredientsAndMeasuresArray.map(([key, value]) => (
              <React.Fragment key={key}>
                <Key>{key}</Key>
                <Value>{value}</Value>
              </React.Fragment>
            ))}
          </List>
          <Recipe>{mealRecipe.strInstructions}</Recipe>
        </Wrapper>
      </Section>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default MealRecipeSubpage;
