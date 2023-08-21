import React, { useState } from "react";

const Converter = () => {
	const [downloadSpeed, setDownloadSpeed] = useState(3.4);
	const [speedSelectValue, setSpeedSelectValue] = useState("Mbps");
	const [fileSize, setFileSize] = useState(10);
	const [fileSizeSelectValue, setFileSizeSelectValue] = useState("GB");

	function secondsToHms(d) {
		d = Number(d);
		var h = Math.floor(d / 3600);
		var m = Math.floor((d % 3600) / 60);
		var s = Math.floor((d % 3600) % 60);

		var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
		var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
		var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
		return hDisplay + mDisplay + sDisplay;
	}

	const result = () => {
		if (fileSizeSelectValue === "MB" && speedSelectValue === "Mbps") {
			let time = fileSize / (downloadSpeed / 8);
			return secondsToHms(time);
		}

		if (fileSizeSelectValue === "GB" && speedSelectValue === "Mbps") {
			let time = (fileSize * 1024) / (downloadSpeed / 8);
			return secondsToHms(time);
		}

		if (fileSizeSelectValue === "GB" && speedSelectValue === "Gbps") {
			let time = (fileSize * 1024) / ((downloadSpeed * 1024) / 8);
			return secondsToHms(time);
		}
	};

	return (
		<form className="flex gap-y-4 gap-x-14 flex-wrap justify-center items-center bg-white/90 shadow-xl p-2 w-full my-2 rounded-md">
			<div>
				<h2 className="text-md font-bold text-center my-1">
					File Size
				</h2>
				<div className="flex gap-2">
					<input
						type="text"
						name="fileSize"
						id="fileSize"
						value={fileSize}
						onChange={(e) => setFileSize(e.target.value)}
						className="bg-gray-200/50 border border-gray-800 w-20 rounded-sm px-1"
					/>
					<select
						className="bg-gray-200/50 border border-gray-800 rounded-sm px-1"
						name="fileSize"
						value={fileSizeSelectValue}
						onChange={(e) =>
							setFileSizeSelectValue(e.target.value)
						}>
						<option value="MB">MB</option>
						<option value="GB">GB</option>
					</select>
				</div>
			</div>
			<div>
				<h2 className="text-md font-bold text-center my-1">
					Internet Speed
				</h2>
				<div className="flex gap-2 items-center">
					<input
						type="text"
						name="downloadSpeed"
						id="downloadSpeed"
						value={downloadSpeed}
						onChange={(e) => setDownloadSpeed(e.target.value)}
						className="bg-gray-200/50 border border-gray-800 rounded-sm px-1 w-20"
					/>
					<select
						className="bg-gray-200/50 border border-gray-800 rounded-sm px-1"
						name="downloadSpeed"
						value={speedSelectValue}
						onChange={(e) => setSpeedSelectValue(e.target.value)}>
						<option value="Mbps">Mbps</option>
						<option value="Gbps">Gbps</option>
					</select>
				</div>
			</div>
			<p className="flex flex-wrap mx-2 my-1 flex-row items-center justify-center">
				{`It would take ${result()} to download ${fileSize}
                  ${fileSizeSelectValue === "GB" ? "Gigabyte" : "Megabyte"}
                  at ${
						speedSelectValue === "Mbps"
							? downloadSpeed / 8
							: (downloadSpeed * 1024) / 8
					} MB/s`}
			</p>
		</form>
	);
};

export default Converter;
