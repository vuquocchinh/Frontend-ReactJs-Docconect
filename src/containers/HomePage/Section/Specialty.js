import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dataSpecialty: []
    //     }
    // }

    // async componentDidMount() {
    //     let res = await getAllSpecialty();
    //     if (res && res.errCode === 0) {
    //         this.setState({
    //             dataSpecialty: res.data ? res.data : []
    //         })
    //     }
    // }

    // handleViewDetailSpecialty = (item) => {
    //     if (this.props.history) {
    //         this.props.history.push(`/detail-specialty/${item.id}`);
    //     }
    // }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>
                            Chuyên khoa phổ biến
                        </span>
                        <button className='btn-section'>
                            Xem thêm
                        </button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 5</div>
                            </div><div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 6</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 7</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 8</div>
                            </div>

                        </Slider>
                    </div>


                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
