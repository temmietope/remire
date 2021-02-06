import React, { FC, useRef } from "react";
import { ResourcesDiv, ResourcesWrapper } from "../theme/styles";
import { useSelector } from "react-redux";
import ResourceCard from "../components/ResourceCard";

interface Resource {
  display: boolean;
}
const Resources: FC<Resource> = ({ display }) => {
  const resources = useSelector((state) => state.resources);
  const lightbox = useRef(null);

  return (
    <ResourcesWrapper display={display}>
      <ResourcesDiv ref={lightbox}>
        {/* <SwipeableViews enableMouseEvents> */}
        {/* <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide n°1
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div> */}
        {resources?.payload?.map((resource) => {
          return <ResourceCard key={resource.name} resource={resource} />;
        })}
        {/* </SwipeableViews> */}
      </ResourcesDiv>
    </ResourcesWrapper>
  );
};

export default Resources;
