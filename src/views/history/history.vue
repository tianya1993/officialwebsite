<template>
    <div class="container">
        <div class="collocation_cs">
            <div class="collocation_cs_a wow  flip">
                <el-timeline style="max-width: 600px">
                    <el-timeline-item center timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item center timestamp="2018/4/2" placement="top">

                        <h4> Event start</h4>
                        <p>Tom committed 2018/4/3 20:46</p>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">

                        <h4> Event end</h4>
                        <p>Tom committed Event end2018/4/3 20:46</p>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script setup name="collocation" lang="ts">
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
.collocation_cs {
    text-align: center;
    position: relative;
    min-height: 800px;

}

.collocation_cs_a {
    position: absolute;
    left: 550px;
    top: 50px;

}

.collocation_cs_a h4 {
    font-size: 30px;
    font-weight: 700;
    color: peru;
}

.collocation_cs_a p {
    font-size: 14px;

    color: peru;
}
</style>