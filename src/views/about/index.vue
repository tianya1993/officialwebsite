<template>
    <div class="about">
        <div class="about-bg">
            <div class="title-index wow slideInLeft">
                <h3>诚信经营 值得信赖</h3>
                <p>荣获政府单位、行业协会、官方媒体的多重认可</p>
            </div>
            <div class="about-img-list title-index ">
                <ul class="wow rotateIn">
                    <li class="img01">
                        <p>
                            <span>中国家庭装修领军水平</span>
                        </p>

                    </li>
                    <li class="img02">


                        <p> <span>装修工艺最标准的优秀装修公司
                            </span></p>

                    </li>
                    <li class="img03">


                        <p><span>水电施工材料以及工艺保修50年</span></p>

                    </li>
                    <li class="img04">
                        <p>
                            <span>信息技术是最好的基础 </span>
                        </p>

                    </li>
                    <li class="img05">
                        <p>
                            <span>信息技术是最好的基础 </span>
                        </p>


                    </li>
                    <li class="img06">
                        <p>
                            <span>信息技术是最好的基础 </span>
                        </p>

                    </li>
                    <li class="img07">
                        <p>
                            <span>信息技术是最好的基础 </span>
                        </p>

                    </li>
                </ul>


            </div>

            <div class="title-index">
                <h3>金钻工程 领跑行业</h3>
                <p>匠心沉淀 手工活标准化</p>
                <!-- <ul>
                    <li @click="n = 1">第一个图片</li>
                    <li @click="n = 2">第二个图片</li>
                    <li @click="n = 3">第三个图片</li>
                    <li @click="n = 4">第四个图片</li>
                    <li @click="n = 5">第⑤个图片</li>
                    <li @click="n = 6">第6个图片</li>
                </ul>
                <div class="title-img">
                    <p v-show="n == 1"> 第一个图片</p>
                    <p v-show="n == 2">第二个图片</p>
                    <p v-show="n == 3">第三个图片</p>
                    <p v-show="n == 4">第四个图片</p>
                    <p v-show="n == 5">555个图片</p>
                    <p v-show="n == 6">第666个图片</p>
                </div> -->
                <div class="bannertab">
                    <ul>
                        <li v-for="(v, k) in mglist" :key="k" :class="n == k ? 'selected' : ''" @click="action(k)"> {{
                            v.title }}
                        </li>

                    </ul>
                    <div class="bannertab-img">
                        <!-- /src/assets/images/${m.url_img}`-->
                        <img v-for="(m, key) in mglist" :key="key" :src="getAssetsFile(m.url_img)" v-show="n == key">

                    </div>
                </div>


            </div>



            <div class=" title-index">
                <h3>招盟加商 合作共赢</h3>
                <p>29个城市直营，服务10W+客户</p>
                <div class="join-img">
                    <ul>
                        <li>
                            <img :src="getAssetsFile('house1.png')">
                            <span class="bgbit">加盟优势</span>
                        </li>
                        <li>
                            <img :src="getAssetsFile('house2.png')">
                            <span class="bgbit">标准管理</span>
                        </li>
                        <li>
                            <img :src="getAssetsFile('house3.png')">
                            <span class="bgbit">材料统一</span>
                        </li>
                        <li>
                            <img :src="getAssetsFile('house4.png')">
                            <span class="bgbit">施工规范</span>
                        </li>
                    </ul>

                </div>
            </div>



        </div>





    </div>





</template>

<script setup name="about" lang="ts">
import WOW from 'wow.js'
import { onMounted } from "vue";


import { ref } from "vue"

import { getAssetsFile } from '@/utils/pub-use.ts'


const n = ref(1)
const mglist = ref([
    {
        "url_img": "house1.png",
        "title": "中装协首批“新国标”实施单位"
    }, {
        "url_img": "house2.png",
        "title": "中装协首批“新国标”实施单位"
    }, {
        "url_img": "house3.png",
        "title": "中装协首批“新国标”实施单位"
    }, {
        "url_img": "house4.png",
        "title": "中装协首批“新国标”实施单位"
    }, {
        "url_img": "house1.png",
        "title": "中装协首批“新国标”实施单位"
    }, {
        "url_img": "house5.png",
        "title": "中装协首批“新国标”实施单位"
    }
])
onMounted(() => {

    var wow = new WOW({
        boxClass: 'wow', // 需要执行动画的元素的 class; 【String类型】默认值：‘wow'；
        animateClass: 'animated', // animation.css 动画的 class; 【String类型】默认 值：‘animated'；
        offset: 0, // 距离可视区域多少开始执行动画；【整数Number类型】默认值：0；
        mobile: true, // 是否在移动设备上执行动画；【Boolean类型】默认值: true;
        live: true // 异步加载的内容是否有效；【Boolean类型】默认值: true;
    });
    wow.init();
})

function action(i: number) {
    n.value = i
}

</script>

<style scoped>
.about {
    display: flex;
    margin-bottom: 40px;
    margin-top: 40px;

    justify-content: center;
    align-items: center;
    max-width: 1920px;
    text-align: center;


}

.about-bg {

    margin-top: 10px;
    width: 1280px;
    height: 100%;
    position: relative;
    justify-content: center;



}


.title-index {
    margin-top: 40px;
    gap: 20px;
    justify-content: center;
    text-align: center;



}

.title-index p {
    font-size: 40px;
    transition: all 1s;


}

.title-index h3 {
    font-size: 42px;
    font-weight: 700;
    line-height: 25px;

}

.title-index p {
    font-size: 18px;
    line-height: 50px;

}

.about-img-list {
    width: 100%;
    height: 480px;

    position: relative;


}

.about-img-list ul li {
    position: relative;
    display: inline-block;
}


/*background-color: #387197; */
.about-img-list ul li span {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    left: 20px;
    height: 50px;
}




.about-img-list ul li {
    position: absolute;
    width: 220px;
    height: 220px;

    transform: rotate(45deg)
}

.about-img-list .img01 {
    top: 45px;
    left: 55px;
    background-image: url("../../assets/images/image01.png");
    object-fit: cover;

}

.about-img-list .img02 {
    top: 45px;
    left: 370px;
    background-image: url("../../assets/images/banner02.png");
    object-fit: cover;

}

.about-img-list .img03 {
    top: 45px;
    left: 685px;
    background-image: url("../../assets/images/banner01.png");
    object-fit: cover;

}

.about-img-list .img04 {
    top: 45px;
    left: 1005px;
    background-image: url("../../assets/images/banner08.jpg");
    object-fit: cover;

}

.about-img-list .img05 {
    top: 210px;
    left: 212px;
    background-image: url("../../assets/images/banner07.jpg");

}

.about-img-list .img06 {
    top: 210px;
    left: 527px;
    background-image: url("../../assets/images/banner04.png");

}


.about-img-list .img07 {
    top: 210px;
    left: 842px;
    background-image: url("../../assets/images/banner05.jpg");

}


.about-img-list ul li p {
    position: relative;


}

.about-img-list ul li p span {
    position: absolute;
    transform: rotate(-45deg);
    left: 20px;
    top: 90px;
    color: #FFF;
    font-size: 20px;


}

.about-img-list ul li p {
    opacity: 0;
    background-color: #387197;
    width: 220px;
    height: 220px;
}

.about-img-list ul li:hover p {
    opacity: 1;
    transition: all 1s;

}

.join-img {
    width: 800px;

    justify-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    margin-left: auto;
    margin-right: auto;



}

.join-img ul {
    display: flex;
    gap: 10px;


}

.join-img ul li {
    position: relative;
}

.join-img ul li img {

    height: 400px;
    width: 180px;
    object-fit: cover;

}

.join-img ul li span {
    background: url("/src/assets/images/home_bg01.png") no-repeat;
    position: absolute;
    top: -100px;
    left: 40px;
    width: 106px;
    height: 120px;
    font-size: 18px;
    color: #FFF;
    align-items: center;
    padding-top: 40px;
}

.bgbit {
    width: 100px;
    height: 100px;

}

.title-img {
    color: black;
}

.bannertab ul {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 230px);
    grid-template-rows: repeat(3, 120px);
    justify-content: space-between;

    /* align-items: center; */

    gap: 10px;
    counter-reset: count;
}

.bannertab ul li {
    background-color: #f2f2f2;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-left: 40px;
    text-align: left;
    position: relative;
}

.bannertab ul li::before {
    counter-increment: count;
    content: counter(count);
    border: 1px solid #333;
    border-radius: 50%;
    font-size: 15px;
    font-weight: 600;
    padding: 6px 10px;
    position: absolute;
    left: 10px;
    top: 41px;



}




.title-index {
    position: relative;
}

.bannertab-img {
    position: absolute;
    left: 245px;
    top: 75px;
    width: 790px;
    height: 380px;

}

.bannertab-img img {
    width: 790px;
    height: 380px;
    object-fit: cover;

}


.bannertab .selected {
    background: #387197;
    color: #fff;
}

.bannertab .selected::before {
    border: 1px solid #FFF;

}
</style>