

function Form(props) {

    const handleTextSubmit = (e) => {
        e.preventDefault();
        props.textSubmit();
    }

    const handleTextChange = (e) => {
        e.preventDefault();
        props.textChange(e.target.value);
    }

    return ( 
        <form onSubmit={handleTextSubmit}>
            <input
                type="text"
                value={props.text}
                onChange={handleTextChange}
                placeholder="...search here"
            />
        </form>
     );
}

export default Form;