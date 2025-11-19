import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    specialCharAllowed && (str += "!@#$%^&*-_+=[]{}~`");

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      console.log(charIndex);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
    console.log(pass);
  }, [length, numAllowed, specialCharAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, specialCharAllowed, passwordGenerator]);
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="bg-slate-800 rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Password Generator
            </h1>
            <p className="text-slate-400 text-sm">
              Create strong and secure passwords
            </p>
          </div>

          <div className="mb-6">
            <div className="flex gap-2 bg-slate-700 rounded-lg p-2">
              <input
                type="text"
                value={password}
                className="flex-1 bg-slate-900 text-white text-lg font-mono px-4 py-3 rounded-md outline-none"
                placeholder="Generated password"
                readOnly
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-700 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white font-medium">
                  Password Length
                </label>
                <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-md text-sm">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="w-full h-2 bg-slate-600 rounded-lg cursor-pointer accent-blue-600"
                onChange={(e) => setLength(e.target.value)}
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>weak</span>
                <span>strong</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="bg-slate-700 rounded-lg p-4 cursor-pointer hover:bg-slate-600 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={numAllowed}
                    onChange={() => setNumAllowed((prev) => !prev)}
                    className="w-5 h-5 rounded accent-blue-600 cursor-pointer"
                  />
                  <div>
                    <div className="text-white font-medium">Numbers</div>
                    <div className="text-slate-400 text-xs">0-9</div>
                  </div>
                </div>
              </label>

              <label className="bg-slate-700 rounded-lg p-4 cursor-pointer hover:bg-slate-600 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={specialCharAllowed}
                    onChange={() => setSpecialCharAllowed((prev) => !prev)}
                    className="w-5 h-5 rounded accent-blue-600 cursor-pointer"
                  />
                  <div>
                    <div className="text-white font-medium">Symbols</div>
                    <div className="text-slate-400 text-xs">!@#$%</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <button
            onClick={passwordGenerator}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
