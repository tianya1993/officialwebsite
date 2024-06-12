<template>
    <div class="container_bg">
        <div class="renovation">
            <div class="index-title">
                <h3>实景案例</h3>
                <p>看看邻居家怎么装</p>
                <!-- 9宫格的大框 -->
            </div>
            <div class="renovation-list">
                <ul>
                    <li v-for="(v, key) in renovationlist" :key="key">
                        <div class="renovation-card">
                            <a href="#" target="_blank">
                                <div class="renovation-img">
                                    <!-- <img src="@/assets/images/image01.png" alt=""> -->
                                    <img :src="getAssetsFile(v.img_url)" alt="">
                                </div>
                                <div class="renovation-box">
                                    <h3>{{ v.title }}</h3>
                                    <div class="renovation-box-info">
                                        <p>{{ v.title }} </p>
                                        <span><i class="iconfont icon-aixin"></i>
                                            <CountTo :start-val="0" :end-val="v.num" />人查看
                                        </span>
                                    </div>
                                </div>
                                <div class="renovation-hover">
                                    <span>查看详情</span>
                                </div>
                            </a>
                        </div>

                    </li>


                </ul>



            </div>



        </div>

    </div>

</template>

<script setup name="renovation" lang="ts">
import { ref } from "vue"
import { CountTo } from "vue3-count-to"
import { getAssetsFile } from '@/utils/pub-use.ts'

let renovationlist = ref([{
    "img_url": "image01.png",
    "title": "现代雅苑151平现代风精装",
    "num": 900
}, {
    "img_url": "banner01.png",
    "title": "现代雅苑151平现代风精装",
    "num": 800
},
{
    "img_url": "banner05.png",
    "title": "现代雅苑151平现代风精装",
    "num": 300
}, {
    "img_url": "banner07.jpg",
    "title": "现代雅苑151平现代风精装",
    "num": 600
},
{
    "img_url": "banner08.jpg",
    "title": "现代雅苑151平现代风精装",
    "num": 1200
},
{
    "img_url": "banner04.jpg",
    "title": "现代雅苑151平现代风精装",
    "num": 300
}, {
    "img_url": "banner05.jpg",
    "title": "现代雅苑151平现代风精装",
    "num": 800
},
{
    "img_url": "house1.png",
    "title": "现代雅苑151平现代风精装",
    "num": 1200
},
{
    "img_url": "house2.png",
    "title": "现代雅苑151平现代风精装",
    "num": 300
},


])

</script>


<style scoped></style>