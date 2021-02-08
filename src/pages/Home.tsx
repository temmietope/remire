import { HomeWrapper, RootCard } from '../theme/styles';
import { Istate, RootKeys } from '../models';
import React, { useEffect, useState } from 'react';
import { clearQuickView, fetchResources, fetchRoots } from '../actions';
import { getFavs, toggleFav } from '../utils/store';
import { useDispatch, useSelector } from 'react-redux';

import { H2 } from '../theme/typography';
import { Loader } from '../components/Loader';
import Resources from './Resources';

const FAV_KEY = 'root';

const Home = () => {
  const dispatch = useDispatch();
  const roots = useSelector((state :Istate) => state.roots);

  const [showResources, setShowResources] = useState(false);
  const [resourceType, setResourceType] = useState<RootKeys | ''>('');

  const [favs, setFavs] = useState(getFavs(FAV_KEY));

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  useEffect(() => {
    getFavs(FAV_KEY);
  }, []);

  // eslint-disable-next-line no-unused-expressions
  showResources ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');

  const closeTab = () => {
    setShowResources(false);
    dispatch(clearQuickView());
  };

  const toggleFavorite = type => {
    toggleFav(type, FAV_KEY);
    setFavs(getFavs(FAV_KEY));
  };

  const rootTypes = Object.keys(roots.payload || {});

  return (
    <HomeWrapper>
      {roots.isLoading ? (
        <Loader />
      ) : (
        // @ts-ignore
        rootTypes.map((type: RootKeys) => (
          <RootCard
            key={type}
            onClick={async () => {
              setShowResources(true)
              setResourceType(type)
              await dispatch(fetchResources(type));
            }}
          >
            <H2>{type}</H2>
            <button
              className="favorite"
              onClick={e => {
                e.stopPropagation();
                toggleFavorite(type);
              }}
            >
              <i
                className={`${
                  favs.includes(type) ? 'fas' : 'far'
                } fa-heart`}
              />
            </button>
          </RootCard>
        ))
      )}

      <Resources
        closeTab={closeTab}
        display={showResources}
        resourceType={resourceType}
      />
    </HomeWrapper>
  );
};

export default Home;
