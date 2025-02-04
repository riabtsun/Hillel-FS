import classes from './getData.module.css';
import { useEffect, useState } from 'react';

interface Character {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

const GetData = () => {
  const [data, setData] = useState<Character>();
  const [personId, setPersonId] = useState(1);

  const handleNext = () => {
    setPersonId((prevState) => prevState + 1);
  };
  const handlePrev = () => {
    if (personId > 0) {
      setPersonId((prevState) => prevState - 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${personId}`
        );
        if (!response) {
          new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData().then();
  }, [personId]);

  return (
    <div className={classes.cardWrap}>
      <img src={data?.image} alt={data?.name} />
      <h1 className={classes.name}>{data?.name}</h1>
      <div className={classes.personInfo}>
        <p>status: {data?.status}</p>
        <p>species: {data?.species}</p>
        <p>gender: {data?.gender}</p>
      </div>
      <div className={classes.controls}>
        <button onClick={handlePrev}>Prev character</button>
        <button onClick={handleNext}>Next character</button>
      </div>
    </div>
  );
};

export default GetData;
