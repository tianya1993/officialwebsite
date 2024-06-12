<template>
    <div class="footerindexbg">
        <div class="footbg">

            <div class="footer-left">
                <!-- <div class="footer-left1"> 
                <ul>关于我们
                    <li>品牌简介</li>
                    <li>品牌文化</li>
                    <li>辉煌历程</li>
                    <li>荣誉资质</li>
                    <li>人才策略</li>

                </ul>

            </div>
            <div class="footer-left2">
                <ul> 产品中心
                    <li> 产品介绍 </li>
                    <li> 产品展示 </li>
                    <li>安装说明 </li>

                </ul>

            </div>
            <div class="footer-left3">
                <ul>新闻中心
                    <li>品牌咨询</li>
                    <li>热门观点</li>
                    <li>家园动态</li>
                    <li>精彩视频</li>

                </ul>

            </div> -->
                <ul>

                    <li>
                        <p>关于我们</p>
                        <a href="#">品牌简介</a>
                        <a href="#">品牌文化</a>
                        <a href="#">荣誉资质</a>
                        <a href="#">发展历程</a>
                        <a href="#">人才策略</a>

                    </li>
                    <li>
                        <p>产品中心</p>
                        <a href="#">产品选型</a>
                        <a href="#">安装说明</a>
                        <a href="#">产品展示 </a>
                        <a href="#">产品售后</a>
                        <a href="#">解决方案</a>

                    </li>
                    <li>
                        <p>新闻中心</p>
                        <a href="#">热门观点</a>
                        <a href="#">新闻咨询</a>
                        <a href="#">装修案例</a>
                        <a href="#">精彩视频</a>
                    </li>
                </ul>
            </div>


            <div class="footer-right">
                <img src="/src/assets/images/map.png">
            </div>
        </div>
    </div>

    <!--  更简单明了的实现
         <div class="footer">
        <div class="footer-list">
            <div class="footer-left">
                <ul>
                    <li v-for="(v,i) in footerlist" :key="i">
                        <p>{{v.title}}</p>
                        <a href="#" v-for="(item,i) in v.list" :key="i">{{item}}</a>
                    </li>
                </ul>
                
            </div>
            <div class="footer-map"></div>
        </div>
    </div>


     -->
</template>

<script setup name="Footer" lang="ts">


</script>

<style scoped>
.footerindexbg {
    background-color: #333;
    /*#333*/
    height: 260px;
    position: relative;
}

.footbg {
    position: absolute;
    left: 50%;
    margin-top: 20px;
    height: 240px;
    transform: translate(-50%, 0);
    width: 1280px;
    display: flex;
}

.footbg h3 {
    color: #FFF;



}


.footer-left {
    width: 60%;
    height: 230px;
    gap: 20px;
    display: flex;
    color: #FFF;


}

.footer-left ul {
    display: flex;
}

.footer-left ul li {
    display: inline;
    width: 220px;

}

.footer-left ul li p {
    margin: auto;
    font-size: 22px;
    font-weight: 600;
}

.footer-left ul li a {
    display: block;
    color: #FFF;
    line-height: 30px;
    font-size: 14px;
    margin-top: 5px;

}


/*
使用 div 分3块 3个ul  li
.footer-left1 {
    width: 240px;
    height: 220px;
    gap: 20px;



}

.footer-left2 {
    width: 240px;
    height: 220px;
    gap: 20px;

  

}

.footer-left3 {
    width: 240px;
    height: 220px;
    gap: 20px;

  

}
*/

.footer-right {
    width: 40%;
    height: 230px;
    margin-left: 20px;
    gap: 20px;


}

.footer-right img {

    width: 300px;
    height: 200px;
    object-fit: cover;
    float: right;

}

.footer-left1 ul,
.footer-left2 ul,
.footer-left3 ul {
    font-size: 20px;

}

.footer-left1 ul li,
.footer-left2 ul li,
.footer-left3 ul li {
    font-size: 15px;
    line-height: 25px;

}
</style>