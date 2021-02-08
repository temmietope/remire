import { Button, ResourceCard as Card } from '../theme/styles';
import { H3, H4, P } from '../theme/typography';
import React, { FC, useEffect, useRef, useState } from 'react';
import { clearQuickView, fetchResource } from '../actions';
import { getFavs, toggleFav } from '../utils/store';

import { Result } from '../models';
import extractDetails from '../utils/extractDetails';
import { formatDate } from '../utils/formatDate';
import { useDispatch } from 'react-redux';

interface Resource {
  resource: Result,
  quickView: boolean
}

const FAV_KEY = 'resource';
const dateString = ['Created', 'Edited', 'Release Date'];

const getResourceId = resource => resource?.url?.split('/api/')[1];

const ResourceCard: FC<Resource> = ({ resource, quickView }) => {
  const dataDiv = useRef(null);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [cardHeader, setCardHeader] = useState('');

  /**
   * this is a stack of all clicked cards cardStack, used to store the states of all viewed cards.
   * we pop this stack everytime a user clicks go back
   */
  const [cardStack, setCardStack] = useState<Result[]>([resource]);
  const [cardData, setCardData] = useState(extractDetails(cardStack));

  const goBack = () => {
    setCardStack(cardStack.slice(0, -1));
  };

  const [favs, setFavs] = useState(getFavs(FAV_KEY));

  const getResource = () => cardStack[cardStack.length - 1];

  const id = getResourceId(getResource());

  useEffect(() => {
    // @ts-ignore
    dataDiv.current.scrollTo({ top: 0, behavior: 'smooth' });
    const item = getResource();

    setCardHeader(item.name || item.title);
    setCardData(extractDetails(item));
  }, [cardStack]);

  useEffect(() => {
    getFavs(FAV_KEY);
  }, []);

  const toggleFavorite = type => {
    toggleFav(type, FAV_KEY);
    setFavs(getFavs(FAV_KEY));
  };

  const renderEntry = (key, list) => {
    if (Array.isArray(list)) {
      if (!list.length) return null;

      return (
        <li key={key}>
          <H4>{key}</H4>
          <span>
            {list.map((url, index) => (
              <P
                key={url}
                onClick={async () => {
                  const res = await dispatch(fetchResource(url));
                  // @ts-ignore

                  setCardStack([...cardStack, res.payload]);
                }}
                transform="capitalize"
              >
                {`${key.slice(0, -1)} ${index + 1}`}
              </P>
            ))}
          </span>
        </li>
      );
    }

    return (
      <li key={key}>
        <H4>{key}</H4>{' '}
        <P>{dateString.includes(key) ? formatDate(list) : list}</P>
      </li>
    );
  };

  return (
    <Card key={resource.name} quickView={quickView} showMore={active}>
      {cardStack.length > 1 && (
        <button
          className="back"
          onClick={() => {
            cardStack.length === 2 && dispatch(clearQuickView());
            goBack();
          }}
        >
          {'Back'}
        </button>
      )}
      <H3>{cardHeader}</H3>
      <div className="card__avatar">
        <img
          src={require('../assets/icons/starwars-head.svg').default}
          alt="icon"
        />
      </div>
      <ul className="card__details" ref={dataDiv}>
        {cardData.map(([k, v]) => renderEntry(k, v))}
      </ul>
      <button className="favorite" onClick={() => toggleFavorite(id)}>
        <i className={`${favs.includes(id) ? 'fas' : 'far'} fa-heart`} />
      </button>
      <Button onClick={() => setActive(!active)}>
        {active ? 'Show Less' : 'View More!'}
      </Button>
    </Card>
  );
};

export default ResourceCard;
