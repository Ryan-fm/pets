<template>
  <div class="Cards">
      <!-- 返回一个时间 -->
      <p style="margin-top:20px">05-22 08:53</p>
      <Card  :header="{title:header}" :footer="{title:footer}">
      <p slot="content" class="card-padding">
        <img src="http://viptail.image.alimmdn.com/files/official_web/img/gz002-f.jpg" alt="">
      </p>
    </Card >
  </div>
</template>

<script>
import { Card } from 'vux'
export default {
    name:'Cards',
   components: {
    Card
    },
    data() {
        return {
            header: '【重要】园长精编 [寄养须知]',
            footer:'查看详情',
        }
    },
}
</script>

<style  lang="scss" scoped>
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>