import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Collapse} from 'react-bootstrap';


class StepDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAssignUser: false,
            showMaximumDuration: false,
            showDependencies: false,
            showConditions: false,
            showFields: false,
        };
    }

    render() {
        //ensure the store has time to load allSteps and stepDetail
        if (this.props.allSteps.length && this.props.stepDetail) {
            //subtract one from the stepDetail to account for zero-indexed array (step numbers start at one, while the array index starts at 0)
            let step = this.props.allSteps[this.props.stepDetail - 1];
            let users = [...this.props.users];
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
                    <p onClick={ () => this.setState({showAssignUser: !this.state.showAssignUser})}>Assign User</p>
                    <Collapse in={this.state.showAssignUser}>
                        <div>
                            { users.map((user) => {
                                return (
                                    <div key={user.userID}>
                                        {user.username}
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                    <p onClick={ () => this.setState({showMaximumDuration: !this.state.showMaximumDuration})}>Maximum
                        Duration</p>
                    <Collapse in={this.state.showMaximumDuration}>
                        <p>{step.maximumDuration}</p>
                    </Collapse>
                    <p onClick={ () => this.setState({showDependencies: !this.state.showDependencies})}>Dependencies</p>
                    <Collapse in={this.state.showDependencies}>
                        <div>
                            { step.requiredPreviousSteps.map((requiredStep) => {
                                return (
                                    <div key={step.requiredPreviousSteps.indexOf(requiredStep)}>
                                        {requiredStep}
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                    <p onClick={ () => this.setState({showConditions: !this.state.showConditions})}>Conditions</p>
                    <Collapse in={this.state.showConditions}>
                        <div>
                            { step.conditions.map((condition) => {
                                return (
                                    <div key={step.conditions.indexOf(condition)}>
                                        {condition}
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                    <p onClick={ () => this.setState({showFields: !this.state.showFields})}>Fields</p>
                    <Collapse in={this.state.showFields}>
                        <div>
                            { step.fields.map((field) => {
                                return (
                                    <div key={step.fields.indexOf(field)}>
                                        {field.displayName}
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
            )
        }
        else return (<div>Loading...</div>)
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
