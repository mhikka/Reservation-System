<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
    </ol>
    <!-- Slides -->
    <div class="container-fluid m-0 p-0" style="bottom:0;left:0;right:0;min-height:400px;width:1080px; overflow-y:hidden;">
      <div class="carousel-inner m-0 p-0">
        <div v-for="(image, index) in sample_arr_holder" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
          <img :src="image.src" class="img-fluid d-block" style="width: 1080px; height: 1980px;" :alt="image.alt">
         <div class="caption" style="position: absolute; top: 2%; left:0%;">
            <img src="../assets/libraryLog.png" width="460" height="105" class="d-inline-block float-end" alt="">
            <div class="row">
              <div class="px-0 justify-content-start">
                <div class="container-fluid bg-light opacity-75" style="width: 1080px; height:350px; margin-top:170px; border-radius:5px;">
                  <h1 class="pt-5" style="color:DarkBlue; font-size: 100px; font-family: Times New Roman, Times, serif; margin:20px 50px;">{{ image.caption }}</h1>
                  <h3 style="color:MidnightBlue; font-size: 50px; font-family: Arial, Helvetica, sans-serif;">{{ image.description }}</h3>
                </div>
                <div class="container-fluid bg-light opacity-75" style="width: 1000px; height:1200px; margin-left:40px;border-radius:25px;">
                  <h1 class="pt-5 fw-bold" style="color:DarkBlue; font-size: 65px; font-family:Arial, Helvetica, sans-serif; margin:20px 50px; margin-top:40px;">{{ formattedDate }}</h1>
                  <div class="table-responsive">
                    <table  class="table" style="color:DarkBlue; font-size: 55px; font-family: Arial, Helvetica, sans-serif; margin-top:40px; width:100%">
                      <div class= "text-start">
                        <thead>
                            <tr>
                              <th scope="col" style="border-bottom: 3px solid grey;">Time</th>
                              <th scope="col" class=" ps-4 text-start" style="border-left: 3px solid grey;border-bottom: 3px solid grey; width:70%;">Event</th>
                            </tr>
                        </thead>
                        <tbody class="text-start p-2">
                          <tr>
                            <td scope="row " class=" px-4"> {{ image.time_start }} - <br>  {{ image.time_end }} </td>
                            <td class=" ps-4 text-start" style="border-left: 3px solid grey;"> {{ image.title }} </td>
                          </tr>
                        </tbody>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parse from 'parse';
