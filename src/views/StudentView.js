import { ListView } from '../components/list';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { setStudentsAsync } from '../store/stateSlice';
import { Layout } from '../components/layout';

export const StudentView = () => {
  const dispatch = useDispatch();
  const students = useLoaderData();
  useEffect(() => {
    console.log('StudentView useEffect', students);
    dispatch(setStudentsAsync(students));
  }, [students]);

  return (
    <Layout>
      <h1>Students</h1>
      <ListView type="students" />
    </Layout>
  );
};
