const Sidebar = (props) => {

    const previousChats = props.previousChats;
    const resetState = props.resetState;
    const setCurrentTitle = props.setCurrentTitle;

    const titles = Array.from(new Set(previousChats?.map(previousChats => previousChats.title)));

    const loadPreviousChats = (evt) => {
        setCurrentTitle(evt.target.textContent);
    }

    const listTitles = (titles) => {
        return titles?.reverse().map( (title, index) => {
            return <li key={index} onClick={loadPreviousChats}>{title}</li>
        })
    }

    return (<section className="side-bar">
        <button onClick={resetState}>+ New Chat</button>
        <ul className="history">
            {listTitles(titles)}
        </ul>
        <nav>
            <p>Made by Dave</p>
        </nav>
    </section>)
}

export default Sidebar;