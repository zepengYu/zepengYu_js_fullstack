import React, { Component } from 'react'
import { getCarouse, getNewAlbum } from '@/api/recommend'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './recommend.styl'
import * as AlbumModel from '@/model/album'
import { CODE_SUCCESS } from '../../api/config'
import Scroll from '@/common/scroll/Scroll'
import Loading from '@/common/loading/Loading'
import { Route } from 'react-router-dom'
import Album from '@/containers/Album'

class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderList: [],
            newAlbums: [],
            refreshScroll: false,
            loading: true
        }
    }

    componentDidMount() {
        getCarouse().then(res => {
            console.log(res)
            if (res) {
                if (res.code === CODE_SUCCESS) {
                    this.setState({
                        sliderList: res.data.slider
                    }, () => {
                        if (!this.sliderSwiper) {
                            this.sliderSwipers = new Swiper('.slider-container', {
                                loop: true,
                                autoplay: 3000,
                                autoplayDisableOnInteraction: false,
                                pagination: '.swiper-pagination'
                            })
                        }
                    })
                }
            }
        })
        getNewAlbum().then(res => {
            if (res) {
                if (res.code === CODE_SUCCESS) {
                    let albumList = res.albumlib.data.list
                    // console.log(albumList)
                    albumList.sort((a, b) => {
                        return new Date(b.public_time).getTime() - new Date(a.public_time).getTime()
                    })
                    console.log(albumList)
                    this.setState({
                        newAlbums: albumList,
                        loading: false
                    }, () => {
                        this.setState({ refreshScroll: true })
                    })
                }
            }
        })
    }
    toLink(linkUrl) {
        // 定义时指向组件(this)，绑定时定义
        return () => {
            window.location.href = linkUrl
            // console.log(this);
        }
    }
    toAlbumDetail (url) {
        return () => {
            this.props.history.push({
                pathname: url
            })
        }
    }
    render() {
        const { match } = this.props
        const albums = this.state.newAlbums.map(item => {
            const album = AlbumModel.createAlbumByList(item)
            return (
                <div className="album-wrapper" key={album.mId} onClick={this.toAlbumDetail(`${match.url + '/' + album.mId}`)}>
                    <div className="left">
                        <img src={album.img} alt={album.name} width="100%" height="100%" />
                    </div>
                    <div className="right">
                        <div className="album-name">{album.name}</div>
                        <div className="singer-name">{album.singer}</div>
                        <div className="public-time">{album.publicTime}</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="music-recommend">
                <Scroll refresh={this.state.refreshScroll}>
                    <div>
                        <div className="slider-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.sliderList.map(slider => {
                                        return (
                                            <div className="swiper-slide" key={slider.id}>
                                                <a onClick={this.toLink(slider.linkUrl)} className="slider-nav">
                                                    <img src={slider.picUrl} alt="推荐" width="100%" height="100%" />
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        <div className="album-container">
                            <h1 className="title">最新专辑</h1>
                            <div className="album-list">
                                {albums}
                            </div>
                        </div>
                    </div>
                </Scroll>
                <Loading title="正在加载中..." show={this.state.loading}/>
                {/* 建立子路由 */}
                <Route path={`${match.url + '/:id'}`} component={Album}/>
            </div>
        )
    }
}

export default Recommend