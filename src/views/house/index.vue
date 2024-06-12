<template>
    <Banner></Banner>
    <div class="container">

        <div class="house_index1 ">
            <div class="title-index">
                <h3 class="wow fadeInDown">全屋设计案例，给您更多参考案例</h3>
                <p><span class="wow  bounceInUp">
                        多元家居风格，给您更多选择！
                    </span></p>
            </div>
            <div class="case_tab wow rotateIn">
                <el-tabs v-model="activeName" class="demo-tabs">
                    <el-tab-pane v-for="(v, i) in case_tab " :key="i" :label="v.label" :name="v.id">
                        <ul>
                            <li v-for="(item, key) in v.tabs" :key="key">
                                <img :src="getAssetsFile(item.img_url)">


                                <p>{{ item.infomation }}</p>
                            </li>

                        </ul>

                    </el-tab-pane>


                </el-tabs>


            </div>

        </div>
        <div class="house_index2">
            <div class="title-index">
                <h3 class="wow fadeInDown">全屋设计案例，给你更多建议</h3>
                <p><span class="wow  bounceInUp">
                        多元家居风格，给您更多选择！
                    </span></p>

            </div>

            <div class="house_index_grid">
                <ul>
                    <li class="li1  wow fadeInRightBig">
                        <img src="/src/assets/images/house1.png">

                    </li>
                    <li class="li2">
                        <img src="/src/assets/images/house2.png">
                    </li>
                    <li class="li3">
                        <img src="/src/assets/images/house3.png">
                    </li>
                    <li class="li4">
                        <img src="/src/assets/images/house4.png">
                    </li>
                    <li class="li5">
                        <img src="/src/assets/images/house5.png">
                    </li>
                </ul>


            </div>
        </div>
        <div class="house_banner">
            <div class="title-index">
                <h3 class="wow fadeInDown">全屋设计案例，给你更多建议</h3>
                <p><span class="wow  bounceInUp">
                        多元家居风格，给您更多选择！
                    </span></p>

                <div class="house_banner_img wow rotateIn animate__bounceInLeft ">
                    <el-carousel height="280px" indicator-position="none" arrow="always" :autoplay="false">
                        <el-carousel-item v-for=" item in tab_img" :key="item.id">
                            <ul>
                                <li v-for="(v, k) in item.imgs" :key="k">
                                    <img :src="getAssetsFile(v.img_url)" alt="">

                                </li>
                            </ul>
                        </el-carousel-item>
                    </el-carousel>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup name="house" lang="ts">
import Banner from "../index/banner.vue"
import { ref } from 'vue'
import WOW from 'wow.js'
import { onMounted } from "vue";
import { getAssetsFile } from '@/utils/pub-use.ts'


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

let activeName = ref(1)

let case_tab = ref([
    {
        "id": 1,
        "label": "两室一厅",
        "tabs": [
            {
                "img_url": "1.png",
                "infomation": "精品装修 全屋定制"
            },
            // src/assets/images/house4.png
            {
                "img_url": "2.png",
                "infomation": "中央空调加长出风口"
            },
            {
                "img_url": "3.png",
                "infomation": "全部通铺 一体化"
            }, {
                "img_url": "4.png",
                "infomation": "超舒适地暖 冬天的福音"
            },

        ]
    },
    {
        "id": 2,
        "label": "三室一厅",
        "tabs": [
            {
                "img_url": "4.png",
                "infomation": "精品装修 全屋定制"
            },
            // src/assets/images/house4.png
            {
                "img_url": "2.png",
                "infomation": "中央空调加长出风口"
            },
            {
                "img_url": "3.png",
                "infomation": "全部通铺 一体化"
            }, {
                "img_url": "3.png",
                "infomation": "超舒适地暖 冬天的福音"
            },

        ]
    },
    {
        "id": 3,
        "label": "四室三厅",
        "tabs": [
            {
                "img_url": "2.png",
                "infomation": "精品装修 全屋定制"
            },
            // src/assets/images/house4.png
            {
                "img_url": "1.png",
                "infomation": "中央空调加长出风口"
            },
            {
                "img_url": "3.png",
                "infomation": "全部通铺 一体化"
            }, {
                "img_url": "4.png",
                "infomation": "超舒适地暖 冬天的福音"
            },

        ]
    },
    {
        "id": 4,
        "label": "别墅排屋",
        "tabs": [
            {
                "img_url": "banner05.png",
                "infomation": "精品装修 全屋定制"
            },
            // src/assets/images/house4.png
            {
                "img_url": "banner04.jpg",
                "infomation": "中央空调加长出风口"
            },
            {
                "img_url": "banner07.jpg",
                "infomation": "全部通铺 一体化"
            }, {
                "img_url": "banner08.jpg",
                "infomation": "超舒适地暖 冬天的福音"
            },

        ]
    }

])


