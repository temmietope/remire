import React, { FC, useRef } from "react";
import {
  Button,
  ResourceCard,
  ResourcesDiv,
  ResourcesWrapper,
} from "../theme/styles";
import { useSelector } from "react-redux";
import { H3 } from "../theme/typography";
// import useOutsideClicks from "../utils/customHooks/useOutsideClick";
// import SwipeableViews from "react-swipeable-views";

interface Resource {
  display: boolean;
}
const Resources: FC<Resource> = ({ display }) => {
  const resources = useSelector((state) => state.resources);
  const lightbox = useRef(null);

  // const styles = {
  //   slide: {
  //     padding: 15,
  //     minHeight: 100,
  //     color: "#fff",
  //   },
  //   slide1: {
  //     backgroundColor: "#FEA900",
  //   },
  //   slide2: {
  //     backgroundColor: "#B3DC4A",
  //   },
  //   slide3: {
  //     backgroundColor: "#6AC0FF",
  //   },
  // };
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
            return (
              <ResourceCard key={resource.name}>
                <H3>{resource.name}</H3>
                <Button>View More!</Button>
              </ResourceCard>
            );
          })}
        {/* </SwipeableViews> */}
        {/* {resources?.payload?.map((resource) => {
          return (
            <ResourceCard key={resource.name}>
              <H3>{resource.name}</H3>
              <Button>View More!</Button>
            </ResourceCard>
          );
        })} */}
      </ResourcesDiv>
    </ResourcesWrapper>
  );
};

export default Resources;
