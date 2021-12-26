import React ,{Suspense,lazy} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Loading from "./components/Loading";
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home =lazy(() => {
    return import('pages/Home');});
const History =lazy(() => {
    return import('pages/History');});
const About =lazy(() => {
    return import('pages/About');});

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <main>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/history' component={History} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </Suspense>
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
