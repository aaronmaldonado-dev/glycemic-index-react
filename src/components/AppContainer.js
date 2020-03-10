import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


import Header from './Header';
import GlycemicList from './GlycemicList';
import GlycemicData from '../data/glycemic-index.json';
import {useDebouncedCallback, useThrottledCallback} from '../hooks/Hooks';

function AppContainer() {
  const [glycemicData, setGlycemicData] = useState(GlycemicData);
  const [filteredData, setFilteredData] = useState(GlycemicData);
  const [searchQuery, setSearchQuery] = useState('');

  const filterList = () => {
    setFilteredData(
      glycemicData.filter(item => {
        const joinedString = (item.name + ' ' + item.GI).toLowerCase();
        const lowercaseQuery = searchQuery.toLowerCase();
        return joinedString.indexOf(lowercaseQuery) > -1;
      })
    );
  };

  const debounceFiltering = useDebouncedCallback(filterList, 1000);
  const throttledFiltering = useThrottledCallback(filterList, 1000);

  useEffect((searchQuery.length < 5) ? throttledFiltering : debounceFiltering, [searchQuery]);

  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header
          searchQuery={searchQuery}
          glycemicData={glycemicData}
          setSearchQuery={setSearchQuery}
          setFilteredData={setFilteredData}
        />
        <GlycemicList items={filteredData} />
      </Container>
    </React.Fragment>
  );
}

export default AppContainer;