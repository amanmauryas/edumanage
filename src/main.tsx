import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = "pk_test_bW9kZXN0LXJlaW5kZWVyLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ"; // Replace with your Clerk public key

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ClerkProvider publishableKey={clerkPubKey}>
        <App />
      </ClerkProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
