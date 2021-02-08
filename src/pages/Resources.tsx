import React, { FC, useEffect, useState } from 'react';
import { ResourcesDiv, ResourcesWrapper } from '../theme/styles';

import { CardLoader } from '../components/CardLoader';
import { H2 } from '../theme/typography';
import { Istate } from '../models';
import ResourceCard from '../components/ResourceCard';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { useSelector } from 'react-redux';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

interface IResource {
  display: boolean,
  closeTab: any,
  resourceType: string,
}

const Resources: FC<IResource> = ({ display, closeTab, resourceType }) => {
  const resources = useSelector((state: Istate) => state.resources);
  const quickView = useSelector((state: Istate) => state.resource);
  const [newView, setNewView] = useState(Boolean(quickView.payload));
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setNewView(Boolean(quickView.payload));
  }, [quickView, newView]);

  const handleChangeIndex = (i) => {
    setIndex(i);
  };

  const prev = () => {
    index > 0 && setIndex(index - 1);
  };

  const next = () => {
    index < resources?.payload.length - 1 && setIndex(index + 1);
  };

  return (
    <ResourcesWrapper display={display}>
      <button
        className="close_btn"
        onClick={() => {
          setIndex(0);
          closeTab();
        }}
      >
        {'X'}
      </button>
      {newView ? '' : <H2>{resourceType}</H2>}
      <ResourcesDiv quickView={newView}>
        {!newView && (
          <button
            onClick={prev}
            className="scroll__btn btn__prev"
            disabled={index === 0}
          >
            <i className="fas fa-backward"></i>
          </button>
        )}
        {resources?.isLoading ? (
          <CardLoader />
        ) : (
          <BindKeyboardSwipeableViews
            disabled={newView}
            enableMouseEvents
            index={index}
            onChangeIndex={handleChangeIndex}
            slideClassName="swipe-card"
          >
            {resources?.payload?.map((resource) => (
              <ResourceCard
                key={resource.name || resource.title}
                quickView={newView}
                resource={resource}
              />
            ))}
          </BindKeyboardSwipeableViews>
        )}
        {!newView && (
          <button
            onClick={next}
            className="scroll__btn btn__next"
            disabled={index === resources?.payload?.length - 1}
          >
            <i className="fas fa-forward"></i>
          </button>
        )}
      </ResourcesDiv>
    </ResourcesWrapper>
  );
};

export default Resources;
