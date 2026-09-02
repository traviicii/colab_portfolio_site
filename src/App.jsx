import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import Support from './Views/Support';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
