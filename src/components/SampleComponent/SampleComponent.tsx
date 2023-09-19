import sampleimage from "@assets/jpg/15-2500x1667.jpg";
import React from "react";
import { useSwPerson } from "../../common/swApi/hooks";
import {
  StyledDivWithBackgroundImage,
  StyledDivWithDynamicBackgroundImage,
  StyledSampleComponentWrapper,
} from "./SampleComponent.styles";

export const SampleComponent = () => {
  const person = useSwPerson("1");

  return (
    <StyledSampleComponentWrapper>
      {person ? JSON.stringify(person) : "loader"}
      <StyledDivWithBackgroundImage />
      <StyledDivWithDynamicBackgroundImage image={sampleimage} />
    </StyledSampleComponentWrapper>
  );
};
