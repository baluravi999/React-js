import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostLists from './components/PostLists';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterTree from './components/HookCounterTree';
import HookCoounterFour from './components/HookCoounterFour';
import HookCounterUseEffectOne from './components/HookCounterUseEffectOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
// import IntervalHook from './components/IntervalHook';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

export const UserContext=React.createContext()
   export const ChannelContext=React.createContext()
  

function App() {
   
  return (
    <div className="App">
      {/* <PostLists/> */}
      {/* <PostForm/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterTree/> */}
      {/* <HookCoounterFour/> */}
      {/* <HookCounterUseEffectOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHook/> */}
      {/* <DataFetching/> */}
      <UserProvider value="viswas">
            <ComponentC/>
          </UserProvider>

      <UserContext.Provider value='vishwas'>
      <ChannelContext.Provider value='coders'>
      <ComponentC/>
      </ChannelContext.Provider>
      </UserContext.Provider>



    </div>
  );
}

export default App;
