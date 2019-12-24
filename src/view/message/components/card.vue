<template>
  <div class="Card">
      <card :header="{title: $t('Product details') }" :footer="{title: $t('More'),link:'/component/panel'}">
      <p slot="content" class="card-padding">{{ $t('Custom content') }}</p>
    </card>
  </div>
</template>

<script>
import { Card } from 'vux'
export default {
    name:'Card',
    components: {
     Card
    },
    data() {
        return {
            key: value
        }
    },
}
</script>

<style>

</style>