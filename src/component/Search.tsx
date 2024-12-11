import React, { useState, useEffect } from 'react';
import { InputSearch } from './InputSearch';
import { ContainerNames } from './containerName';
const containerName = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'Alex' },
  { name: 'Chris' },
  { name: 'Sarah' },
  { name: 'Piza' },
  { name: 'David' }
];

export const Search = () => {
  const [value, setValue] = useState<string>(''); 
  const [filteredNames, setFilteredNames] = useState<string[]>([]); 

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

 
  useEffect(() => {
    if (value.trim() === '') {
      setFilteredNames([]); 
      return;
    }

    const filtered = containerName
      .filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) 
      )
      .map((item) => item.name); 

    setFilteredNames(filtered); 
  }, [value]);

  return (
    <div style={{ marginTop: '10px' }}>
      <InputSearch onChange={handleOnchange}  />

    
      {value && filteredNames.length > 0 && <ContainerNames names={filteredNames} />}
    </div>
  );
};
