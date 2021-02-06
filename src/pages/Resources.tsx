import React, { FC, useState, useEffect } from "react";
import { ResourcesDiv, ResourcesWrapper } from "../theme/styles";
import { useSelector, useDispatch } from "react-redux";
import ResourceCard from "../components/ResourceCard";
import { H1 } from "../theme/typography";
import { clearQuickView } from "../actions";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
interface Resource {
  display: boolean;
  closeTab: any;
}
const Resources: FC<Resource> = ({ display, closeTab, resource }) => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resources);
  const quickView = useSelector((state) => state.resource);
  const [newView, setNewView] = useState(quickView.payload ? true : false);
  useEffect(() => {
    setNewView(quickView.payload ? true : false);
  }, [quickView]);
  return (
    <ResourcesWrapper display={display}>
      {newView ? (
        <button
          className="close_btn"
          onClick={() => {
            dispatch(clearQuickView());
          }}
        >
          {`<<< Back`}
        </button>
      ) : (
        <button
          className="close_btn"
          onClick={() => {
            closeTab();
          }}
        >
          X
        </button>
      )}
      {newView ? "" : <H1>{resource}</H1>}
      <ResourcesDiv quickView={newView}>
        <BindKeyboardSwipeableViews
          enableMouseEvents
          disabled={newView}
          resistance={true}
        >
          {resources?.payload?.map((resource) => {
            return (
              <ResourceCard
                key={resource.name || resource.title}
                resource={resource}
                quickView={newView}
              />
            );
          })}
        </BindKeyboardSwipeableViews>
      </ResourcesDiv>
    </ResourcesWrapper>
  );
};

export default Resources;
