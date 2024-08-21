import { useEffect, useState } from "react";
import SimpleRouter from "./components/SimpleRouter";
import "./App.css";

function App() {
  const permissions = ["admin", "user", "guest"];
  const [userPermissions, setUserPermissions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const randomPermission =
        permissions[Math.floor(Math.random() * permissions.length)];
      setUserPermissions(randomPermission);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SimpleRouter userPermissions={userPermissions} isLoading={isLoading} />
  );
}
export default App;
