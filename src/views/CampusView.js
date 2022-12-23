import React, { useEffect } from "react";
import { ListView } from "../components/list";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { setCampusAsync } from "../store/stateSlice";
import { Layout } from "../components/layout";

export const CampusView = () => {
  const dispatch = useDispatch();
  const campuses = useLoaderData();
  useEffect(() => {
    console.log("CampusView useEffect", campuses);
    dispatch(setCampusAsync(campuses));
  }, [campuses]);

  return (
    <Layout>
      <h1>Campuses</h1>
      <ListView type="campuses" />
    </Layout>
  );
};
