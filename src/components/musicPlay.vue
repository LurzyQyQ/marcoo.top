<template>
    <div class="playbox">
        <div class="playbox-child">
            <audio class="audioEle" :src="state.audioUrl" controls autoplay></audio>
            <div class="child-img1v1Url">
                <img :src="state.picUrl" alt="">
            </div>
            <div class="child-prev">
                <svg t="1679314467999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="4629" width="32" height="32" @click="sPevr">
                    <path
                        d="M656 304c-9.344 0-18.064 2.688-25.44 7.296L416 445.392V352a48 48 0 1 0-96 0v320a48 48 0 1 0 96 0v-93.392l214.56 134.096A48 48 0 0 0 704 672V352a48 48 0 0 0-48-48z"
                        fill="#ffffff" p-id="4630"></path>
                </svg>
            </div>
            <div class="child-controls">
                <div class="controls-play" v-show="!state.isPlaying">
                    <svg t="1679314541653" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4911" width="32" height="32" @click="sPlay">
                        <path
                            d="M736 512c0-17.584-9.472-32.96-23.6-41.328L360.976 263.008l-0.384-0.224-0.176-0.112A48 48 0 0 0 288 304v416a48 48 0 0 0 72.416 41.328l0.176-0.112a2.4 2.4 0 0 1 0.384-0.224l351.424-207.664A47.952 47.952 0 0 0 736 512z"
                            fill="#ffffff" p-id="4912"></path>
                    </svg>
                </div>
                <div class="controls-stop" v-show="state.isPlaying">
                    <svg t="1679314418560" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4391" width="32" height="32" @click="sPause">
                        <path
                            d="M416 304a48 48 0 0 0-48 48v320a48 48 0 1 0 96 0V352a48 48 0 0 0-48-48z m192 0a48 48 0 0 0-48 48v320a48 48 0 1 0 96 0V352a48 48 0 0 0-48-48z"
                            fill="#ffffff" p-id="4392"></path>
                    </svg>
                </div>
            </div>
            <div class="child-next">
                <svg t="1679314350873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="11619" width="32" height="32" @click="sNext">
                    <path
                        d="M656 304a48 48 0 0 0-48 48v93.392l-214.56-134.096A48 48 0 0 0 320 352v320a48 48 0 0 0 73.44 40.704L608 578.608V672a48 48 0 1 0 96 0V352a48 48 0 0 0-48-48z"
                        fill="#ffffff" p-id="11620"></path>
                </svg>
            </div>
            <div class="child-progressbar">
                <div class="progressbar-sname">
                    {{ state.sName }}
                </div>
                <div class="prpgressnar"></div>
            </div>
            <div class="child-lists">
                <svg t="1679314844083" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="5193" width="22" height="22" @click="moreBtn">
                    <path
                        d="M976 848H336a48 48 0 1 0 0 96h640a48 48 0 1 0 0-96zM48 176h928a48 48 0 1 0 0-96H48a48 48 0 1 0 0 96z m928 416H48a48 48 0 1 0 0 96h928a48 48 0 1 0 0-96z m0-256H240a48 48 0 1 0 0 96h736a48 48 0 1 0 0-96z"
                        fill="#ffffff" p-id="5194"></path>
                </svg>
            </div>
            <div class="child-lists-mask" :style="state.isMore == true ? 'height: 400px;' : 'height: 0px;'">
                <div :style="state.sidIndex == index ? 'border-left: 2px solid #fffffF;' : 'border-left: 2px solid transparent;'"
                    class="mask-item" @click="clickTarget(index)" v-for="(item, index) in state.sLists" :key="index">
                    <!-- <div class="item-index">1</div> -->
                    <div class="item-sname">{{ item.name }}</div>
                    <div class="item-dururation">{{ msFilter(item.dt) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onBeforeUnmount, reactive, toRefs, ref } from 'vue'
import { playlistUs, playlistAll, songCheck, songUrl, songDetail } from '../api/getLikeSongs';
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

export default {
    setup() {
        const state = reactive({
            sidIndex: 0,        //歌曲下标
            sIdLists: [],       //歌曲id列表
            sLists: [],         //歌单列表和歌曲详情
            audioUrl: '',       //歌曲url
            isPlaying: false,   //歌曲是否在播放
            audioEle: null,     //audio元素
            prpgressnar: null,  //进度条元素
            musicDuration: 0,   //audio长度
            mucicCurrentTime: 0,//audio当前位置
            timer: null,        //定时器
            picUrl: "",         //歌曲图片
            sName: "",          //歌曲名字
            isMore: false,      //是否打开播放列表
            timeout: null       //节流
        })
        onMounted(() => {
            getUsLists()
            var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            var analyser = audioCtx.createAnalyser();

            // ...

        })
        onBeforeUnmount(() => {
            window.removeEventListener('resize', windowSize())
            clearInterval(state.timer)
        });
        const windowSize = () => {
            let windowSize = window.innerWidth;
            if (windowSize <= 960) {
                document.querySelector('.playbox').style.display = 'none'
            } else {
                document.querySelector('.playbox').style.display = 'block'
            }
        };
        const getUsLists = () => {
            playlistUs("欧美").then((res) => {
                // 从10个欧美歌单中随机一个歌单并且保存歌单id
                let rdUsNumber = Math.floor(Math.random() * 10);
                let rdSheetId = res.data.playlists[rdUsNumber].id
                // 传入这个歌单id去获取歌单列表
                playlistAll(rdSheetId).then((res) => {
                    state.sLists = res.data.songs
                    res.data.songs.map((item) => {
                        state.sIdLists.push(item.id)
                    })
                    // 调用检查歌曲版权方法
                    check()
                }).catch((err) => {

                });
            }).catch((err) => {

            });
        }
        const check = () => {
            // 检查歌曲是否有版权
            songCheck(state.sIdLists[state.sidIndex]).then((res) => {
                if (res.data.success == true) {
                    // 版权存在调用获取歌曲url方法
                    getSongUrl()
                } else {
                    state.sidIndex += 1
                    check()
                    open(res.data.message)
                }
            }).catch((err) => {

            });
        }
        const getSongUrl = () => {
            // 获取歌曲url
            songUrl(state.sIdLists[state.sidIndex]).then((res) => {
                // 有版权的音乐url
                state.audioUrl = res.data.data[0].url
                // audio元素
                state.audioEle = document.querySelector('.audioEle')
                // 进度条元素
                state.prpgressnar = document.querySelector('.prpgressnar')
            }).catch((err) => {

            });
            // 获取歌曲详情
            songDetail(state.sIdLists[state.sidIndex]).then((res) => {
                state.picUrl = res.data.songs[0].al.picUrl
                state.sName = res.data.songs[0].name
            }).catch((err) => {

            });
        }
        const sPevr = () => {
            // 歌曲结束sidIndex(歌曲下表自增)
            let timeout = null;
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => {
                state.sidIndex -= 1
            }, 500)
            console.log(state.sidIndex);
            if (state.sidIndex < 0) {
                state.sidIndex = state.sIdLists.length - 1
            }
            check()
            currentTime()
            // 图标切换成播放
            state.isPlaying = true
        }
        const sNext = () => {
            // 歌曲结束sidIndex(歌曲下表自增)
            let timeout = null;
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => {
                state.sidIndex += 1
            }, 500)
            if (state.sidIndex > state.sIdLists.length - 1) {
                state.sidIndex = 0
            }
            check()
            currentTime()
            // 图标切换成播放
            state.isPlaying = true
        }
        const sPlay = () => {
            state.isPlaying = true
            state.audioEle.play()
            currentTime()
        }
        const sPause = () => {
            state.isPlaying = false
            state.audioEle.pause()
            clearInterval(state.timer)
        }
        const currentTime = () => {
            // // 进度条归零
            // state.prpgressnar.style.width = 0
            // audio长度
            state.musicDuration = state.audioEle.duration
            state.timer = setInterval(() => {
                // audio当前位置
                state.mucicCurrentTime = state.audioEle.currentTime
                console.log(state.mucicCurrentTime, state.musicDuration);
                // 将音乐当前进度复制给进度条
                state.prpgressnar.style.width = `${(state.mucicCurrentTime / state.musicDuration) * 100}%`
                if (state.mucicCurrentTime >= state.musicDuration) {
                    // 图标切换成暂停
                    state.isPlaying = false
                    // 去除定时器
                    clearInterval(state.timer)
                    // 进度条归零
                    state.prpgressnar.style.width = 0
                    // 歌曲播放结束调用下一首继续播放
                    sNext()
                }
            }, 999)
        }
        const msFilter = (s) => {
            let ms = s / 1000
            let min = Math.floor(ms / 60 % 60) < 10 ? '0' + Math.floor(ms / 60 % 60) : Math.floor(ms / 60 % 60)
            let sec = Math.floor(ms % 60) < 10 ? '0' + Math.floor(ms % 60) : Math.floor(ms % 60)
            return `${min}:${sec}`
        }
        const moreBtn = () => {
            state.isMore = !state.isMore
            penetration()
        }
        const open = (message) => {
            ElMessage.error(message)
        }
        const clickTarget = (index) => {
            let timeout = null;
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => {
                currentTime()
                // 检查歌曲是否有版权
                songCheck(state.sIdLists[index]).then((res) => {
                    if (res.data.success == true) {
                        state.sidIndex = index
                        // 版权存在调用获取歌曲url方法
                        // 获取歌曲url
                        songUrl(state.sIdLists[index]).then((res) => {
                            // 有版权的音乐url
                            state.audioUrl = res.data.data[0].url
                            // audio元素
                            state.audioEle = document.querySelector('.audioEle')
                            // 进度条元素
                            state.prpgressnar = document.querySelector('.prpgressnar')
                        }).catch((err) => {

                        });
                        // 获取歌曲详情
                        songDetail(state.sIdLists[index]).then((res) => {
                            state.picUrl = res.data.songs[0].al.picUrl
                            state.sName = res.data.songs[0].name
                            state.isPlaying = true
                        }).catch((err) => {

                        });
                    } else {
                        open(res.data.message)
                    }
                }).catch((err) => {

                });
                timeout = null
            }, 500)

        }
        const penetration = () => {
            let timeout = null;
            if (state.isMore) {
                document.querySelector('body').style.overflow = 'hidden'
                document.querySelector('.playbox-child').style.borderTopLeftRadius = '0px'
                document.querySelector('.playbox-child').style.borderTopRightRadius = '0px'
            } else {
                timeout = setTimeout(() => {
                    document.querySelector('body').style.overflow = 'auto'
                    document.querySelector('.playbox-child').style.borderTopLeftRadius = '8px'
                    document.querySelector('.playbox-child').style.borderTopRightRadius = '8px'
                    clearTimeout(timeout)
                }, 200)
            }

        }
        return {
            state,
            sPlay,
            sPause,
            sNext,
            sPevr,
            msFilter,
            moreBtn,
            clickTarget,
        }
    }
}
</script>

