import { fetchResources, fetchRoots, clearQuickView } from "../actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeWrapper, RootCard } from "../theme/styles";
import { H2 } from "../theme/typography";
import Resources from "../pages/Resources";
import { Loader } from "./Loader";

const Home = () => {
  const dispatch = useDispatch();
  const roots = useSelector((state) => state.roots);
  const [showResources, setShowResources] = useState(false);
  const [resource, setResource] = useState("");
  const [likedArray, setLikedArray] = useState(
    JSON.parse(localStorage.getItem("likedArray") || "[]")
  );
  const [triggered, setTriggered] = useState(false);
  const getAllLiked = () => {
    let localArray = JSON.parse(localStorage.getItem("likedArray") || "[]");
    setLikedArray(localArray);
  };

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);
  useEffect(() => {
    getAllLiked();
  }, [triggered]);

  const keys = Object.keys(roots.payload || {});
  showResources
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

  const closeTab = () => {
    setShowResources(false);
    dispatch(clearQuickView());
  };

  const toggleLike = (type) => {
    let existingLikedArray = likedArray;
    if (likedArray.includes(type)) {
      existingLikedArray = existingLikedArray.filter((val) => val !== type);
    } else existingLikedArray.push(type);
    localStorage.setItem("likedArray", JSON.stringify(existingLikedArray));
    setLikedArray(existingLikedArray);
    setTriggered(!triggered);
  };

  return (
    <HomeWrapper>
      {roots.isLoading ? (
        <Loader />
      ) : (
        roots.payload &&
        keys.map((root) => {
          return (
            <RootCard
              key={root}
              onClick={async () => {
                await dispatch(fetchResources(root));
                setShowResources(true);
                setResource(root);
              }}
            >
              <H2>{root}</H2>
              <button
                className="favorite"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(root);
                }}
              >
                <i
                  className={`${
                    likedArray.includes(root) ? "fas" : "far"
                  } fa-heart`}
                ></i>
              </button>
            </RootCard>
          );
        })
      )}

      <Resources
        display={showResources}
        closeTab={closeTab}
        resource={resource}
      />
    </HomeWrapper>
  );
};

export default Home;
