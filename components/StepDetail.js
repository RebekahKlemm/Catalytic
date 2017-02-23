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
            let users = [...this.props.users];

            console.log('step', step);
            return (
                <div className="stepDetail">
                    <p>{step.displayName}</p>
                    <hr/>
                    <p>Step Name</p>
                    <p>Instructions</p>
                    <p>{step.description}</p>
                    <hr/>
                    <p>This will be shown to the user when they are assigned this step as a task</p>
                    <br></br>
                    <p>Configuration Settings</p>
                    <p>I have no idea what 'configuration settings' are, but I bet they're cool and they go here!</p>
                    <p>Assign User</p>
                    <div>
                    { users.map((user) => {
                        console.log('user', user)
                        return (
                            <div key={user.userID}>
                                {user.username}
                            </div>
                        )})}
                    </div>
                    <p>Maximum Duration</p>
                    <p>{step.maximumDuration}</p>
                    <p>Dependencies</p>
                    <div>
                        { step.requiredPreviousSteps.map((requiredStep) => {
                            return (
                                <div key={step.requiredPreviousSteps.indexOf(requiredStep)}>
                                    {requiredStep}
                                </div>
                            )})}
                    </div>
                    <p>Conditions</p>
                    <div>
                        { step.conditions.map((condition) => {
                            return (
                                <div key={step.conditions.indexOf(condition)}>
                                    {condition}
                                </div>
                            )})}
                    </div>
                    <p>Fields</p>
                    <div>
                        { step.fields.map((field) => {
                            return (
                                <div key={step.fields.indexOf(field)}>
                                    {field.displayName}
                                </div>
                            )})}
                    </div>
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
        users: state.users.allUsers
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StepDetail);
