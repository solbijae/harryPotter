import './App.css'
import LandingPage from './pages/LandingPage'
import Characters from './pages/Characters'
import { useEffect } from 'react'
import { getCharaterList } from './api'

function App() {
  useEffect(() => {
    const fetchData = async () => {
        try {
            const characterList = await getCharaterList();
            console.log(characterList)
        } catch (error) {
            console.error('Error fetching character list:', error);
        }
    };

    fetchData();

    return () => {
        // 클린업 코드
    };
  }, []);

  return (
    <>
      <div>
        <LandingPage></LandingPage>
        <Characters></Characters>
        {/* <div>{characters}</div> */}
        {/* content */}
        {/* footer */}
      </div>
    </>
  )
}

export default App
