// src/index.js
import MyComponent from './components/MyComponent';

function render(component, container) {
    container.innerHTML = component;
}

// Menggunakan fungsi render untuk merender MyComponent
const container = document.getElementById('app');
render(MyComponent({ message: 'Hello from MutiaJS!' }), container);
