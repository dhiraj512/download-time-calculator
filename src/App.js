import React from "react";
import Converter from "./components/Converter";
import Accordion from "./components/Accordion";

export default function App() {
	return (
		<div className="sm:max-w-lg max-w-sm  mx-auto">
			<h1 className="text-center text-3xl font-bold">
				Download Time Calculator
			</h1>
			<Converter />
			<Accordion />
			<p className="mx-2">
				Made with React and Tailwindcss by{" "}
				<a className="text-blue-600" href="https://dhirajp.vercel.app">
					Dhiraj
				</a>
			</p>
			<p className="mx-2">
				Reference:{" "}
				<a
					className="underline decoration-dotted font-medium decoration-blue-600 text-blue-600"
					href="https://www.wikihow.com/Calculate-Data-Transfer-Rate"
					target="_blank"
					rel="noopener noreferrer">
					Wikihow/Calculate-Data-Transfer-Rate
				</a>
			</p>
		</div>
	);
}
