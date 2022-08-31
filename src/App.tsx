import './App.css';
import { createContext, Dispatch, useEffect } from 'react';
import { Footer, Header, ScreenElements } from './layouts';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Blog, Home } from './pages';
import { MasterProvider } from './components/wrappers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  min-height: calc(100vh);
  transition: all 1s;
  > main {
    max-width: 1200px;
    width: 80vw;
  }
`;

interface IRouterContext {
  number: string | undefined;
  search: string | undefined;
}
type TestDispatch = Dispatch<React.SetStateAction<string>>;
export const RouterContext = createContext<IRouterContext>({
  number: undefined,
  search: undefined,
});

function App() {
  const colorTheme = localStorage.getItem('colorTheme');

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', colorTheme || 'light');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MasterProvider>
      <div className="App">
        <ScreenElements />
        <Header />

        <Container id="container">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:number" element={<Blog />} />

            {/* <Route path="/examples/*" element={<Examples />} /> */}
            {/* <Route path="/pictures/*" element={<Pictures />} /> */}
            {/* <Route path="/study/*" element={<Study />} /> */}
            {/* <Route path="/*" element={<Wrong />} /> */}
          </Routes>
          <Footer />
        </Container>
      </div>
    </MasterProvider>
  );
}

export default App;
