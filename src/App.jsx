import { useState, useEffect } from 'react'
import { Users } from './components/Users'
import './App.css'

function App() {
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchGithubData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('');
    }
  }

  const handleSearch = () => {
    fetchGithubData()
  }

  useEffect(() => {
    fetchGithubData()
  }, []);

  if (loading) {
    return <div className='loading'><h1>Loading...</h1></div>
  }

  return (
    <>
      <div className='container'>
        <header>
          <h2>Github Finder</h2>
        </header>
        <div className="searchWrapper">
          <input type="text" className="searchInput" placeholder='Search Github username...' value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <button className="searchButton" onClick={handleSearch}>Search</button>
        </div>
        { userData !== null ? <Users users={userData} /> : null  }
      </div>
    </>
  )
}

export default App
