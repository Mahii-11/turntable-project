import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./store.js";
import "./i18next-config"; // use the updated filename
import { PersistGate } from "redux-persist/integration/react";

// Create a wrapper component to handle the Google Tag initialization
const RootWithTracking = () => {
  useEffect(() => {
    // Initialize gtag after script is loaded
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "AW-17108788133");
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootWithTracking />);
