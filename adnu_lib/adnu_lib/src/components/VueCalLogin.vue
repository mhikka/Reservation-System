<template>
    <div class="hello">
        <vue-cal :events="events" style="height: 620px" :time-from="8 * 60" :time-to="20 * 60" :time-step="30" :twelveHour="true" hide-weekends active-view="month" :disable-views="['years', 'year', 'week', 'month']"/>
    </div>
    <!-- <div v-else>
        <div>
            hello
        </div>
    </div> -->
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import Parse from 'parse';

export default {
    components: { VueCal },
    props: {
        msg: String
    },
    data(){
        return{
            newdate: '',
            file_date: '',
            events: [],

            show_cal: false,
        }
    },

    mounted: async function(){
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        this.newdate = " " + monthNames[month - 1] + " " + day + " " + year;
        this.file_date = year + "-" + day + "-" + month;
        console.log(this.newdate);

        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            if(this.newdate === query[i].get("date") && query[i].get("status") === 'Approved'){
                this.events.push({
                    start: this.file_date + " " + query[i].get("time_start"),
                    end: this.file_date + " " + query[i].get("time_end"),
                    title: query[i].get("description"),
                })
            }
        }
        
        console.log(this.events);   
    }

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
