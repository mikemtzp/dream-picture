import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import ailibrary from './assets/ailibrary.jpeg'
import './App.css';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [picture, setPicture] = useState<string>('');

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_APP_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res: any = await openai.createImage({
      prompt: query,
      n: 1,
      size: '512x512',
    });
    setPicture(res.data.data[0].url);
  };

  return (
    <div className='flex flex-col h-auto sm:grid sm:grid-cols-5 sm:gap-8'>
      <div className='flex flex-col justify-center items-center sm:col-span-3'>
        <h1>Generate an Image using Open AI API</h1>

        <input
          className='w-[75%] p-5 rounded-sm my-5 placeholder:text-center placeholder:italic'
          placeholder='A tall man in a psychedelic endless library, painted by Edvard Munch'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={generateImage}>Generate an Image</button>

        {picture.length > 0 ? (
          <img className='picture' src={picture} alt={query} />
        ) : (
          <></>
        )}
      </div>

      <div className='flex justify-center items-center sm:col-span-2'>
        <img
          src={ailibrary}
          alt='A tall man in a psychedelic endless library, painted by Edvard Munch'
          className='rounded-xl mt-5 sm:mt-0 sm:h-auto shadow-xl shadow-slate-700'
        />
      </div>
    </div>
  );
};

export default App;
