import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./routes/Routes";
import { useLocation } from "react-router-dom";
import LoadingPage from "./components/layouts/LoadingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`fade-container ${loading ? "loading" : "loaded"}`}>
        {loading ? <LoadingPage /> : <AppRoutes />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