export default {
  data() {
    return {
      currentDate: new Date(),
      newdate: '',
      events: [],
      no_event: '',
      images: [],
      slideIndex: 0,

      sample_arr_holder: [],
      throw_flag: false,

      new_arr: [],

      jobl_arr: [],
      cons_arr1: [],
      cons_arr2: [],
      lmr_arr: [],
      lfb_arr: [],

      new_merged_arr: [],
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

  mounted: async function(){
    this.images = [
      {
          src: require("../assets/image-1.jpg"),
          alt: "Image 1",
          caption: "JOBL Conference Room 1st Floor",
          description: "1st Floor, James J. O’Brien S.J. Library",
          visibility: false,
        },
        {
          src: require("../assets/image-2.png"),
          alt: "Image 2",
          caption: "Consultation Room 1",
          description: "1st Floor, James J. O’Brien S.J. Library",
          visibility: true,
        },
        {
          src: require("../assets/image-3.jpg"),
          alt: "Image 3",
          caption: "Consultation Room 2",
          description: "1st Floor, James J. O’Brien S.J. Library",
          visibility: true,
        },
        {
          src: require("../assets/image-2.png"),
          alt: "Image 4",
          caption: "Library Multipurpose Room",
          description: "1st Floor, James J. O’Brien S.J. Library",
          visibility: true,
        },
        {
          src: require("../assets/image-3.jpg"),
          alt: "Image 5",
          caption: "Library: Fr. A.M. BAUTISTA - Viewing Room",
          description: "1st Floor, James J. O’Brien S.J. Library",
          visibility: true,
        },
    ];

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
            for(let x = 0; x < this.images.length; x++){
              if(query[i].get("venue") === this.images[x].caption){
                this.images[x].start_time = query[i].get("time_start");
                this.images[x].end_time = query[i].get("time_end");
                this.images[x].title = query[i].get("description");
                this.images[x].id = query[i].id;

                this.throw_flag = true;
              }
            }

          // jobl_arr: [],
          // cons_arr1: [],
          // cons_arr2: [],
          // lmr_arr: [],
          // lfb_arr: [],
          this.new_arr.push({
            venue: query[i].get("venue"),
            time_start: query[i].get("time_start"),
            time_end: query[i].get("time_end"),
            desc: query[i].get("description"),
          })
       } //else {
        //   alert("no venue");
        // }
    }
    for(let x = 0; x < this.new_arr.length; x++){
      if(this.new_arr[x].venue === "JOBL Conference Room 1st Floor"){
        this.jobl_arr.push({
          venue: this.new_arr[x].venue,
          time_start: this.new_arr[x].time_start,
          time_end: this.new_arr[x].time_end,
          desc: this.new_arr[x].desc,
        })
      } else if(this.new_arr[x].venue === "Consultation Room 1"){
        this.cons_arr1.push({
          venue: this.new_arr[x].venue,
          time_start: this.new_arr[x].time_start,
          time_end: this.new_arr[x].time_end,
          desc: this.new_arr[x].desc,
        })
      } else if(this.new_arr[x].venue === "Consultation Room 2"){
        this.cons_arr2.push({
          venue: this.new_arr[x].venue,
          time_start: this.new_arr[x].time_start,
          time_end: this.new_arr[x].time_end,
          desc: this.new_arr[x].desc,
        })
      } else if(this.new_arr[x].venue === "Library - Multipurpose Room"){
        this.lmr_arr.push({
          venue: this.new_arr[x].venue,
          time_start: this.new_arr[x].time_start,
          time_end: this.new_arr[x].time_end,
          desc: this.new_arr[x].desc,
        })
      } else if(this.new_arr[x].venue === "Library: Fr. A.M. BAUTISTA - Viewing Room"){
        this.lfb_arr.push({
          venue: this.new_arr[x].venue,
          time_start: this.new_arr[x].time_start,
          time_end: this.new_arr[x].time_end,
          desc: this.new_arr[x].desc,
        })
      }
    }
    console.log(this.jobl_arr);
    console.log(this.cons_arr1);
    console.log(this.cons_arr2);
    console.log(this.lmr_arr);
    console.log(this.lfb_arr);

    this.new_merged_arr = this.jobl_arr.concat(this.cons_arr1, this.cons_arr2, this.lmr_arr, this.lfb_arr);
    // for(let w = 0; w < this.new_merged_arr.length; w++){
    //   if(this.new_merged_arr[w].venue > 2){

    //   }
    // }
    const passed_arr = this.new_merged_arr;
    const uniq_merged_arr = [...new Set(passed_arr)]
    console.log(this.new_arr);
    console.log(this.new_merged_arr);
    console.log(uniq_merged_arr);
      for(let z = 0; z < this.images.length; z++){
        if(this.throw_flag === true && this.images[z].start_time != null){
          this.sample_arr_holder.push({
            caption: this.images[z].caption,
            description: this.images[z].description,
            time_start: this.images[z].start_time,
            time_end: this.images[z].end_time,
            title: this.images[z].title,
            src: this.images[z].src,
          });
        } else {
          console.log("False");
        }
      }
    console.log(this.images);
    console.log(this.sample_arr_holder);
    this.showSlides();
    setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  },

  methods: {
    plusSlides(n) {
      this.slideIndex += n;
      if (this.slideIndex < 0) {
        this.slideIndex = this.images.length - 1;
      } else if (this.slideIndex >= this.images.length) {
        this.slideIndex = 0;
      }
      while (this.images[this.slideIndex].visibility === false) {
      this.slideIndex += n;
        if (this.slideIndex < 0) {
          this.slideIndex = this.images.length - 1;
        } else if (this.slideIndex >= this.images.length) {
          this.slideIndex = 0;
        }
      }
      this.showSlides();
    },


    showSlides() {
      var i;
      var slides = document.getElementsByClassName("carousel-item");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex].style.display = "block";
    },
  },
};
</script>

