import React, { FC } from "react";
import { Button, ResourceCard, ResourcesDiv, ResourcesWrapper } from "../theme/styles";
import { useDispatch, useSelector } from "react-redux";
import { H3 } from "../theme/typography";

interface Resource {
  display: boolean;
}
const Resources: FC<Resource> = ({ display }) => {
  const resources = useSelector((state) => state.resources);
  console.log(resources.payload);
  return (
    <ResourcesWrapper display={display}>
      <ResourcesDiv>
        {resources.payload &&
          resources.payload.map((resource) => {
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
