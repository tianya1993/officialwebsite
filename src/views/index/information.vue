<template>
    <div class="container-b">
        <div class="information">
            <div class="index-title">
                <h3>家装资讯</h3>
                <p>了解装修知识 装修不留遗憾</p>
            </div>
            <div class="information2">
                <div class="information2-left">
                    <!-- <img src="../../assets/images/image01.png"> -->
                    <el-carousel :interval="5000" height="380px" arrow="always" indicator-position="none">
                        <el-carousel-item v-for="(v, k ) in infomationimglist " :key="k">
                            <!-- <h3 text="2xl" justify="center">{{ v.title }}</h3> -->
                            <img :src="getAssetsFile(v.img_url)" :alt="v.title">

                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="information2-right">

                    <ul>
                        <li v-for="(v, key) in infomationimglist2" :key="key">
                            <div class="information2-r-img">
                                <img :src="getAssetsFile(v.img_url)" alt="">
                            </div>
                            <div class="information2-r-list">

                                <h3>{{ v.title }}</h3>
                                <p class="information-time">{{ v.date }}</p>
                                <p class="information2-right-described">{{ v.information }}
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup name="information" lang="ts">
import { ref } from "vue"
import { getAssetsFile } from '@/utils/pub-use.ts'

let infomationimglist = ref([
    {
        "img_url": "image01.png",
        "title": "最好的装修",
        "index": 1
    },
    {
        "img_url": "banner07.jpg",
        "title": "最好的装修",
        "index": 2
    },
    {
        "img_url": "banner05.jpg",
        "title": "最好的装修",
        "index": 3
    },
    {
        "img_url": "banner04.png",
        "title": "最好的装修",
        "index": 4
    }
]
)


let infomationimglist2 = ref([
    {
        "img_url": "image01.png",
        "title": "如何识别木地板",
        "date": "2024-06-05",
        "information": "上面的例子用了很多属性来设置边框上面的例子用了很多属性来设置边框上面的例子用了很多属性来设置边框",
        "index": 1
    },
    {
        "img_url": "banner07.jpg",
        "title": "美缝选材与施工注意事项",
        "information": "上面的例子用了很多属性来设置边框上面的例子用了很多属性来设置边框上面的例子用了很多属性来设置边框",
        "date": "2024-06-05",
        "index": 2
    },
    {
        "img_url": "banner05.jpg",
        "title": "最好的装修",
        "date": "2024-06-05",
        "information": "上面的例子用了很多属性来设置边框上面的例子用了很多属性来设置边框上面的例子用了很多属性来设置边框",
        "index": 3
    },

]
)

</script>


<style scoped>
.information2 {
    width: 1280px;
    height: 400px;
    display: flex;

}

.information2-left {
    height: 380px;
    width: 40%;
    margin-right: 20px;
}

.information2-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .5s;
}

.information2-right {
    height: 380px;
    width: 60%;

    flex: 1;

}

.information2-right ul {
    display: flex;
    width: 100%;
    height: 380px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.information2-right ul li {
    display: flex;
    width: 100%;
    height: calc(380px/3);
    gap: 0, 10px;

}

.information2-r-img {

    width: 200px;
    flex-shrink: 0;


}

.information2-right ul li img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}


/* 
 overflow: hidden;确保超出容器的内容被裁剪
 white-space: nowrap; 确保文本在一行内显示
text-overflow: ellipsis; 超出部分显示省略号
  */


.information2-r-list {
    margin-left: 20px;
    margin-right: 20px;
    gap: 20px;
    overflow: hidden;
}

.information2-r-list h3 {
    font-size: 18px;
    font-weight: 600;
}

.information2-r-list p {
    line-height: 22px;
    font-size: 16px;
    color: #999;


}

.information2-r-list .information-time {
    font-weight: 400;
    color: #e60d0d;
}

.information2-right-described {
    text-indent: 2em;
}
</style>