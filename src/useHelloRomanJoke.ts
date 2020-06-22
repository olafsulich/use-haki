import { useState, useEffect, useCallback } from 'react';
import { randomJokeApi } from './api/index';
import { errorMessage } from './helpers/errorMessages';
import { getRandomIndex } from './utils/randomIndex';

type Joke = {
  id: number;
  question: string;
  answer: string;
};

const useHelloRomanJoke = () => {
  const [randomQuestion, setRandomQuestion] = useState<string>();
  const [randomAnswer, setRandomAnswer] = useState<string>();
  const [error, setError] = useState<string>();

  const generateRandomJoke = useCallback((jokes: Joke[]) => {
    const { question, answer } = jokes[getRandomIndex(jokes)];
    setRandomQuestion(question);
    setRandomAnswer(answer);
  }, []);

  const fetchJokes = useCallback(async () => {
    try {
      const data = await fetch(randomJokeApi);
      const { jokes } = await data.json();
      generateRandomJoke(jokes);
    } catch {
      setError(errorMessage);
    }
  }, [generateRandomJoke]);

  useEffect(() => {
    fetchJokes();
  }, [fetchJokes]);

  return [randomQuestion, randomAnswer, error];
};

export default useHelloRomanJoke;
