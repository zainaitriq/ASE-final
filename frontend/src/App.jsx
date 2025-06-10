import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) setToken(data.token);
  }

  if (token) {
    return <div className="p-4">Logged in!</div>;
  }

  return (
    <form onSubmit={login} className="p-4 space-y-2 max-w-xs">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border p-2 w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}
