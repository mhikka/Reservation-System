<template>
<div class="wrapper">
    <div class="img-fluid">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <!-- Indicators -->
            <div v-if="show_none === false">
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
                            <div class="carousel-item" style="object-fit: contain;">
                                <img src="../assets/1.png" class="d-block w-100" alt="Slide 5">
                                <div class="caption" style="position: absolute; top: 5%; left:0%;">
                                    <img src="../assets/libraryLog.png" width="400" height="auto" class="img-fluidd-inline-block float-end" alt="">
                                        <div class="row">
                                            <div class="px-0 justify-content-start">
                                                <div class="container-fluid bg-light opacity-75 text-xl mt-10" style=" width:750px; height:auto;margin-top:150px; border-radius:5px;">
                                                    <h1 class="pt-2 fw-bold" style="font-size: 60px; color:DarkBlue; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                                    <h3 class="pb-4" style="color:MidnightBlue; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                                </div>
                                                <div class="container-fluid bg-light opacity-75" style="width: 640px; height:auto; margin-left:40px;border-radius:25px;">
                                                    <h1 class="pt-5 fs-1 fw-bold" style="color:DarkBlue; font-size:100%; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                                <div class="table-responsive pt-10">
                                                    <div class="justify-content-center">
                                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 80px; font-family:Arial, Helvetica, sans-serif; margin:20px 20px; margin-top:30px;">{{ details.desc }}</h1>
                                                        <h2 class="pb-10 fw-bold" style="color:DarkBlue; font-size: 30px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-bottom:100px;"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="details.room === 'Consultation Room 1'">
                            <div class="carousel-item" style="object-fit: contain;">
                                <img src="../assets/2.png" class="d-block w-100" alt="Slide 5">
                                <div class="caption" style="position: absolute; top: 5%; left:0%;">
                                    <img src="../assets/libraryLog.png" width="400" height="auto" class="img-fluidd-inline-block float-end" alt="">
                                        <div class="row">
                                            <div class="px-0 justify-content-start">
                                                <div class="container-fluid bg-light opacity-75 text-xl mt-10" style=" width:750px; height:auto;margin-top:150px; border-radius:5px;">
                                                    <h1 class="pt-2 fw-bold" style="font-size: 60px; color:DarkBlue; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                                    <h3 class="pb-4" style="color:MidnightBlue; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                                </div>
                                                <div class="container-fluid bg-light opacity-75" style="width: 640px; height:auto; margin-left:40px;border-radius:25px;">
                                                    <h1 class="pt-5 fs-1 fw-bold" style="color:DarkBlue; font-size:100%; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                                <div class="table-responsive pt-10">
                                                    <div class="justify-content-center">
                                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 80px; font-family:Arial, Helvetica, sans-serif; margin:20px 20px; margin-top:30px;">{{ details.desc }}</h1>
                                                        <h2 class="pb-10 fw-bold" style="color:DarkBlue; font-size: 30px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-bottom:100px;"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="details.room === 'Consultation Room 2'">
                            <div class="carousel-item" style="object-fit: contain;">
                                <img src="../assets/3.png" class="d-block w-100" alt="Slide 5">
                                <div class="caption" style="position: absolute; top: 5%; left:0%;">
                                    <img src="../assets/libraryLog.png" width="400" height="auto" class="img-fluidd-inline-block float-end" alt="">
                                        <div class="row">
                                            <div class="px-0 justify-content-start">
                                                <div class="container-fluid bg-light opacity-75 text-xl mt-10" style="width:750px; height:auto;margin-top:150px; border-radius:5px;">
                                                    <h1 class="pt-2 fw-bold" style="font-size: 60px; color:DarkBlue; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                                    <h3 class="pb-4" style="color:MidnightBlue; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                                </div>
                                                <div class="container-fluid bg-light opacity-75" style="width: 640px; height:auto; margin-left:40px;border-radius:25px;">
                                                    <h1 class="pt-5 fs-1 fw-bold" style="color:DarkBlue; font-size:100%; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                                <div class="table-responsive pt-10">
                                                    <div class="justify-content-center">
                                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 80px; font-family:Arial, Helvetica, sans-serif; margin:20px 20px; margin-top:30px;">{{ details.desc }}</h1>
                                                        <h2 class="pb-10 fw-bold" style="color:DarkBlue; font-size: 30px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-bottom:100px;"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="details.room === 'Library Multipurpose Room'">
                            <div class="carousel-item" style="object-fit: contain;">
                                <img src="../assets/4.png" class="d-block w-100" alt="Slide 5">
                                <div class="caption" style="position: absolute; top: 5%; left:0%;">
                                    <img src="../assets/libraryLog.png" width="400" height="auto" class="img-fluidd-inline-block float-end" alt="">
                                        <div class="row">
                                            <div class="px-0 justify-content-start">
                                                <div class="container-fluid bg-light opacity-75 text-xl mt-10" style="width:750px; height:auto;margin-top:150px; border-radius:5px;">
                                                    <h1 class="pt-2 fw-bold" style="font-size: 60px; color:DarkBlue; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                                    <h3 class="pb-4" style="color:MidnightBlue; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                                </div>
                                                <div class="container-fluid bg-light opacity-75" style="width: 640px; height:auto; margin-left:40px;border-radius:25px;">
                                                    <h1 class="pt-5 fs-1 fw-bold" style="color:DarkBlue; font-size:100%; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                                <div class="table-responsive pt-10">
                                                    <div class="justify-content-center">
                                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 80px; font-family:Arial, Helvetica, sans-serif; margin:20px 20px; margin-top:30px;">{{ details.desc }}</h1>
                                                        <h2 class="pb-10 fw-bold" style="color:DarkBlue; font-size: 30px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-bottom:100px;"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="details.room === 'Library: Fr. A.M. BAUTISTA - Viewing Room'">
                            <div class="carousel-item" style="object-fit: contain;">
                                <img src="../assets/5.png" class="d-block w-100" alt="Slide 5">
                                <div class="caption" style="position: absolute; top: 5%; left:0%;">
                                    <img src="../assets/libraryLog.png" width="400" height="auto" class="img-fluidd-inline-block float-end" alt="">
                                        <div class="row">
                                            <div class="px-0 justify-content-start">
                                                <div class="container-fluid bg-light opacity-75 text-xl mt-10" style="width:750px; height:auto;margin-top:150px; border-radius:5px;">
                                                    <h1 class="pt-2 fw-bold" style="font-size: 60px; color:DarkBlue; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ details.room }}</h1>
                                                    <h3 class="pb-4" style="color:MidnightBlue; font-family: Arial, Helvetica, sans-serif;">1st Floor, James J. O’Brien S.J. Library</h3>
                                                </div>
                                                <div class="container-fluid bg-light opacity-75" style="width: 640px; height:auto; margin-left:40px;border-radius:25px;">
                                                    <h1 class="pt-5 fs-1 fw-bold" style="color:DarkBlue; font-size:100%; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                                                <div class="table-responsive pt-10">
                                                    <div class="justify-content-center">
                                                        <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 80px; font-family:Arial, Helvetica, sans-serif; margin:20px 20px; margin-top:30px;">{{ details.desc }}</h1>
                                                        <h2 class="pb-10 fw-bold" style="color:DarkBlue; font-size: 30px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-bottom:100px;"> Time: {{ details.time_start }} - {{ details.time_end }} </h2>
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
            </div>
            <div v-else>
                <div>
                    <div class="carousel-item active">
                        <img src="../assets/noEvents.gif" class="d-block w-100" alt="Slide 1">
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
    </div>
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

            len_of_arr: '',
            show_none: false,
        };
    },

    computed: {
        //this allows us to get the current date today and be displayed in our front-end HTML code
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

        // we fetched all of the data in "Request" table in our database
        // we looked for an event that is happening "TODAY" wherein the status of the request is 'Approved' by the admin
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
        this.len_of_arr = this.sample_arr_holder.length;

        if(this.len_of_arr != 0){
            this.show_none = false;
        } else {
            this.show_none = true;
        }

        // Initialize the carousel
        new Carousel(document.querySelector('#myCarousel'), {
            // Set the interval to 2 seconds
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

.wrapper{
    transform: rotate(90deg);
    transform-origin:bottom left;
    
    position:absolute;
    top: -100vw;
    left: 0;
    
    height:100vw;
    width:100vh;
    
    background-color:#000;
    color:#fff;

    overflow: hidden;

    object-fit: contain;
}

img{
    max-width:100%;
    height:auto;
}
</style>
