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

interface Resource {
  display: boolean;
}
const Resources: FC<Resource> = ({ display }) => {
  const resources = useSelector((state) => state.resources);
  const lightbox = useRef(null);
  // console.log(lightbox);
  // const [show, setShow] = useState(display);
  // useOutsideClicks(lightbox, () => console.log(display));
  // console.log(show)
  return (
    <ResourcesWrapper display={display}>
      <ResourcesDiv ref={lightbox}>
        {resources?.payload?.map((resource) => {
          return (
            <ResourceCard key={resource.name}>
              <H3>{resource.name}</H3>
              <Button>View More!</Button>
            </ResourceCard>
          );
        })}
      </ResourcesDiv>
    </ResourcesWrapper>
  );
};

export default Resources;
