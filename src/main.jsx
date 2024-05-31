import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./screens/search.jsx";
import { ModalProvider } from "./components/modal";
import { useModal } from "./contexts/Modal";
import { ClerkProvider, useUser, RedirectToSignIn, SignInButton, SignOutButton } from "@clerk/clerk-react";
import { CustomButton } from "./components/button";

// Create a client
const queryClient = new QueryClient();

const Button = () => {
  const { openModal } = useModal();

  return <button onClick={() => openModal()}>hello</button>;
};

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const AuthenticatedApp = () => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (<>
    <RedirectToSignIn/>

    </>
    
  );
  }

  return (
    <div className="cc-flex cc-flex-col">
    <SignOutButton/>
      <Button />
      <Search />
    </div>
  );
};

function initSearchLib(rootElement = document.getElementById("searchLib")) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <Router>
              <Routes>
                <Route path="/" element={<AuthenticatedApp />} />
                {/* Add other routes here */}
              </Routes>
            </Router>
          </ModalProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </React.StrictMode>
  );
}

// if in development mode, render immediately
initSearchLib();

window.initSearchLib = initSearchLib;
