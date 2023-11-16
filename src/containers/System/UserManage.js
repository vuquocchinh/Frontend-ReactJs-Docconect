import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService } from '../../services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';




class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,

        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }
    getAllUsersFromReact = async () => {
        let res = await getAllUsers('ALL');
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users
            })
        }
    }
    handleaddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode !== 0) {
                alert(res.errMessage);
            }
            else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.userId);
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
            }
            else {
                alert(res.errMessage);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className='users-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toogleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                <div className="title text-center">Manage users</div>
                <div class="col-xs-7">
                    <a href="#" className="btn btn-primary px-4" onClick={() => this.handleaddNewUser()} style={{ marginLeft: '15px' }} ><i className="fa fa-plus" aria-hidden="true"></i>
                        <span>Add New User</span></a>
                    <a href="#" class="btn btn-primary px-4" style={{ marginLeft: '15px' }}><i className="fas fa-save"></i> <span>Export to Excel</span></a>
                </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr >
                            <th>Tên</th>
                            <th>Ảnh</th>
                            <th>Email</th>
                            <th>Địa chỉ</th>
                            <th>Quyền</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {item.fullName}
                                    </td>
                                    <td className="avatar">
                                        <img src={item.image} className="img-thumbnail" alt="avatar" />
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.address}
                                    </td>
                                    <td>
                                        {item.roleId === 0 ? 'Admin' : 'Bác sĩ  '}
                                    </td>
                                    <td>
                                        <button onClick={() => console.log('Settings clicked')} title="Settings" data-toggle="tooltip">
                                            <FontAwesomeIcon icon={faEdit} className="action-icon" />
                                        </button>
                                        <button onClick={() => this.handleDeleteUser(item)} title="Delete" >
                                            <FontAwesomeIcon icon={faTrash} className="action-icon" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
