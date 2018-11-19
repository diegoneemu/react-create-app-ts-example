import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Form from './Form';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form text="This is a test of react with typescript" age={99} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
