import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './global-style';
import LandingPage from './pages/LandingPage'
import Characters from './pages/Characters'

function App() {
  return (
    <>
      <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LandingPage></LandingPage>
            <Characters></Characters>
            {/* <div>{characters}</div> */}
            {/* content */}
            {/* footer */}
        </ThemeProvider>

      </>
    </>
  )
}

export default App;
