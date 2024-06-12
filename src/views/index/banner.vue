<template>
  <div class="banner">
    <div class="banner-list">

      <el-carousel height="600px" arrow="never">
        <el-carousel-item v-for="item in imagelist" :key="item.id" style="height: 600px">

          <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          <img :src="getAssetsFile(item.url)">
        </el-carousel-item>
        <div class="indexForm">
          <div class="form_bg">
            <div class="form_head">
              <div class="form_head">
                <b>免费获取</b>家装报价
              </div>
              <div class="regform">
                <el-input v-model="name" class="w-50 m-2" size="large" placeholder="请输入姓名" :prefix-icon="Avatar" />
                <el-input v-model="phone" class="w-50 m-2" size="large" placeholder="请输入电话"
                  :prefix-icon="PhoneFilled" />
                <el-input v-model="size" class="w-50 m-2" size="large" placeholder="请输入装修面积"
                  :prefix-icon="BrushFilled" />
                <el-button color="var(--bgcolor)">获取报价</el-button>
              </div>
              <div class="privacy">
                <input type="checkbox" class="checkbox-type" />
                <span>已阅读并同意《用户隐私保护协议》</span>
              </div>
            </div>

          </div>
        </div>
      </el-carousel>
      <div class="banner-item">
        <img :src="getAssetsFile('footer_bottom.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script setup name="banner" lang="ts">
import { Avatar, PhoneFilled, BrushFilled } from '@element-plus/icons-vue'
import { ref } from 'vue';

import { getAssetsFile } from '@/utils/pub-use.ts'

const imagelist = ref([
  {
    "url": "banner01.png",
    "id": 1
  },
  {
    "url": "banner03.jpg",
    "name": 2
  },
  {
    "url": "banner02.jpg",
    "name": 3
  }, {
    "url": "banner05.jpg",
    "name": 4
  }, {
    "url": "banner07.jpg",
    "name": 5
  }, {
    "url": "banner08.jpg",
    "name": 6
  }

])
let name = ref()
let phone = ref()
let size = ref()
</script>


<style scoped></style>