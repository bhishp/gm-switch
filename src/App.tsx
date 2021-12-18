import React from 'react';
import { GMSwitch } from './gm-switch/gm-switch';
import { Flex, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';

function App() {
  // chakra
  const { colorMode, setColorMode } = useColorMode();
  const [chakraChecked, setChakraChecked] = React.useState(colorMode === 'dark'); // needs a bit of work to sync-up with chakra's initial state (probs its in localstorage)
  // tailwind
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
        <Flex
          h="100%"
          direction="column"
          align="center"
          justify="center"
          fontSize="4xl"
          bg={useColorModeValue('white', 'gray.700')}
          color={useColorModeValue('gray.900', 'white')}
          style={{
            flex: '1',
            height: '100%',
            gap: '4',
          }}
        >
          <p>Mode is {colorMode}</p>
          <p>Welcome to the Chakra Switch!</p>
          {/* In reality we'd probably make a "ColorModeSwitch" component and just use the gm variant on it */}
          <Switch
            checked={chakraChecked}
            onChange={e => {
              setChakraChecked(e.target.checked);
              setColorMode(e.target.checked ? 'dark' : 'light');
            }}
            variant="gm"
          >
            {chakraChecked ? 'gn.' : 'gm.'}
          </Switch>
        </Flex>
      <div
        style={{
          flex: '1',
          height: '100%',
        }}
        className={darkMode ? 'dark' : ''}
      >
        <header
          className={`
            bg-white dark:bg-gray-700 text-gray-900 dark:text-white
            h-full flex flex-col items-center justify-center text-4xl gap-4
          `}>
          <p>Mode is {darkMode ? 'dark' : 'light'}</p>
          <p>Welcome to the Tailwind Switch!</p>
          <GMSwitch onChange={e => {
            setDarkMode(e.target.checked)
          }} />
        </header>
      </div>
    </div>
  );
}

export default App;
