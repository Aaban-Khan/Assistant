const btn = document.querySelector('.input');
const content = document.querySelector('.content');
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning sir...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon sir...");
    } else {
        speak("Good Evening sir...");
    }
}
window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};
btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    // Function to simulate speaking, replace with actual implementation
    function speak(text) {
        console.log(text); // Placeholder for actual speaking functionality
    }
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("craft")) {
        window.open("https://youtu.be/SDihPcuRw-g?si=tcxr2VJyopO-6Pkd", "_blank");
        speak("Playing 5-min craft...");
    } else if (message.includes("doraemon")) {
        window.open("https://youtu.be/CMYoBMu8-rQ?si=ZFbfyyWijjo4b-Cs", "_blank");
        speak("Playing Doraemon...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('how to') || message.includes('what are')) {
        const searchQuery = encodeURI(message); // Encode the search query
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank"); // Use template literals
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        const searchQuery = message.replace("wikipedia", "").trim(); // Trim extra spaces
        window.open(`https://en.wikipedia.org/wiki/${searchQuery}`, "_blank"); // Use template literals
        const finalText = "This is what I found on Wikipedia regarding " + searchQuery;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        // Adjusted to open the calculator application on the system (if possible)
        // This might need platform-specific handling or a different approach
        speak("Opening Calculator");
    } else {
        const searchQuery = encodeURI(message); // Encode the search query
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank"); // Use template literals
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
