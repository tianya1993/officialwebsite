<template>
    <div class="container">
        <div class="case-div">
            <div class="gallery wow fadeInRightBig">
                <img src="/src/assets/images/house1.png" alt="a house on a mountain">
                <img src="/src/assets/images/house2.png" alt="sime pink flowers">
                <img src="/src/assets/images/house3.png" alt="big rocks with some trees">
                <img src="/src/assets/images/house4.png" alt="a waterfall, a lot of tree and a great view from the sky">
                <img src="/src/assets/images/house5.png" alt="a cool landscape">
                <img src="/src/assets/images/banner08.jpg" alt="inside a town between two big buildings">
                <img src="/src/assets/images/banner07.jpg" alt="a great view of the sea above the mountain">
            </div>

        </div>



    </div>

</template>

<script setup name="kitchen" lang="ts">
import WOW from 'wow.js'
import { onMounted } from "vue";


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

</script>

<style scoped>
.case-div {

    width: 1280px;
    min-height: 1000px;
    justify-content: center;
    position: relative;
}

.gallery {
    position: absolute;
    left: 233px;
    top: 50px;
    padding: auto;
    --s: 260px;
    /* control the size */
    --g: 15px;
    /* control the gap */
    display: grid;
    margin: calc(var(--s) + var(--g));
}

.gallery>img {
    grid-area: 1/1;
    width: var(--s);
    aspect-ratio: 0.866;
    object-fit: cover;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0);
    transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1));
    cursor: pointer;
    filter: grayscale(80%);
    transition: .2s linear;
}

.gallery>img:hover {
    filter: grayscale(0);
    z-index: 1;
    --_t: 1.2;
}

.gallery>img:nth-child(1) {
    --_x: calc(-100% - var(--g))
}

.gallery>img:nth-child(7) {
    --_x: calc(100% + var(--g))
}

.gallery>img:nth-child(3),
.gallery>img:nth-child(5) {
    --_y: calc(-75% - .87*var(--g))
}

.gallery>img:nth-child(4),
.gallery>img:nth-child(6) {
    --_y: calc(75% + .87*var(--g))
}

.gallery>img:nth-child(3),
.gallery>img:nth-child(4) {
    --_x: calc(-50% - .5*var(--g))
}

.gallery>img:nth-child(5),
.gallery>img:nth-child(6) {
    --_x: calc(50% + .5*var(--g))
}


body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-content: center;
    background: #aabbfb;
}
</style>