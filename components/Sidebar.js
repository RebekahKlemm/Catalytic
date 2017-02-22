import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateStepDetail} from '../reducers/step-reducer'


class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    //takes in a step and returns the stepNumber of the dependency
    getDependency(step){
        let dependencyNumber;
        //loop through all the dependencies of the step
        for(var i = 0; i< step.requiredPreviousSteps.length; i++){
            //loop through all of the steps and see if their stepName matches the dependencies
            for(var j = 0; j<this.props.allSteps.length; j++){
                if(step.requiredPreviousSteps[i] === this.props.allSteps[j].stepName){
                    return dependencyNumber = this.props.allSteps[j].stepNumber;
                }
            }
        }
    }

    //takes in a step and returns any assigned users as a comma-separated string
    getAssignedUsers(step){
        return step.role.users.join(" and ");
    }

    viewDetails(step){
        this.props.updateStepDetail(step);
    }

    render() {
        let steps = [...this.props.allSteps];
        return (
            <div className="col-md-3">
                <div className="turquoiseDiv">TRIGGERS</div>
                <div className="turquoiseDiv">STEPS</div>
                <ol>
                    { steps.map((step) => {
                            return (
                                <li key={step.stepNumber} onClick={e => this.viewDetails(step)}>
                                    <p>{step.displayName}</p>
                                    {/*if the step depends on a previous step...*/}
                                    {step.requiredPreviousSteps.length ? <p className="smallFont">depends on {this.getDependency(step)} </p> : null}
                                    {/*if the step has an assigned user...*/}
                                    {step.role.users.length ? <p className="smallFont"> assigned to {this.getAssignedUsers(step)}</p> : null}
                                    <hr/>
                                </li>
                            )
                        }
                    )}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allSteps: state.steps.allSteps,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateStepDetail: function(step){
            dispatch(updateStepDetail(step));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);




