import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<main className="bg-slate-200 h-screen flex justify-center items-center">
			<App />
		</main>
	</React.StrictMode>
);
