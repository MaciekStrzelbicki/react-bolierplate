import react from "@assets/png/react.png";
import { ReactComponent as Youtube } from "@assets/svg/youtube.svg";
import React from "react";

import { COLORS } from "../../common/colors";
import { SampleComponent } from "../../components/SampleComponent";
import { Content } from "../../containers/Content";
import { StyledItem, StyledList } from "./SamplePage.styles";

export const SamplePage = () => (
  <Content>
    <StyledList>
      <SampleComponent />
      <StyledItem>
        svg icon
        <Youtube width={100} fill={COLORS.red} />
      </StyledItem>
      <StyledItem>
        bitmap image
        <img src={react} />
      </StyledItem>
    </StyledList>
  </Content>
);
