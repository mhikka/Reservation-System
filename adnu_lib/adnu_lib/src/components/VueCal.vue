<template>
    <div @click="fetchData(); onDayClick();" class="hello">
        <!-- <vue-cal style="height: 620px" :time-from="8 * 60" :time-to="20 * 60" :time-step="30" :twelveHour="true" hide-weekends active-view="month" :disable-views="['years', 'year', 'week']" /> -->
        <vue-cal @day-click="onDayClick" v-model:selected-date="schedulerSelectedDate" style="height: 620px" :time-from="8 * 60" :time-to="20 * 60" :time-step="30" :twelveHour="true" active-view="month" :disable-views="['years', 'year', 'week']" :events="events" />
        <!-- <template slot="time" slot-scope="{ time }">

        </template> -->
    </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
    components: { VueCal },
    data(){
        return{
            schedulerSelectedDate: new Date(),
            Dateselected: '',
            selectedTime: null,
            time: '',
            timeArr: [],
        }
    },

    methods: {
        check(){
            console.log(this.schedulerSelectedDate);
            this.Dateselected = this.schedulerSelectedDate;
        },

        fetchData() {
            this.$emit('date',{Dateselected: this.schedulerSelectedDate});
            this.timeArr = [];
        },

        onDayClick(day){
            console.log(day);
            let date = new Date();
            // const collection = document.getElementsByClassName("vuecal__time-cell-label");

            const elements = document.querySelectorAll(".vuecal__time-cell-label");
            
            // for (let i = 0; i < elements.length; i++) {
            //     elements[i].addEventListener("click", (event) => {
            //         console.log("Clicked element value: " + event.target.textContent);
            //         console.log("Clicked element index: " + i);
            //     });
            // }
            elements.forEach((element) => {
                element.addEventListener("click", (event) => {
                    let value = event.target.textContent;
                    this.time = value;
                    console.log("Clicked element value", value);
                })
            })
            this.selectedTime = `${date.getHours()}:${date.getMinutes()}`;
            // console.log(this.selectedTime);
            console.log(this.time);
            this.$emit('time',{Time: this.time});
        }
    },

    mounted: async function () {
        console.log(this.events)
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.vuecal__no-event, .vuecal__cell-content, .vuecal__flex {
    display: disabled;
}
.vuecal__time-cell-label:hover{
    cursor: pointer;
    font-weight: bold;
}
</style>
