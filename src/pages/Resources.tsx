import React, { FC, useRef } from "react";
import { ResourcesDiv, ResourcesWrapper } from "../theme/styles";
import { useSelector } from "react-redux";
import ResourceCard from "../components/ResourceCard";
import { H1 } from "../theme/typography";

interface Resource {
  display: boolean;
  closeTab: any;
}
const Resources: FC<Resource> = ({ display, closeTab, resource }) => {
  const resources = useSelector((state) => state.resources);
  const lightbox = useRef(null);
  console.log(resource);
  return (
    <ResourcesWrapper display={display}>
      <button className="close_btn" onClick={() => closeTab()}>
        X
      </button>
      <H1>{resource}</H1>
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
