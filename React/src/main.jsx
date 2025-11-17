// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 페이지 컴포넌트
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <App />
    // </StrictMode>
);
