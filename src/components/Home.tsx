import { fetchResources, fetchRoots } from "../actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeWrapper, RootCard } from "../theme/styles";
import { H2 } from "../theme/typography";
import Resources from "../pages/Resources";

const Home = () => {
  const dispatch = useDispatch();
  const roots = useSelector((state) => state.roots);
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  const keys = Object.keys(roots.payload || {});
  showResources
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

  const closeTab = () => setShowResources(false);
  return (
    <HomeWrapper>
      {roots.payload &&
        keys.map((root) => {
          return (
            <RootCard
              key={root}
              onClick={async () => {
                await dispatch(fetchResources(root));
                setShowResources(true);
              }}
            >
              <H2>{root}</H2>
            </RootCard>
          );
        })}

      <Resources display={showResources} closeTab={closeTab} />
    </HomeWrapper>
  );
};

export default Home;
