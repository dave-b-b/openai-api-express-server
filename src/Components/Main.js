import Bottom from "./Bottom";


const Main = (props) => {

    const inputValue = props.inputValue;
    const setInputValue = props.setInputValue;
    const setMessage = props.setMessage;
    const message = props.message;
    const previousChats = props.previousChats;
    const currentTitle = props.currentTitle;
    const printConversation = (previousChats) => {

        const currentChat = previousChats?.filter(previousChat => previousChat.title === currentTitle);

        return currentChat.map((chat, index) => {
            return (
                <li key={index}>
                    <p className="role">{chat.role}</p>
                    <p className="content">{chat.content}</p>
                </li>
            )
        })

    }

    return (
        <section className="main">
            {currentTitle? null : <h1>Chat GPeTe</h1>}
            <ul className="feed">
                {printConversation(previousChats)}
            </ul>
            <Bottom inputValue={inputValue} setInputValue={setInputValue} setMessage={setMessage}/>
        </section>
    )
}

export default Main;