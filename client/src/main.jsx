import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SignUp from "./components/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignUp />
  </StrictMode>,
);
