import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const message = 'C-onfiguring terminal......';

  useEffect(() => {
    let currentIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + message[currentIndex]);
        currentIndex++;
        if (currentIndex === message.length) {
          clearInterval(interval);
        }
      }, 100); // Typing speed: 100 milliseconds per character
    }, 500); // Delay before starting to type: 1 second

    return () => clearTimeout(timeout); // Cleanup function to clear the timeout on unmount
  }, []); // Run effect only once

  return (
      <div className="loading-screen">
      <h1>{displayedText}</h1>
      <pre className="ascii-art">
        {`
        .--'''''''''--.
     .'      .---.      '.
    /    .-----------.    \\
   /        .-----.        \\
   |       .-.   .-.       |
   |      /   \\ /   \\      |
    \\    | .-. | .-. |    /
     '-._| | | | | | |_.-'
         | '-' | '-' |
          \\___/ \\___/
       _.-'  /   \\  \`-._
     .' _.--|     |--._ '.
     ' _...-|     |-..._ '
            |     |
            '.___.'
              | |
             _| |_
            /\\( )/\\
           /  \` '  \\
          | |     | |
          '-'     '-'
          | |     | |
          | |     | |
          | |-----| |
       .\`/  |     | |/\\
        `}
      </pre>
      <footer className='foot'>
        Designed & Developed by <u><a href="https://www.linkedin.com/in/binit-shrestha-0041931a8/" target="_blank">BINIT LAL SHRESTHA</a></u>.
      </footer>
    </div>
    
    
  );
};

  
export default LoadingScreen;