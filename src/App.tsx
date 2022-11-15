import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [picture, setPicture] = useState('');

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_APP_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: query,
      n: 1,
      size: '512x512',
    });
    setPicture(res.data.data[0].url);
  };

  return (
    <div className='main'>
      <h1>Generate an Image using Open AI API</h1>

      <textarea
        className='input'
        placeholder='A tall man in a psychedelic endless library, painted by Edvard Munch'
        onChange={(e) => setQuery(e.target.value)}
        rows='10'
        cols='40'
      />
      <button onClick={generateImage}>Generate an Image</button>

      {picture.length > 0 ? (
        <img className='picture' src={picture} alt={query} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
