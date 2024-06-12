<template>
    <div class="container-bg">
        <div class="advantage">
            <div class="index-title">
                <h3>品牌优势</h3>
                <p>
                    值得信赖的实力派
                </p>
            </div>
            <div class="advantage-item1">
                <ul>
                    <li v-for="(v, index) in advantage" :key=index>
                        <span class="advantage-num">
                            <count-to :startVal="0" :endVal=v.number :duration="3000"></count-to>
                        </span>
                        <span>{{ v.desc }}</span>
                    </li>

                </ul>

            </div>

            <div class="advantage-item2">
                <ul>

                    <li v-for="( v, i) in advantageitem2" :key="i">
                        <i class="iconfont" :class="v.icon"></i>
                        <h4>{{ v.title }}</h4>
                        <p>{{ v.describe }}</p>
                    </li>

                </ul>
            </div>


        </div>
    </div>
</template>

<script setup name="advantage" lang="ts">
import { CountTo } from 'vue3-count-to';

import { ref } from "vue"

let advantage = ref([
    {
        "number": 10,
        "desc": "万+精英家庭选择"
    }, {
        "number": 29,
        "desc": "个城市直营分公司"
    }, {
        "number": 200,
        "desc": "余家直营店面"
    }, {
        "number": 20000,
        "desc": "人专家团队"
    }
]
)


let advantageitem2 = ref([
    {
        "title": "高效品质",
        "icon": "icon-a-ziyuan22",
        "describe": "10年以上工龄工人，统一培训考核，统一管理，统一调配。高品质工人为您带来高品质装修。"

    }, {
        "title": "验收严格",
        "icon": "icon-yanshou",
        "describe": "213个施工节点，360度无死角验收，层层把关，交付您一个完美的新家。"

    }, {
        "title": "服务专业",
        "icon": "icon-fuwu",
        "describe": "1微信直播每日施工进度，施工现场尽收眼底，从未有过的五星装修体验。"

    }, {
        "title": "口碑评价",
        "icon": "icon-ketangxiaobangyang",
        "describe": "科学的绩效评价体系，可查询施工人员的客户口碑，施工经验和施工能力，对客户满意度低的人员进行淘汰机制。"

    },

])

</script>

<style scoped></style>
