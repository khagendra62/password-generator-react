# Password Generator

A modern, fast password generator built with React. Generate secure passwords with customizable length, numbers, and special characters. Features one-click copy-to-clipboard functionality.

## Features

- ✅ Generate random passwords instantly
- ✅ Customize password length (4-50 characters)
- ✅ Toggle numbers (0-9)
- ✅ Toggle special characters (!@#$%^&\*)
- ✅ One-click copy to clipboard
- ✅ Visual feedback on copy
- ✅ Auto-generates on settings change
- ✅ Responsive design

## Quick Start

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/password-generator-react.git
cd password-generator-react

# Install dependencies
npm install

# Start development server
npm start
```

Open `http://localhost:3000` in your browser.

## Usage

1. Adjust the password length using the slider (4-50 characters)
2. Enable "Numbers" to include digits (0-9)
3. Enable "Symbols" to include special characters (!@#$%^&\*)
4. Click "Copy" to copy password to clipboard
5. Click "Generate New Password" for a different password

## Project Structure

```
src/
├── App.jsx          # Main component
├── index.css        # Global styles
└── index.js         # Entry point
```

## React Hooks Used

### useState

Manages component state for password, length, and character options.

```javascript
const [length, setLength] = useState(8);
const [numAllowed, setNumAllowed] = useState(false);
const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
const [password, setPassword] = useState("");
const [copied, setCopied] = useState(false);
```

### useRef

Provides direct DOM access to the password input for text selection and copying.

```javascript
const passwordRef = useRef(null);
passwordRef.current?.select();
```

### useCallback

Memoizes functions to prevent unnecessary recreations and optimize performance.

```javascript
const passwordGenerator = useCallback(() => {
  // Password generation logic
}, [length, numAllowed, specialCharAllowed]);
```

### useEffect

Automatically generates new password when settings change.

```javascript
useEffect(() => {
  passwordGenerator();
}, [length, numAllowed, specialCharAllowed, passwordGenerator]);
```

## How It Works

1. **Initialization**: App loads with default 8-character password
2. **User Input**: Adjust length, toggle numbers/symbols
3. **Auto-Generate**: useEffect detects changes and regenerates password
4. **Copy to Clipboard**: Select input text and copy using Clipboard API
5. **Visual Feedback**: Button shows "Copied!" for 2 seconds

## Technologies

- React 18
- Tailwind CSS 3
- JavaScript ES6+
- Clipboard API

## Building for Production

```bash
npm run build
```

Builds the app for production in the `build` folder.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**khagendra** - [GitHub](https://github.com/khagendra62) | [Portfolio](https://awasthikhagendra.com.np)

## Support

For issues and questions, please open an [issue](https://github.com/khagendra62/password-generator-react/issues) on GitHub.
