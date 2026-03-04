// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
	// 1. Find all <pre> tags
	document.querySelectorAll("pre").forEach((codeBlock) => {
		// 2. Create the button element
		const button = document.createElement("button");
		button.className = "copy-button"; // This matches the CSS I gave you
		button.type = "button";
		const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
		const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
		button.innerHTML = `${copyIcon} <span>COPY</span>`;

		// 3. Add the button to the code block
		codeBlock.appendChild(button);

		// 4. Add the click logic
		button.addEventListener("click", () => {
			const code = codeBlock.querySelector("code");
			const text = code.innerText;

			navigator.clipboard.writeText(text).then(() => {
				button.innerHTML = `${checkIcon} <span>COPIED!</span>`;
				setTimeout(() => {
					button.innerHTML = `${copyIcon} <span>COPY</span>`;
				}, 2000);
			});
		});
	});
});
