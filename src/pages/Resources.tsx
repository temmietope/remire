import React, { FC, useEffect, useState } from 'react';
import { ResourcesDiv, ResourcesWrapper } from '../theme/styles';

import { H2 } from '../theme/typography';
import { Istate } from '../models';
import ResourceCard from '../components/ResourceCard';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { useSelector } from 'react-redux';
import { CardLoader } from '../components/CardLoader';

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

  useEffect(() => {
    setNewView(Boolean(quickView.payload));
  }, [quickView, newView]);

  return (
    <ResourcesWrapper display={display}>
      <button
        className="close_btn"
        onClick={() => {
          closeTab();
        }}
      >
        {'X'}
      </button>
      {newView ? '' : <H2>{resourceType}</H2>}
      <ResourcesDiv quickView={newView}>
        {resources?.isLoading ? (
          <CardLoader />
        ) : (
          <BindKeyboardSwipeableViews
            disabled={newView}
            enableMouseEvents
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
      </ResourcesDiv>
    </ResourcesWrapper>
  )
};

export default Resources;
