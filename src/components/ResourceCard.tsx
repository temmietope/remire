import React, { FC } from "react";
import { Button, ResourceCard as Card } from "../theme/styles";
import { H3 } from "../theme/typography";

interface Resource {
  resource: { [key: string]: any };
}

const ResourceCard: FC<Resource> = ({ resource }) => {
  return (
    <Card key={resource.name}>
      <H3>{resource.name}</H3>
      <Button>View More!</Button>
    </Card>
  );
};

export default ResourceCard;
