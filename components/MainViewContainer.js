import React, {Component} from 'react';
import { connect } from 'react-redux';
import StepDetail from './StepDetail';
import Process from './Process';


class MainViewContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
       <div className="col-md-9 mainViewContainer">
           <div>
               <Process />
           </div>
           <div>
               <StepDetail />
           </div>
       </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allSteps: state.steps.allSteps,
        stepDetail: state.steps.stepDetail,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer);
