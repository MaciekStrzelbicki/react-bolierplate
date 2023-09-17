import sampleimage from "@assets/jpg/file_example_JPG_100kB.jpg";
import { styled } from "styled-components";

export const StyledSampleComponentWrapper = styled.div``;

export const StyledDivWithBackgroundImage = styled.div`
  background-image: url(${() => sampleimage});
  height: 43.75rem;
  width: 65.625rem;
`;

interface StyledDivWithDynamicBackgroundImageProps {
  image: string;
}

export const StyledDivWithDynamicBackgroundImage = styled.div<StyledDivWithDynamicBackgroundImageProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  height: 43.75rem;
  width: 65.625rem;
`;
