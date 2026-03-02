// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
	// 1. Find all <pre> tags
	document.querySelectorAll("pre").forEach((codeBlock) => {
		// 2. Create the button element
		const button = document.createElement("button");
		button.className = "copy-button"; // This matches the CSS I gave you
		button.type = "button";
		button.innerText = "COPY";

		// 3. Add the button to the code block
		codeBlock.appendChild(button);

		// 4. Add the click logic
		button.addEventListener("click", () => {
			const code = codeBlock.querySelector("code");
			const text = code.innerText;

			navigator.clipboard.writeText(text).then(() => {
				button.innerText = "COPIED!";
				setTimeout(() => {
					button.innerText = "COPY";
				}, 2000);
			});
		});
	});
});
