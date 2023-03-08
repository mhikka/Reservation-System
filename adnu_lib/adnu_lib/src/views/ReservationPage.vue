<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <SidePanelUser>
                <hr>
            </SidePanelUser>
            <div class="col text-start">
                <h1 class="font-weight-light pt-4 ms-3">
                    Reservation
                </h1>
                  
                <hr style="background-color: black; height: 2px;">
                <div @click="check" v-if="gapiLoaded === true">
                    <!-- <ejs-schedule height="575px" currentView="Month" v-model:selectedDate="schedulerSelectedDate" id="calendar">
                    </ejs-schedule> -->
                    <div class="scrollable">
                        <VueCal @time="handleTime" @date="handleEvent" ref="vuecal" />  
                    <!-- <div class="mt-3">
                        Number of dates selected: {{ length_ofArr }}
                        <button type="button" class="ms-2 mb-1 btn btn-secondary" @click="resetArr">Reset</button>
                    </div>  -->
                        <div v-if="show_selected_popup === true">
                            <div class="pt-2 pb-2 pe-2">
                                <div class="card mw-auto border-warning">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h6 class="card-text pt-2">Number of dates selected: {{ length_ofArr }}</h6>
                                            </div>
                                            <div class="col-auto">
                                                <button type="button" class="btn btn-outline-danger" @click="resetArr">Reset</button> &nbsp;
                                                <!-- <button type="button" class="btn btn-primary" @click="undoArr">Undo</button> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-else>
                    <div class="text-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/hursldrn.json"
                            trigger="loop"
                            colors="primary:#003A6C, secondary:#e8e230"
                            state="loop"
                            style="width: 60px; height: 60px">
                        </lord-icon>
                        <br>
                        We apologize for any inconvenience caused and thank you for your patience while the system loads.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="page-footer fluid-bottom border-top border-secondary" style="background-color: #414141;">
        <div class="footer-copyright text-start py-3 text-light ms-2">
            <small>
                © 2023 Copyright:
            <a href="#" class="text-light"> Ateneo de Naga University</a>
            </small>
        </div>
    </footer>

    <div v-if="length_ofArr != 0">
        <div v-if="open_modal === true && time != ''">
            <AdminModal>
                <div class="card">
                    <div class="card-header">
                        <div class="row justify-content-end">
                            <div class="container">
                                <div class="row pt-3">
                                    <div class="col-4" v-if="next_page === true">
                                        <button @click="back_btn" class="btn btn-outline-none text-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="col-4" v-else>
                                        <button @click="back_btn" class="btn btn-outline-none text-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="col-4 pt-2">
                                        <h6 class="fw-bold">{{dateToday}}</h6>
                                        <hr stlye="background-color: black">
                                    </div>
                                    <div class="col-4">
                                        <button @click="close_modal" class="btn btn-outline-none text-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="container pb-3" v-if="next_page === false">
                                <form>
                                    <h5 class="fw-bolder d-flex justify-content-start pb-3">Personal Details</h5>
                                    <div class="form-group pb-2">
                                        <label for="exampleInputEmail1" class="float-start">Full Name</label>
                                        <input v-model="profileFullName" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name here">
                                    </div>
                                    <div class="form-group pb-2">
                                        <label for="exampleInputPassword1" class="float-start">Email</label>
                                        <input v-model="user_email" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your email here">
                                    </div>
                                    <div class="form-group pb-5">
                                        <label for="exampleInputPassword1" class="float-start">Mobile Number</label>
                                        <input v-model="mobile_number" type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter your mobile number here">
                                    </div>
                                </form>
                                <button class="btn btn-primary float-start" type="submit" @click="nextPage">
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </button>
                            </div>
                            <div v-else class="pb-3">
                                <div v-if="next_page_1 === false">
                                    <form>
                                        <h5 class="fw-bolder d-flex justify-content-start pb-3">Reservation Details</h5>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputEmail1" class="float-start">Date/s</label>
                                            <input v-model="tempArr" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the date here">
                                        </div>
                                        <div class="row g-3">
                                            <div class="form-group pb-2 col-sm">
                                                <label for="exampleInputPassword1" class="float-start">Starting Time</label>
                                                <input v-model="time" type="text" class="form-control" id="exampleInputPassword1" placeholder="(E.g. 10:00am)">
                                            </div>
                                            <div class="form-group pb-2 col-sm">
                                                    <label for="exampleInputPassword1" class="float-start">Ending Time</label>
                                                    <input v-model="timeEnd" type="text" class="form-control" id="exampleInputPassword1" placeholder="(E.g. 2:00pm)">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Organization</label>
                                            <input v-model="org" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your organization here">
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Department</label>
                                            <input v-model="dept" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your department here">
                                        </div>
                                        <div class="form-group pb-3">
                                            <label for="exampleInputPassword1" class="float-start">Description</label>
                                            <input v-model="desc" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter description of your event here">
                                        </div>
                                        <div class="form-group pb-3">
                                            <label for="exampleInputPassword1" class="float-start">Academic Year</label>
                                            <input v-model="acad_year" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the academic year (E.g. 2023-2024)">
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Venue</label>
                                            <select name="plan" id="venue" v-model="venue" class="btn btn-sm border float-start">
                                                <option value="" disabled selected>List of Venues</option>
                                                <option value="JOBL Conference Room 1st Floor">JOBL Conference Room 1st Floor</option>
                                                <option value="Consultation Room 1"><small>Consultation Room 1</small></option>
                                                <option value="Consultation Room 2"><small>Consultation Room 2</small></option>
                                                <option value="Library - Multipurpose Room"><small>Library - Multipurpose Room</small></option>
                                                <option value="Library: Fr. A.M. BAUTISTA - Viewing Room"><small>Library: Fr. A.M. BAUTISTA -
                                                    Viewing Room</small></option>
                                            </select>
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Semester</label>
                                            <select name="plan" id="venue" v-model="semester" class="btn btn-sm border float-start">
                                                <option value="" disabled selected>List of Semesters</option>
                                                <option value="1st Semester">1st Semester</option>
                                                <option value="2nd Semester"><small>2nd Semester</small></option>
                                                <option value="Intersession"><small>Intersession</small></option>
                                            </select>
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Form Remarks</label>
                                            <select name="plan" id="venue" v-model="remarks" class="btn btn-sm border float-start">
                                                <option value="" disabled selected>List of Remarks</option>
                                                <option value="Tentative">Tentative</option>
                                                <option value="Final"><small>Final</small></option>
                                            </select>
                                        </div>
                                    </form>
                                    <br class="pt-2">
                                    <button class="btn btn-primary float-start" type="submit" @click="nextPage_1">
                                        Next
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-if="next_page_1 === true && next_page === true">
                            <h5 class="fw-bolder d-flex justify-content-start">Equipments</h5>
                            <div class=" d-flex justify-content-center pb-3">
                                <span class = "text-danger">
                                    <small> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                        Important Note: Please fill up all the input fields in this section. If none, input zero(0).
                                    </small>
                                </span>
                            </div>
                            <div class="row" v-for="equip in equipments_arr" :key="equip">
                                <div class="col-4">
                                    {{equip.items}}
                                </div>
                                <div class="col-8">
                                    <input type="number" class="form-control" id="input_q" min="1" :v-model="values_of_q" :placeholder="equip.q">
                                </div>
                            </div>

                            <div v-if="next_page_1 === true && next_page === true">
                                <h5 class="fw-bolder d-flex justify-content-start pb-3">Equipments</h5>
                                <div class="row" v-for="equip in equipments_arr" :key="equip">
                                    <div class="col-4">
                                        {{equip.items}}
                                    </div>
                                    <div class="col-8">
                                        <input type="number" class="form-control" id="input_q" min="1" :v-model="values_of_q" :placeholder="equip.q">
                                    </div>
                                </div>
                                <div class="col d-flex justify-content-start fw-bold pb-2 pt-3">
                                    <label for="formGroupExampleInput">Related Documents</label>
                                </div>
                                <input class="form-control" type="file" id="FileUpload">

                                <div class="pt-5">
                                        <button class="btn btn-primary float-start" type="submit" @click="setAppointment();">
                                            Set Appointment
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminModal>
        </div>
    </div>

    <div v-if="error_message === true">
        <div class="mx-auto" id="warning_pop">
            <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <lord-icon
                        src="https://cdn.lordicon.com/lfqzieho.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#ffffff"
                        style="width: 25px;height: 25px" class="pt-1 ms-1">
                    </lord-icon>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Warning</h5>
                    <p class="card-text">Same day reservation is not allowed.</p>
                    <button type="button" class="btn btn-outline-light" @click="close_error_msg">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import AdminModal from "@/components/AdminModal.vue";
