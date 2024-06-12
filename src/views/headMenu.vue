<template>
    <div class="header">
        <div class="header-list">
            <div class="header-top">
                <div class="logo">
                    <a href="#" title="家居装修网"></a>
                </div>
                <ul class="header-menu">
                    <li v-for=' item in titlelist' :key="item.path">
                        <router-link :to="item.path">
                            <span>{{ item.title }}</span>
                        </router-link>

                    </li>
                </ul>
                <div class="header-right">
                    <div class="header-right-l">
                        <!-- <img src="@/assets/images/phone.png" alt="#"> -->
                    </div>
                    <div class="header-right-r">
                        <p> 24小时服务热线</p>
                        <p class="header-right-r-number"> 400-000-00000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup name="headMenu" lang="ts">
import { ref } from 'vue';
let titlelist = ref([
    {
        "title": "首页",
        "path": "/index"
    }, {
        "title": "全屋设计",
        "path": "/house"
    }, {
        "title": "厨房设计",
        "path": "/kitchen"
    }, {
        "title": "家居搭配",
        "path": "/collocation"
    }, {
        "title": "设计案例",
        "path": "/case"
    },
    {
        "title": "发展历程",
        "path": "/history"
    },
    {
        "title": "关于我们",
        "path": "/about"
    }
])

</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;

}

.router-link-active {
    text-decoration: none;
    color: #387197;

}
</style>