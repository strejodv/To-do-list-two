import { useState } from 'react'


function App() {

  const [userInput, setUserInput] = useState("")
  const [items, setItems] = useState([]);
  const [buttonsText, setButtonsText] = useState('Incomplete')
  const [done, setDone] = useState(false)

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setItems([...items, e.target.value.trim()]);
      setUserInput('');
  }
};

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
};

  const buttonClick = () => {
    setButtonsText('Done')
    setDone(!done);
  };

    return (
      <>
            <div className="wrapper">
                    <h1>Stop Slacking List</h1>
                        <input
                        className="user-input"
                        type="text"
                        placeholder="What are your goals today?"
                        value={userInput}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        />
                            <div className="list-wrapper">
                                <ul className="the-list">
                                    {items.map((item, index) => (
                                    <li key={index}><span className="span-list">{item}</span>
                                    <button className={`list-button ${done ? 'list-button-done' : 'list-button-unfinished'}`} onClick={buttonClick}>{done ? 'Done' : 'Unfinished'}</button></li>
                                    ))}
                                </ul>
                            </div>
            </div>          
        </>
    );
}


export default App
