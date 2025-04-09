import { useEffect, useState } from "react";

///////////////////////////////////////////////////////////////
// Use this component to experiment with useEffect
// you'll need to enable it in App.jsx
///////////////////////////////////////////////////////////////

function UserDashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [tick, setTick] = useState(0);

  // 1. Run once when component mounts
  useEffect(() => {
    console.log("1) Component mounted");

    // Simulate data fetch
    setTimeout(() => {
      console.log('*** User Id updated')
      setUser({ name: `User ${userId}`, status: "active" });
    }, 3500);

    // Save interval for cleanup when component unmounts
    const interval = setInterval(() => {
      setTick(t => t + 1); // Trigger re-renders every second
    }, 1000);

    // Problem! Creates Stale Closure! 
    // const interval = setInterval(() => {
    //   setTick(tick + 1); // Trigger re-renders every second
    // }, 1000);

    return () => {
      console.log("2) Cleaning up timer...");
      clearInterval(interval);
    };
  }, []);

  // 2. Runs after every render (component update)
  useEffect(() => {
    console.log("3) Component updated");
  });

  // 3. Runs only when userId changes
  useEffect(() => {
    console.log(`4) User ID changed to ${userId}`);
    // Refetch user data or update view
    setUser(null);
    setTimeout(() => {
      setUser({ name: `User ${userId}`, status: "active" });
    }, 1000);
  }, [userId]);

  return (
    <div>
      <h2>User Dashboard</h2>
      <p><strong>Tick:</strong> {tick}</p>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={() => setIsOnline(o => !o)}>
        Toggle Online ({isOnline ? "Online" : "Offline"})
      </button>
    </div>
  );
}

export default UserDashboard