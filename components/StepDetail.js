import React, {Component} from 'react';
import { connect } from 'react-redux';

class StepDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //ensure the store has time to load allSteps and stepDetail
        if(this.props.allSteps.length && this.props.stepDetail) {
            //subtract one from the stepDetail to account for zero-indexed array (step numbers start at one, while the array index starts at 0)
            let step = this.props.allSteps[this.props.stepDetail-1];
            return (
                <div className="stepDetail">
                    Here is Step Detail {step.stepNumber}
                </div>
            )
        }
        else return(<div>Loading...</div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(StepDetail);
