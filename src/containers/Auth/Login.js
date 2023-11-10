import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from 'mdb-react-ui-kit';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false, // Sử dụng để ẩn/hiện mật khẩu
        }
    }

    HandleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    HandleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword
        }));
    }

    handleLogin = () => {
        console.log('Username :' + this.state.username, 'password :' + this.state.password)
    }

    render() {
        return (
            <MDBContainer fluid className='background-radial-gradient  overflow-hidden'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' style={{ borderBottom: '240px solid transparent' }}>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', paddingTop: '55px' }}>
                            Sức khoẻ của bạn <br />
                            <span style={{ color: 'hsl(218, 81%, 75%)' }}>ưu tiên hàng đầu của chúng tôi</span>
                        </h1>

                        <p className='px-8' style={{ color: 'hsl(218, 81%, 85%)' }}>
                            DocConnect là một giải pháp vượt trội cho nhu cầu thông báo lịch hẹn và tương tác với bệnh nhân của bạn. Với hàng thập kỷ kinh nghiệm trong ngành, chúng tôi sở hữu sự chuyên nghiệp và khả năng vượt trội so với người khác. Cho dù bạn cần thông báo lịch hẹn tiêu chuẩn hay một giải pháp tùy chỉnh, hãy liên hệ với chúng tôi và để chúng tôi giúp bạn giảm tỷ lệ bỏ hẹn, đồng thời tăng doanh thu và sự hài lòng của bệnh nhân của bạn
                        </p>

                    </MDBCol>

                    <MDBCol md='6' className='position-relative' style={{ paddingTop: '65px' }}>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <MDBCard className='my-5 bg-glass' >
                            <MDBCardBody className='p-5' >

                                <MDBInput wrapperClass='mb-4' label='Username' id='form3' type='username'
                                    name='username' value={this.state.username} onChange={(event) => this.HandleOnchangeUsername(event)} />

                                <div className='custom-input-password'>
                                    <MDBInput
                                        wrapperClass='mb-0'
                                        label='Password'
                                        id='form4'
                                        type={this.state.showPassword ? 'text' : 'password'} // Ẩn/hiện mật khẩu dựa trên trạng thái
                                        name='password'
                                        value={this.state.password}
                                        onChange={(event) => this.HandleOnchangePassword(event)}
                                    />
                                    <FontAwesomeIcon
                                        icon={this.state.showPassword ? faEye : faEyeSlash}
                                        className={`eye-icon ${this.state.showPassword ? 'active' : ''}`}
                                        onClick={this.toggleShowPassword}
                                    />

                                </div>



                                <MDBBtn className='w-100 mb-4' size='md' onClick={() => { this.handleLogin() }} >Login</MDBBtn>

                                <div className="text-center">

                                    <p>or sign in with:</p>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer >
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
