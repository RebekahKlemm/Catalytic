import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import StepDetail from './StepDetail';

export const App = function(props){
    return (
        <div id="main" className="container-fluid">
            <div>
                <Nav />
            </div>
            <div>
                <Sidebar />
                <StepDetail />
            </div>
        </div>
    );
}
