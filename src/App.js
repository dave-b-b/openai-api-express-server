import {useEffect, useState} from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";


const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState({});
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

    const resetState = () => {
        setInputValue("");
        setMessage({});
        setCurrentTitle(null);
    }

    useEffect(() => {

        if(!currentTitle && message && inputValue){
            setCurrentTitle(inputValue);
        }

        if(currentTitle && message && inputValue){

            setPreviousChats(previousChats => {
                return [...previousChats,
                    //This is done this way to keep the question response format of ChatGPT
                    //request
                    {
                        title: currentTitle,
                        role: "user",
                        content: inputValue
                    },
                    //response
                    {
                        title: currentTitle,
                        role: message.role,
                        content: message.content,

                    }
                ]
            })

            setInputValue("");
        }
    // eslint-disable-next-line
    }, [message, currentTitle]);

    return (
        <div className="App">
            <Sidebar previousChats={previousChats} setCurrentTitle ={setCurrentTitle} resetState={resetState} />
            <Main inputValue={inputValue} setInputValue={setInputValue} setMessage={setMessage} message={message} previousChats={previousChats} currentTitle={currentTitle}/>
        </div>
    );
}

export default App;
