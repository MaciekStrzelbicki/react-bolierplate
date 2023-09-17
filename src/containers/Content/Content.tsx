import React from "react";
import { StyledContent } from "./Content.styled";
import { ContentProps } from "./Content.types";

export const Content = ({ children }: ContentProps) => (
  <StyledContent>{children}</StyledContent>
);
