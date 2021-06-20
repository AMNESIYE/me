import './App.scss';
import {Header} from './components/core/header/header';
import {Footer} from './components/core/footer/footer';
import {
    BrowserRouter as Router
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="body">
                <Header/>
                <p>
                    Mon contenu
                </p>
                <Footer/>

            </div>
        </Router>
    );
}

export default App;
