import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';


function App() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch('https://mentoringclasstomer.herokuapp.com/tweets/');
      const data = await response.json();
      setTweets(data.data)
    }
    getInfo()
  }, [])
  return (
    <div className="App">
      Hello World2
      {tweets.length > 0 && 
      tweets.map(tweet => (<div>{JSON.stringify(tweet)}</div>))
        
      }
    </div>
  );
}

export default App;
