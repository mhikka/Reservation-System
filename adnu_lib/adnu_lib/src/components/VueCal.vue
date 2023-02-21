<template>
    <div class="hello">
        <vue-cal style="height: 620px" :time-from="8 * 60" :time-to="20 * 60" :time-step="30" :twelveHour="true" hide-weekends active-view="month" :disable-views="['years', 'year', 'week']" />
    </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
    components: { VueCal },
    props: {
        msg: String
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
