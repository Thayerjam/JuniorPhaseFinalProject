import React from 'react';
import { Layout } from './layout';
import students from '../../server/mocks/students.json';
import campuses from '../../server/mocks/campuses.json';
import { ListView } from './list';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const navData = [
  {
    title: 'Students',
    slug: '/students'
  },
  {
    title: 'Campuses',
    slug: '/campuses'
  }
];

/* 
    This is you entry point for your routes
*/
function Main() {
  return (
    <Router>
      <Layout navData={navData}>
        <Routes>
          <Route path="/campuses" element={<CampusView />} />
          <Route path="/students" element={<StudentView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

const StudentView = () => (
  <div>
    <h1>Students</h1>
    <ListView data={students} type="students" />
  </div>
);

const CampusView = () => (
  <div>
    <h1>Campuses</h1>
    <ListView data={campuses} type="campuses" />
  </div>
);

export default Main;
