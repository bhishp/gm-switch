import React from 'react';
import { GMSwitch } from './gm-switch/gm-switch';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="
      bg-white dark:bg-gray-700 text-gray-900 dark:text-white
      min-h-screen flex flex-col items-center justify-center text-4xl gap-4">
        <p>Welcome to the GM Switch!</p>
        <GMSwitch onChange={e => {
          setDarkMode(e.target.checked)
        }} />
      </header>
    </div>
  );
}

export default App;
