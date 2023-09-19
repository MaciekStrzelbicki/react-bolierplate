import sampleimage from "@assets/jpg/file_example_JPG_100kB.jpg";
import { styled } from "styled-components";

export const StyledSampleComponentWrapper = styled.div``;

export const StyledDivWithBackgroundImage = styled.div`
  background-image: url(${() => sampleimage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 12.5rem;
  width: 12.5rem;
`;

interface StyledDivWithDynamicBackgroundImageProps {
  image: string;
}

export const StyledDivWithDynamicBackgroundImage = styled.div<StyledDivWithDynamicBackgroundImageProps>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 12.5rem;
  width: 12.5rem;
`;
