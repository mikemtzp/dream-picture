import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState('');

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_APP_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  return (
    <div className="main">
        <h1>Generate an Image using Open AI API</h1>

        <textarea
          className="input"
          placeholder="A tall man in a psychedelic endless library, painted by Edvard Munch"
          onChange={(e) => setQuery(e.target.value)}
          rows="10"
          cols="40"
        />
        <button>Generate an Image</button>
    </div>
  );
}

export default App