import SidePanelUser from "@/components/SidePanelUser.vue";
import VueCal from "@/components/VueCal.vue"
import Parse from 'parse';
import $ from 'jquery';

const gapi = window.gapi;
export default{
    components: {
        // 'ejs-schedule': ScheduleComponent,
        AdminModal, SidePanelUser, VueCal
    },
    provide: {
        // schedule: [Day, Week, WorkWeek, Month, Agenda]
    },
    data(){
        return{
            schedulerSelectedDate: new Date(),
            open_modal: false,
            sliced_holder: '',
            picked_date: '',
            next_page: false,
            full_name: '',
            user_email: '',
            mobile_number: '',
            time: '',
            org: '',
            dept: '',
            venue: '',
            desc: '',
            isOpen: false,
            date: '',
            date_slicer: '',
            next_page_1: false,
            profileFullName: '',

            timeHolder: '',
            endTime: '',
            dateToday: new Date(),
            sliced_holder2: [],
            finalDate: [],
            time2: '',
            concatTime: '',
            timeEnd: '',
            tempArr: [],
            length_ofArr: 0,

            sample_placeholder: "",

            array_of_equipments: ["Chairs", "DVD Players", "Extension Wires","Microphones", "Multimedia Project", "Sound System", "Tables", "Television", "White Screen"],
            array_of_quantity: ["200", "2", "1", "3","1","1","25","2","1"],

            equipments_arr: [],

            values_of_q: '',

            gapiLoaded: false,
            google_user: '',

            equipment_list: [],

            semester: '',
            remarks: '',
            newdate: '',

            acad_year: '',
            timeStart: '',

            arr_holder: [],
            arr_empty: false,

            show_selected_popup: false,
            arr_reset: false,

            error_message: false,
        }
    },

    methods: {
        check(){
            // console.log("Selected date:",this.schedulerSelectedDate);
            // let date_holder = this.schedulerSelectedDate;
            // console.log(date_holder);
            // if(this.schedulerSelectedDate != null){
            //     this.open_modal = true;
            //     this.sliced_holder = String(this.schedulerSelectedDate).slice(0, 15);
            //     console.log(this.sliced_holder);
            //     this.picked_date = this.sliced_holder;
            //     this.date_slicer = String(this.schedulerSelectedDate).slice(3, 15);
            //     this.date = this.date_slicer;
            // }
            console.log(this.schedulerSelectedDate);
        },

        resetArr(){
            this.sliced_holder2.splice(0, this.sliced_holder2.length); //we delete the parent array
            this.tempArr.splice(0, this.tempArr.length); //as well as the child array
            this.length_ofArr -= this.length_ofArr; //we decrement the counter
            this.show_selected_popup = false; //we hide the counter UI

            this.arr_reset = true; //this is used to flag a function

        },

        close_error_msg(){
            this.error_message = false;
        },

        handleEvent(evenData) {
            this.schedulerSelectedDate = evenData.schedulerSelectedDate;
            console.log(this.schedulerSelectedDate);
            let values = Object.values(evenData);
            console.log(values);
            this.sliced_holder2.push(String(values).slice(3, 15));
            this.tempArr = [...new Set(this.sliced_holder2)];
            console.log(this.sliced_holder2);
            console.log(this.tempArr);
            this.dateToday = String(this.dateToday).slice(0, 15);
            this.length_ofArr = this.tempArr.length;
            // console.log(this.dateToday);
            // console.log(this.sliced_holder2);
            this.open_modal = true;
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();

            if(day <= 9){
                var new_day = day.toString().padStart(2, '0');
            } else {
                new_day = day.toString();
            }
            // console.log(new_day);

            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];

            this.newdate = " " + monthNames[month - 1] + " " + new_day + " " + year;
            console.log(this.newdate);

            //check first if sliced holder array contains newdate(date today)
            if(this.sliced_holder2.includes(this.newdate)) {
                if(this.length_ofArr === 1){  //this line checks if 1st condition is true and if the length_ofArr is equal to 1
                    this.show_selected_popup = false; //this prevents the system from showing the count
                }

                //in this case if the 1st statement is true, we will remove the date today since we are not allowed to book/reserve today(the date today)
                let indexToRemoveHolder2 = this.sliced_holder2.indexOf(this.newdate); //we fetched the index of the value of the date today insde sliced_holder2 and tempArr
                let indexToRemovetempArr = this.tempArr.indexOf(this.newdate);
                this.sliced_holder2.splice(indexToRemoveHolder2, 1); //we removed the values from the array using splace, splice(start, count)
                this.tempArr.splice(indexToRemovetempArr, 1);
                // console.log(this.tempArr);
                this.length_ofArr = this.tempArr.length;
                this.error_message = true;
            } else {
                if(this.length_ofArr >= 1){ //we check here if length_ofArr is greater than or equal to 1 to allow multiple selection of dates
                    this.show_selected_popup = true; //this will return a counter UI
                    if(this.arr_reset === true){ // this boolean arr_reset was thrown by resetArr() function.
                        this.sliced_holder2.splice(0, this.sliced_holder2.length);
                        this.tempArr.splice(0, this.tempArr.length);
                        this.arr_reset = false;
                        this.$router.push({name: 'reload'}); // we push to reload page to reload the page smoothly.
                    }
                }
            }
            // this.flag = 1;
        },

        handleTime(t) {
            this.time2 = t.time2;
            let values = Object.values(t);
            this.time = String(values).slice(0, 7);
            this.endTime = parseInt(this.timeHolder);
            // console.log(this.concatTime);
            // let finalEnd = this.endTime <= 10 ? String(this.endTime).slice(0, 3)+':' : String(this.endTime).slice(0, 2);
            // this.concatTime = `${this.timeHolder} - ${finalEnd}`;
            // console.log(finalEnd);
            // console.log(this.concatTime);
            console.log(this.timeHolder);
        },

        nextPage(){
            this.next_page = true;
            this.next_page_1 = false;
        },

        setAppointment(){
            const number = parseInt(this.mobile_number);

            console.log("Full Name: ", this.profileFullName);
            console.log("Email: ", this.user_email);
            console.log("Mobile Number: ", number);
            console.log("Time: ", this.time);
            console.log("Org: ", this.org);
            console.log("Dept: ", this.dept);
            console.log("Venue: ", this.venue);
            console.log("Description: ", this.desc);
            console.log("Semester: ", this.semester);
            console.log("Remarks: ", this.remarks);

            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();

            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            this.newdate = monthNames[month - 1] + " " + day + ", " + year;
            const new_month = monthNames[month - 1];
            console.log(this.newdate);

            let i_q = document.querySelectorAll('[id="input_q"]');
            const q_i = [...i_q].map(input => input.value);
            console.log("Values of Q: ", q_i);
            for(let i = 0; i < q_i.length; i++){
                this.equipment_list.push(parseInt(q_i[i]));
            }

            const equip_obj = JSON.stringify(this.equipment_list);
            const equip_arr = equip_obj.split(",");
            

            if (this.tempArr.length > 1) {
                for (let i = 0; i < this.tempArr.length; i++) {
                    const fileUploadControl = $("#FileUpload")[0];
                    console.log(fileUploadControl);
                    if (fileUploadControl.files.length > 0) {
                        const file = fileUploadControl.files[0];
                        const name = file.name;
                        console.log("Upload: ", name);

                        const parseFile = new Parse.File(name, file);
                        parseFile.save().then((parseFile) => {
                            const Request = Parse.Object.extend("Request");
                            const request = new Request();

                            request.set("date", this.tempArr[i]);
                            request.set("full_name", this.profileFullName);
                            request.set("email", this.user_email);
                            request.set("mobile_number", number);
                            request.set("time_start", this.time);
                            request.set("time_end", this.timeEnd);
                            request.set("org", this.org);
                            request.set("dept", this.dept);
                            request.set("venue", this.venue);
                            request.set("semester", this.semester);
                            request.set("academic_year", this.acad_year);
                            request.set("remarks", this.remarks);
                            request.set("description", this.desc);
                            request.set("filename", name);
                            request.set("equipments", equip_arr);
                            request.set("filUploaded", parseFile);
                            request.set("url", parseFile._url);
                            request.set("status", "Pending");
                            request.set("month", new_month);
                            request.set("day", day);
                            request.set("year", year);

                            request.save().then((request) => {
                                console.log("Success", request);
                                this.open_modal = false;
                                this.date = '';
                                this.mobile_number = '';
                                this.time = '';
                                this.org = '';
                                this.dept = '';
                                this.venue = '';
                                this.semester = '';
                                this.remarks = '';
                                this.desc = '';
                                return request.save();
                            });
                        })
                    }
                } //End of loop
            }
            else{
                for (let i = 0; i < this.tempArr.length; i++){
                    const fileUploadControl = $("#FileUpload")[0];
                    console.log(fileUploadControl);
                    if (fileUploadControl.files.length > 0) {
                        const file = fileUploadControl.files[0];
                        const name = file.name;
                        console.log("Upload: ", name);

                        const parseFile = new Parse.File(name, file);
                        parseFile.save().then((parseFile) => {
                            const Request = Parse.Object.extend("Request");
                            const request = new Request();

                            request.set("date", this.tempArr[i]);
                            request.set("full_name", this.profileFullName);
                            request.set("email", this.user_email);
                            request.set("mobile_number", number);
                            request.set("time_start", this.time);
                            request.set("time_end", this.timeEnd);
                            request.set("org", this.org);
                            request.set("dept", this.dept);
                            request.set("venue", this.venue);
                            request.set("semester", this.semester);
                            request.set("academic_year", this.acad_year);
                            request.set("remarks", this.remarks);
                            request.set("description", this.desc);
                            request.set("filename", name);
                            request.set("equipments", equip_arr);
                            request.set("filUploaded", parseFile);
                            request.set("url", parseFile._url);
                            request.set("status", "Pending");
                            request.set("month", new_month);
                            request.set("day", day);
                            request.set("year", year);

                            request.save().then((request) => {
                                console.log("Success", request);
                                this.open_modal = false;
                                this.date = '';
                                this.mobile_number = '';
                                this.time = '';
                                this.org = '';
                                this.dept = '';
                                this.venue = '';
                                this.semester = '';
                                this.remarks = '';
                                this.desc = '';
                                return request.save();
                            });
                        })
                    }
                }
            }
        // this.close_modal();
        this.$router.go(-2);
        },

        nextPage_1(){
            this.next_page_1 = true;
        },

        back_btn(){
            this.next_page = false;
            this.next_page_1 = false;
        },

        trigger_modal(){
            this.open_modal = true;
        },

        close_modal(){
            this.open_modal = false;
            this.next_page = false;
            this.date = '';
            // this.mobile_number = '';
            this.time = '';
            this.org = '';
            this.dept = '';
            this.venue = '';
            this.semester = '';
            this.remarks = '';
            this.desc = '';
            this.timeStart = '';
            this.timeEnd = '';
            this.timeHolder = '';
            this.tempArr = [];
            console.log(this.tempArr);
        },

        reservationPage(){
            this.$router.push({name: 'reservation'})
        },

        homePage(){
            this.$router.push({name: 'adminHome'})
        },
    },

    mounted: async function(){
        gapi.load("client:auth2", function () {
            gapi.auth2.getAuthInstance();
        });

        const googleUser = gapi.auth2.getAuthInstance();
        this.google_user = googleUser;
        console.log(googleUser);
        this.profileFullName = googleUser.currentUser.get().getBasicProfile().getName();
        this.user_email = googleUser.currentUser.get().getBasicProfile().getEmail();
        console.log(this.profileFullName);
        this.gapiLoaded = true;

        if(!googleUser) {
            this.$router.push({name: 'Login'});
        }
            
        const Equipments = Parse.Object.extend("Equipments");
        const equipments = new Parse.Query(Equipments);
        const equip = await equipments.find();
        for(let i = 0; i < equip.length; i++){
            this.equipments_arr.push({
                items: equip[i].get("Items"),
                q:"Quantity Available: " + ' ' + equip[i].get("Quantity"),
                num: equip[i].get("Quantity"),
            })
        }
    }
}
</script>

<style scoped>
.scrollable{
  overflow-y: auto;
  max-height: 580px;
}

#warning_pop{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.507);
}
</style>
