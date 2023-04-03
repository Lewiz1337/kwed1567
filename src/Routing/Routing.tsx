import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { FormPage } from '../pages/FormPage/FormPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};
