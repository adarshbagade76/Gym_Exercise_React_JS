import App from './App';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const root=ReactDom.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

)
