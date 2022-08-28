import './App.css';
import { createContext, useMemo, useState, Dispatch, useEffect } from 'react';
import { Footer, Header } from './layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Blog, Home } from './pages';
import { Issue } from './components/blog';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.bg};
  min-height: 110vh;
`;

const Pages = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

const light_theme = {
  bg: '#edf4fc',
  bg_menu: '#e1ecfb',
  bg_menu_tp: 'rgba(255,236,251,0.61)',
  main: '#5d9cec',
  main_dark: '#355986',
  main_tint: '#9dc3f3',
  main_tint_more: '#c7dcf8',
};

type TestDispatch = Dispatch<React.SetStateAction<string>>;
export const TestContext = createContext<string | null>('힝');
export const TestDispatchContext = createContext<TestDispatch | null>(null);

function App() {
  const [globalTest, setGlobalTest] = useState('전역상태 만들어보기');
  const testMemo = useMemo(() => globalTest, [globalTest]);
  const dispatchMemo = useMemo(() => setGlobalTest, [setGlobalTest]);

  const colorTheme = localStorage.getItem('colorTheme');

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', colorTheme || 'light');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TestContext.Provider value={testMemo}>
      <TestDispatchContext.Provider value={dispatchMemo}>
        <ThemeProvider theme={light_theme}>
          <Router basename="/">
            <div className="App">
              <Header />
              <Container id="container">
                <Routes>
                  <Route path="/*" element={<Home />} />
                  <Route path="/blog/*" element={<Blog />} />
                  {/* <Route path="/examples/*" element={<Examples />} /> */}
                  {/* <Route path="/pictures/*" element={<Pictures />} /> */}
                  {/* <Route path="/study/*" element={<Study />} /> */}
                  {/* <Route path="/*" element={<Wrong />} /> */}
                </Routes>
                <Footer />
              </Container>
            </div>
          </Router>
        </ThemeProvider>
      </TestDispatchContext.Provider>
    </TestContext.Provider>
  );
}

export default App;
