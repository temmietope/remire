import React, { FC, useState, useEffect, useRef } from "react";
import { Button, ResourceCard as Card } from "../theme/styles";
import { H3, H4, P } from "../theme/typography";
import { extractDetails } from "../utils/functions/extractDetails";
import { useDispatch } from "react-redux";
import { fetchResource, clearQuickView } from "../actions";
import { formatDate } from "../utils/functions/formatDate";

interface Resource {
  resource: { [key: string]: any };
}

const ResourceCard: FC<Resource> = ({ resource }) => {
  const detailsDiv = useRef(null);
  const dispatch = useDispatch();
  const dateString = ["Created", "Edited", "Release Date"];

  //INTERNAL STATE
  //show card details
  const [active, setActive] = useState(false);
  const [cardHeader, setCardHeader] = useState("");
  const [history, setHistory] = useState([resource]);
  const [details, setDetails] = useState(
    extractDetails(history[history.length - 1])
  );
  const goBack = () => {
    const newArray = history.slice(0, -1);
    setHistory(newArray);
  };
  const [likedArray, setLikedArray] = useState([]);
  const [triggered, setTriggered] = useState(false);
  const getAllLiked = () => {
    let localArray = JSON.parse(
      localStorage.getItem("individualLikedArray") || "[]"
    );
    setLikedArray(localArray);
  };
  const id = history[history.length - 1].url.split("/").slice(4, 6).join("/");

  //LIFECYCLE
  useEffect(() => {
    detailsDiv.current.scrollTo({ top: 0, behavior: "smooth" });
    setCardHeader(
      history[history.length - 1].name || history[history.length - 1].title
    );
    setDetails(extractDetails(history[history.length - 1]));
  }, [history]);

  useEffect(() => {
    getAllLiked();
  }, [triggered]);
  const showMore = () => {
    setActive(!active);
  };
  const toggleLike = (id) => {
    let existingLikedArray = likedArray;
    if (likedArray.includes(id)) {
      existingLikedArray = existingLikedArray.filter((val) => val !== id);
    } else existingLikedArray.push(id);
    localStorage.setItem(
      "individualLikedArray",
      JSON.stringify(existingLikedArray)
    );
    setLikedArray(existingLikedArray);
    setTriggered(!triggered);
  };

  //FUNCTIONS
  const extractType = (str) => str.split("/").slice(4, 5)[0].slice(0, -1);
  const renderEntry = (key, val) => {
    if (Array.isArray(val)) {
      if (!val.length) {
        return null;
      }
      return (
        <li key={key}>
          <H4>{key}</H4>:
          <div className="array__list">
            {val.map((str, index) => {
              return (
                <div key={index}>
                  <P
                    transform="capitalize"
                    onClick={async () => {
                      const res = await dispatch(fetchResource(str));
                      setHistory([...history, res.payload]);
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
      {history.length > 1 && (
        <button
          className="back"
          onClick={() => {
            history.length === 2 && dispatch(clearQuickView());
            goBack();
          }}
        >
          Back
        </button>
      )}
      <H3>{cardHeader}</H3>
      <div className="card__details" ref={detailsDiv}>
        {details.map(([k, v]) => {
          return renderEntry(k, v);
        })}
      </div>
      <button onClick={() => toggleLike(id)} className="favorite">
        <i
          className={`${likedArray.includes(id) ? "fas" : "far"} fa-heart`}
        ></i>
      </button>
      <Button onClick={() => showMore()}>
        {active ? "Show Less" : "View More!"}
      </Button>
    </Card>
  );
};

export default ResourceCard;
