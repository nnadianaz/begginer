import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

const reactElement = (
  <a href="https://google.com" target="_blank">
    Click here to visit Google
  </a>
);

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
      {reactElement}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
);
