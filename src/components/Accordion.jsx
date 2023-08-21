import React, { useState } from "react";

const Accordion = () => {
	const [isActive, setIsActive] = useState(1);

	return (
		<div className="bg-white shadow-xl p-2 w-full my-2 rounded-md">
			{items.map(({ title, content, id }) => (
				<div className="bg-gray-200/50">
					<div
						className="flex items-center flex-wrap justify-between cursor-pointer my-2 p-2 rounded bg-gray-200"
						onClick={() => setIsActive(id)}>
						<div className="text-sm font-bold">{title}</div>
						<div className="font-bold">
							{id === isActive ? "-" : "+"}
						</div>
					</div>
					{id === isActive && (
						<div className="px-2 pb-2 mb-2 text-sm font-medium">
							{content}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;

const items = [
	{
		id: 1,
		title: "Data Units",
		content:
			"8 bit = 1 Byte, 1024 Byte = 1 KB, 1024 KB = 1 MB, 1024 MB = 1 GB, 1024 GB = 1 TB",
	},
	{
		id: 2,
		title: "Why use React?",
		content:
			"React makes it easy to create reusable UI components and build complex UIs with ease.",
	},
	{
		id: 3,
		title: "How do you use React?",
		content:
			"You can use React to build a variety of applications, including single-page apps, progressive web apps, and mobile apps.",
	},
];