const tab_img = ref([
    {
        "id": 1,
        "imgs": [
            {
                "img_url": "banner04.png",
                "img_info": "装修图1"
            }, {
                "img_url": "banner03.png",
                "img_info": "装修图1"
            }, {
                "img_url": "banner07.jpg",
                "img_info": "装修图1"
            }, {
                "img_url": "3.png",
                "img_info": "装修图1"
            },
        ]

    },
    {
        "id": 2,
        "imgs": [
            {
                "img_url": "banner07.jpg",
                "img_info": "装修图1"
            }, {
                "img_url": "1.png",
                "img_info": "装修图1"
            }, {
                "img_url": "banner03.jpg",
                "img_info": "装修图1"
            }, {
                "img_url": "4.png",
                "img_info": "装修图1"
            },
        ]

    }, {
        "id": 3,
        "imgs": [
            {
                "img_url": "4.png",
                "img_info": "装修图1"
            }, {
                "img_url": "banner05.jpg",
                "img_info": "装修图1"
            }, {
                "img_url": "banner08.jpg",
                "img_info": "装修图1"
            }, {
                "img_url": "1.png",
                "img_info": "装修图1"
            },
        ]

    }, {
        "id": 4,
        "imgs": [
            {
                "img_url": "banner04.png",
                "img_info": "装修图1"
            }, {
                "img_url": "banner03.png",
                "img_info": "装修图1"
            }, {
                "img_url": "banner05.png",
                "img_info": "装修图1"
            }, {
                "img_url": "1.png",
                "img_info": "装修图1"
            },
        ]

    },


])


</script>


<style scoped>
.container {
    text-align: center;
}

.title-index {
    margin-top: 40px;
    width: 100%;
    margin-bottom: 20px;

}

.title-index p span {
    color: #999;
    font-size: 15px;


}



.case_tab ul {
    display: flex;
    justify-content: space-between;

}

.case_tab ul li {
    padding: 5px;

}

.case_tab ul li img {


    width: 330px;
    height: 230px;
    object-fit: cover;
    /* width: calc(1280/4);*/

}

.house_index_grid ul {
    display: grid;

    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    grid-template-areas:
        'li1  li1 li1 li1 li1 li1 li3  li3 li3 li4 li4 li4'
        'li1  li1 li1 li1 li1 li1 li3  li3 li3 li4 li4 li4'
        'li1  li1 li1 li1 li1 li1 li2  li2 li2 li4 li4 li4'
        'li1  li1 li1 li1 li1 li1 li2  li2 li2 li4 li4 li4'
        'li1  li1 li1 li1 li1 li1 li2  li2 li2 li5 li5 li5'
        'li1  li1 li1 li1 li1 li1 li2  li2 li2 li5 li5 li5';
}



.li1 {
    grid-area: li1;
}

.li2 {
    grid-area: li2;
}

.li3 {
    grid-area: li3;
}

.li4 {
    grid-area: li4;
}

.li5 {
    grid-area: li5;
}

.house_index_grid ul li img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.house_banner_img ul {
    display: flex;
}

.house_banner_img ul li img {
    width: 310px;
    height: 280px;
    object-fit: cover;
    margin: 5px;
}
</style>