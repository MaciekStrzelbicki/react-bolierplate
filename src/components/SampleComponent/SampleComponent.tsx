import sampleimage from "@assets/jpg/15-2500x1667.jpg";
import React from "react";
import {
  StyledDivWithBackgroundImage,
  StyledDivWithDynamicBackgroundImage,
  StyledSampleComponentWrapper,
} from "./SampleComponent.styles";

export const SampleComponent = () => (
  <StyledSampleComponentWrapper>
    <StyledDivWithBackgroundImage />
    <StyledDivWithDynamicBackgroundImage image={sampleimage} />
  </StyledSampleComponentWrapper>
);
