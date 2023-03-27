import React from 'react';
import SearchForm from './components/SearchForm';
import Buttons from './components/Buttons';
import Stories from './components/Stories';

export default function App() {
  return (
    <main className='container'>
      <SearchForm />
      <Buttons/>
      <Stories/>
    </main>
  );
}

