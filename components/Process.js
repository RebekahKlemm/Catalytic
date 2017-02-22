import React, {Component} from 'react';
import { connect } from 'react-redux';

class Process extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>Process Goes Here</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Process);
