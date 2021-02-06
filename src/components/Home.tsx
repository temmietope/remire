import classnames from "classnames";
import { fetchResources, fetchRoots } from "../actions";
import sentenceCase from "sentence-case";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeWrapper, RootCard } from "../theme/styles";
import { H2 } from "../theme/typography";
import Resources from "../pages/Resources";

const Home = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(void 0);
  const roots = useSelector((state) => state.roots);
  // const resources = useSelector((state) => state.resources);
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  const keys = Object.keys(roots.payload || {});
  showResources
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

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

      <Resources display={showResources} />
    </HomeWrapper>
  );
};

export default Home;
