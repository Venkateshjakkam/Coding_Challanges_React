import  { useState, useEffect} from 'react';

const DebounceSearch = () => {
    const [text, setText] = useState("");
    const [debouncedText, setDebouncedText] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedText(text);
        }, 500); 

        return () => clearTimeout(timer); 
    }, [text]);

    return (
        <div>

            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <p>{debouncedText}</p>
            
        </div>
    );

}
export default DebounceSearch;