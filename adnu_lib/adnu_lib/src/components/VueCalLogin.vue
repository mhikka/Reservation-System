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
            // events: [
            //     {
            //         start: '2023-2-22 10:30',
            //         end: '2023-2-22 11:30',
            //         // You can also define event dates with Javascript Date objects:
            //         // start: new Date(2018, 11 - 1, 16, 10, 30),
            //         // end: new Date(2018, 11 - 1, 16, 11, 30),
            //         title: 'Doctor appointment',
            //         content: '<i class="icon material-icons">local_hospital</i>',
            //         class: 'health'
            //     },
            // ],
            events: [],

            show_cal: false,
        }
    },

    // created() {
    //     var dateObj = new Date();
    //     var month = dateObj.getUTCMonth() + 1; //months from 1-12
    //     var day = dateObj.getUTCDate();
    //     var year = dateObj.getUTCFullYear();

    //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    //         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    //     ];

    //     this.newdate = " " + monthNames[month - 1] + " " + day + " " + year;
    //     this.file_date = year + "-" + day + "-" + month;

    //     const Event = Parse.Object.extend('Request');
    //     const query = new Parse.Query(Event);

    //     query.find().then((results) => {
    //     // var s_time = request[i].get("time");
    //     // var time_s = s_time.slice(0, 5);
    //     // var time_e = s_time.slice(10, 14);
    //         this.events = results.map((event) => ({
    //             title: event.get('description'),
    //             start: new Date(this.file_date),
    //             end: new Date(this.file_date),
    //         }));
    //     });
    //     console.log(this.events);
    // },
      

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
                // var s_time = query[i].get("time");
                // var time_s = s_time.slice(0, 5);
                // var time_e = s_time.slice(10, 14);
                this.events.push({
                    start: this.file_date + " " + query[i].get("time_start"),
                    end: this.file_date + " " + query[i].get("time_end"),
                    title: query[i].get("description"),
                    // id: query[i].id,
                    // date: query[i].get("date"),
                    // fullName: query[i].get("full_name"),
                    // email: query[i].get("email"),
                    // mobile_number: query[i].get("mobile_number"),
                    // time: query[i].get("time"),
                    // orgDept: query[i].get("org_dept"),
                    // org: query[i].get("org"),
                    // dept: query[i].get("dept"),
                    // venue: query[i].get("venue"),
                    // desc: query[i].get("description"),
                    // equipments: query[i].get("equipments"),
                    // status: query[i].get("status"),
                    // remarks: query[i].get("remarks"),
                    // semester: query[i].get("semester"),
                    // fName: query[i].get("filename"),
                    // url_link: query[i].get("url"),
                })
            }
        }

        // this.show_cal = true;
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