<style lang="less">
/*==================== GOOGLE FONTS 字体====================*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

.playbox {
    width: 50%;
    position: fixed;
    position: -webkit-sticky;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    .playbox-child {
        width: 100%;
        background: #222222;
        display: flex;
        border-radius: 8px;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px 10px 10px 20px;
        position: relative;
        font-weight: 200;
        font-size: 14px;

        .child-lists-mask {
            height: 400px;
            width: 100%;
            background: #222222;
            position: absolute;
            left: 0;
            bottom: 60px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            overflow-y: auto;
            transition: all .2s linear;

            &::-webkit-scrollbar {
                display: none;
            }

            .active {}

            .mask-item {
                width: 90%;
                margin: 0 auto;
                border-bottom: 1px solid #222222;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                padding-left: 20px;
                margin-top: 20px;
                border-left: 2px solid transparent;

                .item-sname {
                    flex: .6;
                    width: 100%;
                    overflow: hidden;
                    /*超出部分隐藏*/
                    white-space: nowrap;
                    /*禁止换行*/
                    text-overflow: ellipsis;
                    /*省略号*/
                }

                .item-dururation {
                    width: 100%;
                    text-align: right;
                    flex: .4;
                }

            }
        }

        .audioEle {
            display: none;
            // position: absolute;
            // right: 0;
            // top: 40px
        }

        .child-img1v1Url {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            overflow: hidden;
            margin-right: 10px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .child-controls {
            display: flex;
        }

        .child-controls,
        .child-prev,
        .child-next {
            height: 32px;
            cursor: pointer;
        }

        .child-next {
            padding-right: 10px;
        }

        .child-lists {
            height: 22px;
            text-align: right;
            padding-right: 10px;
            padding-left: 20px;
            cursor: pointer;
        }

        .child-progressbar {
            // width: 35%;
            height: 4px;
            border-radius: 10px;
            background-color: #8d8d8d;
            // background-color: red;
            position: relative;
            flex: 1;

            .prpgressnar {
                width: 0px;
                height: 4px;
                background: #ffffff;
                position: absolute;
                border-radius: 10px;
                left: 0;
                top: 0;
                z-index: 1;
            }

            .progressbar-sname {
                width: 100%;
                color: #fffffF;
                text-align: center;
                position: absolute;
                bottom: 5px;
                left: 50%;
                transform: translateX(-50%);
                width: 60%;
                overflow: hidden;
                /*超出部分隐藏*/
                white-space: nowrap;
                /*禁止换行*/
                text-overflow: ellipsis;
                /*省略号*/
            }
        }
    }
}

/*==================== MEDIA QUERIES ====================*/
/* For smaller devices */
</style>