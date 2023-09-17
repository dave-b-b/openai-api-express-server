
const Bottom = (props) => {

    const inputValue = props.inputValue;
    const setInputValue = props.setInputValue;
    const setMessage = props.setMessage;

    const getMessages = async () => {

        const init = {
            'method': 'POST',
            'body': JSON.stringify(
                {
                    'message': inputValue
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const url = 'http://localhost:8000/completions';
            const response = await fetch(url, init);
            const result = await response.json();
            setMessage(result);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="bottom-section">
            <div className="input-container">
                <input value={inputValue} onChange={(evt) => setInputValue(evt.target.value)}/>
                <div id="submit" onClick={getMessages}>➢</div>
            </div>
            <p className="info">
                This is a basic chat app built in the style of ChatGPT. This app has no associate with OpenAI.
            </p>
        </div>
    )
}

export default Bottom;