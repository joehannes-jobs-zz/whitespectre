import 'normalize-css';

import './styles/application.css';
import './styles/helpers.css';

import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
