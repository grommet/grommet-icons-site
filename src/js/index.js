import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('content');
const root = createRoot(element);
root.render(<App />);

document.body.classList.remove('loading');
