const storageKey = 'nb-theme';

type Theme = 'light' | 'dark';

function getRoot(): HTMLElement {
	return document.documentElement;
}

export function getCurrentTheme(): Theme {
	const t = getRoot().dataset.theme;
	return t === 'light' ? 'light' : 'dark';
}

export function applyTheme(theme: Theme) {
	getRoot().dataset.theme = theme;
	try {
		localStorage.setItem(storageKey, theme);
	} catch {
		// ignore
	}
}

export function toggleTheme() {
	applyTheme(getCurrentTheme() === 'light' ? 'dark' : 'light');
}

export function bindThemeToggle(buttonId = 'themeToggle') {
	const btn = document.getElementById(buttonId);
	if (!btn) return;
	btn.addEventListener('click', toggleTheme);
}

// Auto-bind on page load
window.addEventListener('DOMContentLoaded', () => {
	bindThemeToggle();
	console.log('Auto-bind on page load');
});

