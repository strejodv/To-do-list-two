import { useState } from 'react'


function App() {

  const [userInput, setUserInput] = useState("Your future daily goals will show here!")
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setUserInput(e.target.value.trim());
      e.target.value = '';
    }
  };

  return (
    <>
     <div className="wrapper">
        <div className="input-wrap">
          <h1>Stop Slacking List</h1>
            <input className="user-input"  onKeyDown={handleKeyPress} input type="text" placeholder="What are your goals today?" id="username" name="username" required></input>
              <ul className="the-list">
                <li>
                  {userInput}
                </li>
              </ul>
        </div>                              
     </div>
    </>
  )
}

export default App
