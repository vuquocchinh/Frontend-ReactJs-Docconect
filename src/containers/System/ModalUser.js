import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullName: '',
            address: '',
        }
        this.listenToEmitter();
    }
    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                fullName: '',
                address: '',
            })
        })

    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toogleFromParent();
    }
    handleOnChange = (event, UserId) => {
        let copyState = { ...this.state };
        copyState[UserId] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidateInput = () => {

        let isValid = true;
        let arrInput = ['email', 'password', 'fullName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = async () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api
            this.props.createNewUser(this.state, 'create');
        }
    }


    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
            >
                <ModalHeader
                    toggle={() => { this.toggle() }}> Create a new user
                </ModalHeader>
                <ModalBody
                    isOpen={this.state.isOpenModalUser}
                >
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text'
                                onChange={(event) => this.handleOnChange(event, 'email')}
                                value={this.state.email} />

                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'
                                onChange={(event) => this.handleOnChange(event, 'password')}
                                value={this.state.password} />
                        </div>
                        <div className='input-container'>
                            <label>Full Name</label>
                            <input type='text'
                                onChange={(event) => this.handleOnChange(event, 'fullName')}
                                value={this.state.fullName} />
                        </div>
                        <div className='input-container'>
                            <label>Address</label>
                            <input type='text'
                                onChange={(event) => this.handleOnChange(event, 'address')}
                                value={this.state.address} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}
                    >
                        Add new user
                    </Button>{' '}
                    <Button color="secondary" lassName='px-8' onClick={() => { this.toggle() }}>
                        Cancle
                    </Button>
                </ModalFooter>
            </Modal>
        )


    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
