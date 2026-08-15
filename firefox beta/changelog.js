function handleChangelog() {
	let changelogHeader = document.querySelector('#header');
	let changelogFirstInstallTip = document.querySelector('#fit');
	let changelogVersion = document.querySelector('#version');
	let version = browser.runtime.getManifest().version;
	if (!changelogHeader) return;
	if (window.location.href.includes('#install')) {
		changelogHeader.innerText = "CustomTube-Forever was successfully installed!";
	}
	else if (window.location.href.includes('#check')) {
		changelogHeader.innerText = `CustomTube-Forever is currently on version ${version}.`;
	}	else {
		changelogVersion.innerText = `CustomTube-Forever has updated to version ${version}!`;
	}
}

handleChangelog();