import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Collapse} from 'react-bootstrap';

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProcessDetails: true
        };
    }

    editProcess(e) {
        e.preventDefault();
    }

    render() {
        if (this.props.process) {
            let process = this.props.process;

            return (
                <div>
                    <form id="process-form" className="form-group" onSubmit={e => this.editProcess(e)}>
                        <label htmlFor="process-title">Edit Process</label>
                        <input
                            id="process-title"
                            className="form-control"
                            defaultValue={process.displayName}
                            onClick={ () => this.setState({showProcessDetails: true})}
                        />
                        <Collapse in={this.state.showProcessDetails}>
                            <div>
                                <hr/>
                                <label htmlFor="process-description">Description</label>
                                <input
                                    id="process-description"
                                    className="form-control"
                                    defaultValue={process.description}
                                />
                                <hr/>
                                <label htmlFor="owner-creator">Owner/Creator</label>
                                <input
                                    readOnly
                                    id="owner-creator"
                                    className="form-control"
                                    defaultValue={process.owner}
                                />
                                <hr/>
                                <label htmlFor="category">Category</label>
                                <input
                                    readOnly
                                    id="category"
                                    className="form-control"
                                    defaultValue={process.category}
                                />
                                <hr/>

                                <div className="clearfix">
                                    <a className="floatLeft process-footer"
                                       onClick={ () => this.setState({showProcessDetails: false})}>^ collapse</a>
                                    <button id="process-submit-button" type="submit" form="process-form" value="Submit"
                                            className="btn btn-primary btn-block floatRight process-footer">
                                        <span className="glyphicon glyphicon-plus"></span> Save
                                    </button>
                                    <span className="floatRight process-footer">Delete Process</span>
                                </div>
                            </div>
                        </Collapse>
                    </form>
                    <hr className="thick-hr"/>
                </div>
            )
        }
        else return (<div>Loading...</div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        process: state.processes.allProcesses[0]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Process);
