import React, { useState } from "react";
import { card, style, button } from "./classes";

const Converter = () => {
	const [downloadSpeed, setDownloadSpeed] = useState(10);
	const [speedSelectValue, setSpeedSelectValue] = useState("Mbps");
	const [fileSize, setFileSize] = useState(1);
	const [fileSizeSelectValue, setFileSizeSelectValue] = useState("GB");
	const [showResult, setShowResult] = useState(false);

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
		if (speedSelectValue === "Mbps" && fileSizeSelectValue === "MB") {
			let time = fileSize / (downloadSpeed / 8);
			return secondsToHms(time);
		}

		if (speedSelectValue === "Mbps" && fileSizeSelectValue === "GB") {
			let time = (fileSize * 1024) / (downloadSpeed / 8);
			return secondsToHms(time);
		}

		if (speedSelectValue === "Gbps" && fileSizeSelectValue === "GB") {
			let time = (fileSize * 1024) / ((downloadSpeed * 1024) / 8);
			console.log(time);
			return secondsToHms(time);
		}
	};

	const increaseSpeed = () => {
		setDownloadSpeed((oldSpeed) => {
			let newSpeed = parseInt(oldSpeed);
			return newSpeed + 1;
		});
	};

	const decreaseSpeed = () => {
		setDownloadSpeed((oldSpeed) => {
			let newSpeed = parseInt(oldSpeed);
			return newSpeed - 1;
		});
	};

	const increaseFileSize = () => {
		setFileSize((oldSize) => {
			let newSize = parseInt(oldSize);
			return newSize + 1;
		});
	};

	const decreaseFileSize = () => {
		setFileSize((oldSize) => {
			let newSize = parseInt(oldSize);
			return newSize - 1;
		});
	};

	return (
		<>
			<div className="max-w-lg mx-auto">
				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex flex-col gap-2">
					<div className="text-2xl font-bold my-4">
						<h1>Download time calculator</h1>
						<h2>How long will it take to download?</h2>
					</div>
					<div className={card}>
						<h2 className="text-xl font-semibold">
							How fast is your internet speed ?
						</h2>
						<div className="flex gap-2 items-center">
							<label htmlFor="downloadSpeed">
								Download Speed
							</label>
							<button
								className={button}
								type="button"
								onClick={increaseSpeed}>
								+
							</button>
							<input
								type="text"
								name="downloadSpeed"
								id="downloadSpeed"
								value={downloadSpeed}
								onChange={(e) =>
									setDownloadSpeed(e.target.value)
								}
								className={style}
							/>
							<button
								className={button}
								type="button"
								onClick={decreaseSpeed}>
								-
							</button>
							<select
								className={style}
								name="downloadSpeed"
								value={speedSelectValue}
								onChange={(e) =>
									setSpeedSelectValue(e.target.value)
								}>
								<option value="Mbps">Mbps</option>
								<option value="Gbps">Gbps</option>
							</select>
						</div>
					</div>
					{/* FileSize */}
					<div className={card}>
						<h2>
							What is the size of the file you want to download ?
						</h2>
						<div className="flex gap-2">
							<label htmlFor="fileSize">Download Size</label>
							<button
								className={button}
								type="button"
								onClick={increaseFileSize}>
								+
							</button>
							<input
								type="text"
								name="fileSize"
								id="fileSize"
								value={fileSize}
								onChange={(e) => setFileSize(e.target.value)}
								className={style}
							/>
							<button
								className={button}
								type="button"
								onClick={decreaseFileSize}>
								-
							</button>
							<select
								className={style}
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
					<div className="flex items-center justify-center my-4">
						<button
							type="button"
							className={button}
							onClick={() => setShowResult(true)}>
							Calculate
						</button>
					</div>
					{showResult && (
						<div className={card}>
							<h2>
								{`it would take ${result()} to download ${fileSize}
                  ${fileSizeSelectValue === "GB" ? "Gigabyte" : "Megabyte"}
                  at ${
						speedSelectValue === "Mbps"
							? downloadSpeed / 8
							: (downloadSpeed * 1024) / 8
					} MB/s`}
							</h2>
						</div>
					)}
				</form>
			</div>
		</>
	);
};

export default Converter;
