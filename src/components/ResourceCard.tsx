import React, { FC, useState, useEffect, useRef } from "react";
import { Button, ResourceCard as Card } from "../theme/styles";
import { H3, H4, P } from "../theme/typography";
import { extractDetails } from "../utils/functions/extractDetails";
import { useDispatch } from "react-redux";
import { fetchResource } from "../actions";
import { formatDate } from "../utils/functions/formatDate";

interface Resource {
  resource: { [key: string]: any };
  quickView: any;
}

const ResourceCard: FC<Resource> = ({ resource, quickView }) => {
  const detailsDiv = useRef(null);
  const [cardHeader, setCardHeader] = useState(resource.name || resource.title);

  useEffect(() => {
    detailsDiv.current.scrollTo({ top: 0, behavior: "smooth" });
    !quickView && setCardHeader(resource.name || resource.title);
    !quickView && setDetails(extractDetails(resource));
  }, [quickView, cardHeader]);
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState(extractDetails(resource));
  const dispatch = useDispatch();
  const showMore = () => {
    setActive(!active);
  };
  const extractType = (str) => str.split("/").slice(4, 5)[0].slice(0, -1);
  const dateString = ["created, edited, release date"];
  const renderEntry = (key, val) => {
    if (Array.isArray(val)) {
      if (!val.length) {
        return null;
      }
      return (
        <li>
          <H4>{key}</H4>:
          <div className="array__list">
            {val.map((str, index) => {
              return (
                <div>
                  <P
                    key={index}
                    transform="capitalize"
                    onClick={async () => {
                      const res = await dispatch(fetchResource(str));
                      setDetails(extractDetails(res.payload));
                      setCardHeader(res.payload.name || res.payload.title);
                      // quickView
                    }}
                  >
                    {`${extractType(str)} ${index + 1}`}
                  </P>
                </div>
              );
            })}
          </div>
        </li>
      );
    }
    return (
      <li key={key}>
        <H4>{key}</H4>:<P>{dateString.includes(key) ? formatDate(val) : val}</P>
      </li>
    );
  };

  return (
    <Card key={resource.name} showMore={active}>
      <H3>{cardHeader}</H3>
      <div className="card__details" ref={detailsDiv}>
        {details.map(([k, v]) => {
          return renderEntry(k, v);
        })}
      </div>

      <Button onClick={() => showMore()}>
        {active ? "Show Less" : "View More!"}
      </Button>
    </Card>
  );
};

export default ResourceCard;
