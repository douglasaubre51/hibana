import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CreateDocument } from './pages/CreateDocument.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateDocument />
  </StrictMode>,
);
