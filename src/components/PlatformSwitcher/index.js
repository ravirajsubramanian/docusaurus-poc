import React from 'react';
import {useHistory, useLocation} from '@docusaurus/router';

const platforms = [
	{ label: 'Platform 1', path: '/docs/platform-1/platform-docs' },
	{ label: 'Platform 2', path: '/docs/platform-2/platform-docs' },
];

export default function PlatformSwitcher() {
	const history = useHistory();
	const location = useLocation();
	const current = platforms.find(p => location.pathname.startsWith(p.path.replace('/platform-docs', '')));

	const handleChange = (e) => {
		const selected = platforms.find(p => p.label === e.target.value);
		if (selected) {
			history.push(selected.path);
		}
	};

	return (
		<div style={{ margin: '1em 0' }}>
			<label htmlFor="platform-switcher" style={{ marginRight: 8 }}>Switch Platform:</label>
			<select id="platform-switcher" value={current ? current.label : ''} onChange={handleChange}>
				{platforms.map(p => (
					<option key={p.label} value={p.label}>{p.label}</option>
				))}
			</select>
		</div>
	);
}