import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (includeNumbers) str += "0123456789";
      if (includeSymbols) str += "!@#$%^&*";

      for (let i = 1; i <= length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length));
      }
      setPassword(pass);
    }, [length, includeNumbers, includeSymbols, setPassword]);

    const copyToClipboard = useCallback(() => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
    },[password]);

    useEffect(() => {
      generatePassword();
    }, [length, includeNumbers, includeSymbols,generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 text-orange-500 bg-gray-800 rounded-lg">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full outline-none py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
            />
            <label>Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
