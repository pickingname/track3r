import { version } from './datastores.js';

var versionElement = document.getElementById("version");
// Set the element's text to "track3r v" followed by the version number
versionElement.innerHTML = `track3r <code>v${version}</code>`;