<template>
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
    </ol>
    <!-- Slides -->
    <div class="carousel-inner carousel-fade">
        <div>
            <div class="carousel-item active">
                <img src="../assets/happening_now.gif" class="d-block w-100" alt="Slide 1">
            </div>
        </div>
        <div v-for="details in sample_arr_holder" :key="details">
            <div v-if="details.room === 'JOBL Conference Room 1st Floor'">
                <div class="carousel-item">
                    <img src="../assets/1.png" class="d-block w-100" alt="Slide 1">
                    <div class="caption" style="position: absolute; top: 2%; left:0%;">
                        <img src="../assets/libraryLog.png" width="460" height="105" class="d-inline-block float-end" alt="">
                            <div class="row">
                                <div class="px-0 justify-content-start">
                                    <div class="container-fluid bg-light opacity-75" style="width: 1080px; height:350px; margin-top:170px; border-radius:5px;">
                                        <h1 style="color:DarkBlue; font-size: 100px; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                        <h3 style="color:MidnightBlue; font-size: 50px; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                    </div>
                                    <div class="container-fluid bg-light opacity-75" style="width: 1000px; height:900px; margin-left:40px;border-radius:25px;">
                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 65px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                        <div class="table-responsive pt-10">
                                            <div class="justify-content-center">
                                                <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 100px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ details.desc }}</h1>
                                                <h2 style="font-size: 75px"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div v-else-if="details.room === 'Consultation Room 1'">
                <div class="carousel-item">
                    <img src="../assets/2.png" class="d-block w-100" alt="Slide 2">
                    <div class="caption" style="position: absolute; top: 2%; left:0%;">
                        <img src="../assets/libraryLog.png" width="460" height="105" class="d-inline-block float-end" alt="">
                            <div class="row">
                                <div class="px-0 justify-content-start">
                                    <div class="container-fluid bg-light opacity-75" style="width: 1080px; height:350px; margin-top:170px; border-radius:5px;">
                                        <h1 style="color:DarkBlue; font-size: 100px; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                        <h3 style="color:MidnightBlue; font-size: 50px; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                    </div>
                                    <div class="container-fluid bg-light opacity-75" style="width: 1000px; height:900px; margin-left:40px;border-radius:25px;">
                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 65px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                    <div class="table-responsive pt-10">
                                        <div class="justify-content-center">
                                            <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 100px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ details.desc }}</h1>
                                            <h2 style="font-size: 75px"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="details.room === 'Consultation Room 2'">
                <div class="carousel-item">
                    <img src="../assets/3.png" class="d-block w-100" alt="Slide 3">
                    <div class="caption" style="position: absolute; top: 2%; left:0%;">
                        <img src="../assets/libraryLog.png" width="460" height="105" class="d-inline-block float-end" alt="">
                            <div class="row">
                                <div class="px-0 justify-content-start">
                                    <div class="container-fluid bg-light opacity-75" style="width: 1080px; height:350px; margin-top:170px; border-radius:5px;">
                                        <h1 style="color:DarkBlue; font-size: 100px; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                        <h3 style="color:MidnightBlue; font-size: 50px; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                    </div>
                                    <div class="container-fluid bg-light opacity-75" style="width: 1000px; height:900px; margin-left:40px;border-radius:25px;">
                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 65px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                    <div class="table-responsive pt-10">
                                        <div class="justify-content-center">
                                            <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 100px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ details.desc }}</h1>
                                            <h2 style="font-size: 75px"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="details.room === 'Library Multipurpose Room'">
                <div class="carousel-item">
                    <img src="../assets/4.png" class="d-block w-100" alt="Slide 4">
                    <div class="caption" style="position: absolute; top: 2%; left:0%;">
                        <img src="../assets/libraryLog.png" width="460" height="105" class="d-inline-block float-end" alt="">
                            <div class="row">
                                <div class="px-0 justify-content-start">
                                    <div class="container-fluid bg-light opacity-75" style="width: 1080px; height:350px; margin-top:170px; border-radius:5px;">
                                        <h1 style="color:DarkBlue; font-size: 100px; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                        <h3 style="color:MidnightBlue; font-size: 50px; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                    </div>
                                    <div class="container-fluid bg-light opacity-75" style="width: 1000px; height:900px; margin-left:40px;border-radius:25px;">
                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 65px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                    <div class="table-responsive pt-10">
                                        <div class="justify-content-center">
                                            <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 100px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ details.desc }}</h1>
                                            <h2 style="font-size: 75px"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="details.room === 'Library: Fr. A.M. BAUTISTA - Viewing Room'">
                <div class="carousel-item">
                    <img src="../assets/5.png" class="d-block w-100" alt="Slide 5">
                    <div class="caption" style="position: absolute; top: 2%; left:0%;">
                        <img src="../assets/libraryLog.png" width="460" height="105" class="d-inline-block float-end" alt="">
                            <div class="row">
                                <div class="px-0 justify-content-start">
                                    <div class="container-fluid bg-light opacity-75" style="width: 1080px; height:350px; margin-top:170px; border-radius:5px;">
                                        <h1 style="color:DarkBlue; font-size: 80px; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                        <h3 style="color:MidnightBlue; font-size: 50px; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                    </div>
                                    <div class="container-fluid bg-light opacity-75" style="width: 1000px; height:900px; margin-left:40px;border-radius:25px;">
                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 70px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                    <div class="table-responsive pt-10">
                                        <div class="justify-content-center">
                                            <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 100px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ details.desc }}</h1>
                                            <h2 style="font-size: 75px"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Controls -->
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>
</template>

<script>
import { Carousel } from 'bootstrap/dist/js/bootstrap.js'
import Parse from 'parse'

export default {
    data(){
        return{
            currentDate: new Date(),
            newdate: '',
            events: [],
            no_event: '',
            images: [],
            slideIndex: 0,

            sample_arr_holder: [],
            throw_flag: false,
        };
    },

    computed: {
        formattedDate: function() {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const dayOfWeek = daysOfWeek[this.currentDate.getDay()];
            const monthOfYear = monthsOfYear[this.currentDate.getMonth()];
            const dayOfMonth = this.currentDate.getDate();
            const year = this.currentDate.getFullYear();
            return `${dayOfWeek} | ${monthOfYear} ${dayOfMonth}, ${year}`;
        }
    },

    mounted: async function() {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        if(day <= 9){
        var new_day = day.toString().padStart(2, '0');
        } else {
        new_day = day.toString();
        }
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.newdate = " " + monthNames[month - 1] + " " + new_day + " " + year;

        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
        if(this.newdate === query[i].get("date") && query[i].get("status") === 'Approved'){
                this.sample_arr_holder.push({
                    room: query[i].get("venue"),
                    time_start: query[i].get("time_start"),
                    time_end: query[i].get("time_end"),
                    desc: query[i].get("description"),
                });
            }
        }

        console.log(this.sample_arr_holder);

        // Initialize the carousel
        new Carousel(document.querySelector('#myCarousel'), {
            // Set the interval to 5 seconds
            interval: 2000,
            wrap: true
        });
    }
}
</script>

<style scoped>
.carousel-inner .carousel-item {
  transition: transform 0.6s ease-in-out;
}

.carousel-inner .carousel-item.active {
  transform: translateX(0);
}

.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  position: absolute;
  top: 0;
}

.carousel-inner .carousel-item-next.carousel-item-start,
.carousel-inner .carousel-item-prev.carousel-item-end {
  transform: translateX(0);
}

</style>
