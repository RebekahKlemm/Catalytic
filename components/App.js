import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import MainViewContainer from './MainViewContainer';

export const App = function(props){
    return (
        <div id="main" className="container-fluid">
            <div>
                <Nav />
            </div>
            <div>
                <Sidebar />
                <MainViewContainer />
            </div>
        </div>
    );
}
