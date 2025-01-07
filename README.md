# 🌟 Esperanto Word Machine

The Esperanto Word Machine is a web-based tool that generates Esperanto words by combining selected parts of speech and translates them into English using the MyMemory translation API.

## Features

- Combine prefixes, roots, suffixes, and declensions to generate Esperanto words;
- Translate the generated word into English using MyMemory;

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Translation API**: [MyMemory Translation API](https://mymemory.translated.net)
- **HTTP Client**: Axios

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OffworldAstronaut/EsperantoWordMachine.git
   cd EsperantoWordMachine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and type in the address bar:
   ```
   http://localhost/home
   ```

## How does it work?

1. The user select parts of a word (prefix, root, suffix, declension) via the web interface;
2. The frontend sends the selected components to the backend using a POST request;
3. The backend combines the components to form an Esperanto word;
4. The backend sends the word to the MyMemory Translation API for translation into English;
5. The translated word and the original Esperanto word are returned to the frontend and shown to the user!! 

## File Structure

When you clone and install, the files are going to be organized this way:

```plaintext
.
├── public/
│   ├── index.html      # Frontend HTML file
│   ├── style.css       # Frontend styles
│   ├── script.js       # Frontend JavaScript
├── server.js           # Backend server logic
├── package.json        # Node.js dependencies
└── README.md           # Documentation
```

## Known issues / Future goals

1. MyMemory is easy to use but not really that good at Esperanto, switching to another translation API is a goal, preferably a FOSS one (main candidate: LibreTranslate); 
2. `PORT = 80` might raise an error, if this occurs, change the variable on `server.js` to another port number, like `3000`; 
3. More word parts are needed;
4. The interface needs a version in Esperanto; 

## Contributing

> *"Sub la sankta signo de l' espero
kolektiĝas pacaj batalantoj,
kaj rapide kreskas la afero
per laboro de la esperantoj."*

Contributions are welcome! 

This project is as alive as the linguistic community that it makes part of! 

## License

This project is licensed under the GNU GPL3; 

See the LICENSE file for more details! 

>*No one owns Esperanto, one should not profit from the hope of a new world.*