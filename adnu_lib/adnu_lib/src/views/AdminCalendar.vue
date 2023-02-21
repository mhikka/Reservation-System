<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <SidePanelAdmin>
                <hr>
            </SidePanelAdmin>
            <div class="col text-start">
                <h1 class="font-weight-light pt-4 ms-3">
                    Reservation
                </h1>
                  
                <hr style="background-color: black; height: 2px;">
                <div @click="check" v-if="gapiLoaded === true">
                    <ejs-schedule height="575px" currentView="Month" v-model:selectedDate="schedulerSelectedDate" id="calendar">
                    </ejs-schedule>
                </div>
                <div v-else>
                    <div class="float-start">
                        Please wait ...
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="page-footer fluid-bottom border-top border-secondary" style="background-color: #414141;">
        <div class="footer-copyright text-start py-3 text-light ms-2">
            <small>
                © 2023 Copyright:
            <a href="/" class="text-light"> Ateneo de Naga University</a>
            </small>
        </div>
    </footer>

    <div v-if="open_modal === true">
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
                                    <h6 class="fw-bold">{{picked_date}}</h6>
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
                                        <label for="exampleInputEmail1" class="float-start">Date</label>
                                        <input v-model="date" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the date here">
                                    </div>
                                    <div class="form-group pb-2">
                                        <label for="exampleInputPassword1" class="float-start">Time</label>
                                        <input v-model="time" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the time here (E.g. 1:00 AM - 2:00 PM)">
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
                                <button class="btn btn-primary float-start" type="submit" @click="setAppointment">
                                    Set Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminModal>
    </div>
</template>

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import AdminModal from "@/components/AdminModal.vue";
import SidePanelAdmin from "@/components/SidePanelAdmin.vue";
import Parse from 'parse';
import $ from 'jquery';

const gapi = window.gapi;
export default{
    components: {
        'ejs-schedule': ScheduleComponent,
        AdminModal, SidePanelAdmin,
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
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
        }
    },

    methods: {
        check(){
            // console.log("Selected date:",this.schedulerSelectedDate);
            // let date_holder = this.schedulerSelectedDate;
            // console.log(date_holder);
            if(this.schedulerSelectedDate != null){
                this.open_modal = true;
                this.sliced_holder = String(this.schedulerSelectedDate).slice(0, 15);
                console.log(this.sliced_holder);
                this.picked_date = this.sliced_holder;
                this.date_slicer = String(this.schedulerSelectedDate).slice(3, 15);
                this.date = this.date_slicer;
            }
        },

        nextPage(){
            this.next_page = true;
            this.next_page_1 = false;
        },

        setAppointment(){
            console.log("Full Name: ", this.profileFullName);
            console.log("Email: ", this.user_email);
            console.log("Mobile Number: ", this.mobile_number);
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
            
            const fileUploadControl = $("#FileUpload")[0];
            console.log(fileUploadControl);
            if(fileUploadControl.files.length > 0){
                const file = fileUploadControl.files[0];
                const name = file.name;
                console.log("Upload: ", name);

                const parseFile = new Parse.File(name, file);
                parseFile.save().then((parseFile) => {
                    const Request = Parse.Object.extend("Request");
                    const request = new Request();

                    request.set("date", this.date);
                    request.set("full_name", this.profileFullName);
                    request.set("email", this.user_email);
                    request.set("mobile_number", this.mobile_number);
                    request.set("time", this.time);
                    request.set("org", this.org);
                    request.set("dept", this.dept);
                    request.set("venue", this.venue);
                    request.set("semester", this.semester);
                    request.set("academic_year", this.acad_year);
                    request.set("remarks", this.remarks);
                    request.set("description", this.desc);
                    request.set("filename", name);
                    request.set("equipments", equip_obj);
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
        },

        reservationPage(){
            this.$router.push({name: 'reservation'})
        },

        homePage(){
            this.$router.push({name: 'adminHome'})
        },
    },

    mounted: async function(){
        try{
            gapi.load("client:auth2", function () {
                gapi.auth2.getAuthInstance();
            });

            const googleUser = gapi.auth2.getAuthInstance();
            this.google_user = googleUser;
            console.log(googleUser);
            this.profileFullName = googleUser.currentUser.get().getBasicProfile().getName();
            this.user_email = googleUser.currentUser.get().getBasicProfile().getEmail();
            console.log(this.profileFullName);

            if(googleUser){
                this.gapiLoaded = true;
            } else {
                this.$router.push({name: 'Login'});
            }
        } catch(error) {
            console.log(error);
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

<style>    
</style>
