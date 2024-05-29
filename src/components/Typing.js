
import { useEffect, useState } from "react";

function Typing({
    text,
    typingSpeed = 50,
    deletingSpeed = 100
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index,setIndex] = useState(0);

    const str = text[index].content;

    useEffect(() => {
        const handleTyping = () => {
            // console.log(displayedText)
            console.log(text[index].content)
            // console.log(text[index])
            if (!isDeleting) {
                if (displayedText.length < text[index].content.length){
                    setDisplayedText((prev) => prev + text[index].content.charAt(displayedText.length));
                }
                else {
                    setIsDeleting(true);
                }
            }
            else {
                if (displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }
                else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed]);

    return (
        <div className="typing-effect">
            {displayedText}
            <span className="pipe">|</span>
        </div>
        
    );
}

export default Typing;
