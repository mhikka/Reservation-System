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
                <div class="row justify-content-between">
                    <div class="col-4">
                    <h1 class="font-weight-light pt-4 ms-3">
                            Reports
                    </h1>
                    </div>
                    <div class="col-4 pt-4 me-4">
                    <button class="btn btn-outline-primary float-end mb-4" type="submit" @click="downloadLogs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
                            <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                            <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                        </svg>
                        Reservation Logs
                    </button>
                    </div>
                </div>
                <hr style="background-color: black; height: 2px;">
                <div class="row">
                    <div class="col">
                        <div class="card" style="height: auto;">
                            <div class="card-header text-start">
                                Logs
                                <lord-icon
                                    src="https://cdn.lordicon.com/qmuwmmnl.json"
                                    trigger="loop"
                                    colors="primary:#121331"
                                    state="loop"
                                    style="width: 22px;height: 22px" class="pt-1">
                                </lord-icon>
                            </div>
                            <div class="scrollable">
                                <div class="text-start p-2">
                                    <div v-for="details in request_arr.slice().reverse()" :key="details">
                                        <div class="card pb-2" v-if="details.status === 'Approved'">
                                            <div class="card-body rounded text-light apprv">
                                                <h4>{{ details.status }}</h4>
                                                {{ details.venue }}
                                            </div>
                                        </div>
                                        <div class="card pb-2" v-else-if="details.status === 'Unavailable'">
                                            <div class="card-body rounded text-light unvble" @click="open_modal">
                                                <h4>{{ details.status }}</h4>
                                                {{ details.venue }}
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
    <footer class="page-footer fluid-bottom border-top border-secondary" style="background-color: #414141;">
        <div class="footer-copyright text-start py-3 text-light ms-2">
            ?? 2023 Copyright:
            <a href="#" class="text-light"> Ateneo de Naga University</a>
        </div>
    </footer>

    <div v-if="open_modal === true">
        <AdminModal>
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="container">
                            <div class="row pt-3 justify-content-end">
                                <div class="col-4 pt-2">
                                    <h6 class="fw-bold">Reports</h6>
                                    <hr stlye="background-color: black">
                                </div>
                                <div class="col-4">
                                    <button @click="close_modal" class="btn btn-outline-none text-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <div class="float-start ps-2 pb-2">
                                        <div>
                                            <div class="form-group pb-5 m-50">
                                                <label for="exampleInputPassword1" class="float-start me-3 fw-bold">Filter by:</label>
                                                <select name="plan" id="venue" v-model="filter" class="btn btn-sm border float-start">
                                                    <option value="" disabled selected>Filter</option>
                                                    <option value="Venue">Venue</option>
                                                    <option value="Semester"><small>Semester</small></option>
                                                    <option value="Status"><small>Status</small></option>
                                                    <option value="Month"><small>Month & Year</small></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="float-start">
                                        <div v-if="filter === 'Venue'">
                                            <div class="form-group pb-5 m-50">
                                                <label for="exampleInputPassword1" class="float-start me-3">Venue:</label>
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
                                        </div>
                                        <div v-else-if="filter === 'Semester'">
                                            <div class="form-group pb-5 m-50">
                                                <label for="exampleInputPassword1" class="float-start me-3">Semester:</label>
                                                <select name="plan" id="venue" v-model="semester" class="btn btn-sm border float-start">
                                                    <option value="" disabled selected>List of Semesters</option>
                                                    <option value="1st Semester">1st Semester</option>
                                                    <option value="2nd Semester"><small>2nd Semester</small></option>
                                                    <option value="Intersession"><small>Intersession</small></option>
                                                </select>
                                            </div>
                                            <label for="inputEmail3" class="float-start">Academic Year: </label>
                                            <div class="col-8 pb-2">
                                                <input type="text" v-model="acad_year" class="form-control form-control-sm" id="inputEmail3" placeholder="(E.g. 2023-2024)">
                                            </div>
                                        </div>
                                        <div v-else-if="filter === 'Status'">
                                            <div class="form-group pb-5 m-50">
                                                <label for="exampleInputPassword1" class="float-start me-3">Status:</label>
                                                <select name="plan" id="venue" v-model="status" class="btn btn-sm border float-start">
                                                    <option value="" disabled selected>Types of Request status</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Pending"><small>Pending</small></option>
                                                    <option value="Unavailable"><small>Unavailable</small></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div v-else-if="filter === 'Month'">
                                            <label for="exampleInputPassword1" class="float-start me-3">Month:</label>
                                            <select name="plan" id="venue" v-model="month" class="btn btn-sm border float-start">
                                                <option value="" disabled selected>Select a Month</option>
                                                <option value="January">January</option>
                                                <option value="February"><small>February</small></option>
                                                <option value="March"><small>March</small></option>
                                                <option value="April"><small>April</small></option>
                                                <option value="May"><small>May</small></option>
                                                <option value="June"><small>June</small></option>
                                                <option value="July"><small>July</small></option>
                                                <option value="August"><small>August</small></option>
                                                <option value="September"><small>September</small></option>
                                                <option value="October"><small>October</small></option>
                                                <option value="November"><small>November</small></option>
                                                <option value="December"><small>December</small></option>
                                            </select>
                                            <br>
                                            <label for="inputEmail3" class="float-start">Year: </label>
                                            <div class="col-8 pb-2">
                                                <input type="number" v-model="input_year" class="form-control form-control-sm" id="inputEmail3" placeholder="Year">
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="float-start">
                                                <p class="text-danger text-start">
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/lfqzieho.json"
                                                        trigger="loop"
                                                        delay="2000"
                                                        colors="primary:#dc3545"
                                                        style="width: 18px;height: 18px" class="pt-1">
                                                    </lord-icon> Important note: 
                                                    All of the unfiltered reports will be generated when you click the generate button.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="filter === 'Venue'">
                                    <div class="float-center">
                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="dl_venue">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                                </svg>
                                                Generate report logs
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="filter === 'Semester'">
                                    <div class="float-center">
                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="dl_semester">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                                </svg>
                                                Generate report logs
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="filter === 'Status'">
                                    <div class="float-center">
                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="dl_status">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                                </svg>
                                                Generate report logs
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="filter === 'Month'">
                                    <div class="float-center">
                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="dl_month">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                                </svg>
                                                Generate report logs
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="float-center">
                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="dl_Report">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                                </svg>
                                                Generate report logs
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminModal>
    </div>
    
</template>

<script>
import AdminModal from "@/components/AdminModal.vue";
import SidePanelAdmin from "@/components/SidePanelAdmin.vue";
import Swal from "sweetalert2";
import Parse from 'parse';

const gapi = window.gapi;
export default{
    components: {
        SidePanelAdmin, AdminModal,
    },

    data(){
        return {
            request_arr: [],
            equipments_arr: [],
            open_modal: false,
            allowed_dl: false,
            venue: '',
            semester: '',
            status: '',
            filter: '',
            month: '',
            reports_arr: [],

            var_venue: 'venue',
            var_semester: 'semester',
            var_status: 'status',

            venue_report: [],
            semester_report: [],
            status_report: [],
            month_year_report: [],

            input_year: '',
            acad_year: '',

            var_month: 'month',
            var_year: 'year',
            var_ay: 'academic_year',
        }
    },

    methods: {
        downloadLogs(){
            // alert("Clicked!");
            this.open_modal = true;
        },

        close_modal(){
            this.open_modal = false;
            this.filter = '';
            this.status = '';
            this.semester = '';
            this.venue = '';
            this.month = '';
            this.input_year = '';
            this.acad_year = '';
        },

        dl_Report(){
            this.allowed_dl = true;
            this.generateResult();
        },

        //create a new function then call that function on the mounted (Reason: this will prevent the system from throwing errors)
        //the requested arrays for download should be loaded ASAP to avoid errors
        dl_venue(){
            const Request = Parse.Object.extend("Request");
            const request = new Parse.Query(Request);
            request.equalTo(this.var_venue, this.venue);
            request.find().then((query) => {
                for(let i = 0; i < query.length; i++){
                    const obj = query[i];
                    this.venue_report.push([obj.get("date"), obj.get("full_name"), 
                    obj.get("email"), obj.get("mobile_number"), obj.get("time_start") + " - " + obj.get("time_end"), 
                    obj.get("org"), obj.get("dept"), obj.get("venue"), obj.get("semester"), 
                    obj.get("remarks"), obj.get("description"), obj.get("status"), obj.get("academic_year")],);
                }
            });

            if(this.venue_report.length != 0){
                this.venueReport();
            }
        },

        dl_semester(){
            const Request = Parse.Object.extend("Request");
            const request = new Parse.Query(Request);
            request.equalTo(this.var_semester, this.semester);
            request.equalTo(this.var_ay, this.acad_year);
            request.find().then((query) => {
                for(let i = 0; i < query.length; i++){
                    const obj = query[i];
                    this.semester_report.push([obj.get("date"), obj.get("full_name"), 
                    obj.get("email"), obj.get("mobile_number"), obj.get("time_start") + " - " + obj.get("time_end"), 
                    obj.get("org"), obj.get("dept"), obj.get("venue"), obj.get("semester"), 
                    obj.get("remarks"), obj.get("description"), obj.get("status"), obj.get("academic_year")],);
                }
            });

            if(this.semester_report.length != 0){
                this.semesterReport();
            }
        },

        dl_status(){
            const Request = Parse.Object.extend("Request");
            const request = new Parse.Query(Request);
            request.equalTo(this.var_status, this.status);
            request.find().then((query) => {
                for(let i = 0; i < query.length; i++){
                    const obj = query[i];
                    this.status_report.push([obj.get("date"), obj.get("full_name"), 
                    obj.get("email"), obj.get("mobile_number"), obj.get("time_start") + " - " + obj.get("time_end"), 
                    obj.get("org"), obj.get("dept"), obj.get("venue"), obj.get("semester"), 
                    obj.get("remarks"), obj.get("description"), obj.get("status"), obj.get("academic_year")],);
                }
            });

            if(this.status_report.length != 0){
                this.statusReport();
            }
        },

        dl_month(){
            try{
                const Request = Parse.Object.extend("Request");
                const request = new Parse.Query(Request);
                request.equalTo(this.var_month, this.month);
                request.equalTo(this.var_year, this.input_year);

                // const new_req = await request.find();
                // console.log(new_req);
                request.find().then((query) => {
                    for(let i = 0; i < query.length; i++){
                        // if(this.month === query[i].get("month") && this.input_year === query[i].get("year")){
                            const obj = query[i];
                            this.month_year_report.push([obj.get("date"), obj.get("full_name"), 
                            obj.get("email"), obj.get("mobile_number"), obj.get("time_start") + " - " + obj.get("time_end"), 
                            obj.get("org"), obj.get("dept"), obj.get("venue"), obj.get("semester"), 
                            obj.get("remarks"), obj.get("description"), obj.get("status"), obj.get("academic_year")],);
                        // }
                    }
                });

                console.log(this.month_year_report);
                if(this.month_year_report.length != 0){
                    this.month_yearReport();
                }
                
            } catch(error){
                console.log(error);
            }
        },

        venueReport(){
            var arrResults = [
                ["Date", "Full Name", "Email", "Mobile Number", "Time", "Organization", "Department", "Venue", "Semester", "Remarks", "Description", "Status", "Academic Year"],
            ];
            console.log(this.venue_report.length);
            if(this.venue_report.length != 0){
                for(let x = 0; x < this.venue_report.length; x++){
                    arrResults.push(this.venue_report[x]);
                    console.log(this.venue_report[x]);
                }
                console.log(arrResults);
                var CsvString = '';
                arrResults.forEach(function(RowItem, RowIndex) {
                    RowItem.forEach(function(ColItem, ColIndex) {
                        CsvString += ColItem + ',';
                        console.log(RowIndex, ColIndex);
                    });
                    CsvString += "\r\n";
                });

                let classname = "compiled";
                let classsection = "log";
                let combinedFilename = classname.concat("-", classsection);
                let fileExtension = "generated.csv";
                let finalFilename = combinedFilename.concat("_", fileExtension);
                CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                var x = document.createElement("A");
                x.setAttribute("href", CsvString );
                x.setAttribute("download", finalFilename);
                document.body.appendChild(x);
                x.click();
                this.close_modal();
            } else {
                Swal.fire({
                    icon: 'error', title: 'Unable to download, Please try again', showConfirmButton: false, timer: 2000,
                    timerProgressBar: true,
                });
                this.close_modal();
            }
        },

        semesterReport(){
            var arrResults = [
                ["Date", "Full Name", "Email", "Mobile Number", "Time", "Organization", "Department", "Venue", "Semester", "Remarks", "Description", "Status", "Academic Year"],
            ];
            console.log(this.semester_report);
            if(this.semester_report.length != 0){
                for(let x = 0; x < this.semester_report.length; x++){
                    arrResults.push(this.semester_report[x]);
                }
                console.log(arrResults);
                var CsvString = '';
                arrResults.forEach(function(RowItem, RowIndex) {
                    RowItem.forEach(function(ColItem, ColIndex) {
                        CsvString += ColItem + ',';
                        console.log(RowIndex, ColIndex);
                    });
                    CsvString += "\r\n";
                });

                let classname = "compiled";
                let classsection = "log";
                let combinedFilename = classname.concat("-", classsection);
                let fileExtension = "generated.csv";
                let finalFilename = combinedFilename.concat("_", fileExtension);
                CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                var x = document.createElement("A");
                x.setAttribute("href", CsvString );
                x.setAttribute("download", finalFilename);
                document.body.appendChild(x);
                x.click();
                this.close_modal();
            } else {
                Swal.fire({
                    icon: 'error', title: 'Unable to download, Please try again', showConfirmButton: false, timer: 2000,
                    timerProgressBar: true,
                });
                this.close_modal();
            }
                
        },

        statusReport(){
            var arrResults = [
                ["Date", "Full Name", "Email", "Mobile Number", "Time", "Organization", "Department", "Venue", "Semester", "Remarks", "Description", "Status", "Academic Year"],
            ];
            console.log(this.status_report);
            if(this.status_report.length != 0){
                for(let x = 0; x < this.status_report.length; x++){
                    arrResults.push(this.status_report[x]);
                }
                console.log(arrResults);
                var CsvString = '';
                arrResults.forEach(function(RowItem, RowIndex) {
                    RowItem.forEach(function(ColItem, ColIndex) {
                        CsvString += ColItem + ',';
                        console.log(RowIndex, ColIndex);
                    });
                    CsvString += "\r\n";
                });

                let classname = "compiled";
                let classsection = "log";
                let combinedFilename = classname.concat("-", classsection);
                let fileExtension = "generated.csv";
                let finalFilename = combinedFilename.concat("_", fileExtension);
                CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                var x = document.createElement("A");
                x.setAttribute("href", CsvString );
                x.setAttribute("download", finalFilename);
                document.body.appendChild(x);
                x.click();
                this.close_modal();
            } else {
                Swal.fire({
                    icon: 'error', title: 'Unable to download, Please try again', showConfirmButton: false, timer: 2000,
                    timerProgressBar: true,
                });
                this.close_modal();
            }
        },

        generateResult(){
            if(this.allowed_dl === true){
                var arrResults = [
                    ["Date", "Full Name", "Email", "Mobile Number", "Time", "Organization", "Department", "Venue", "Semester", "Remarks", "Description", "Status", "Academic Year"],
                ];
                console.log(this.reports_arr)
                for(let i = 0; i < this.reports_arr.length; i++){
                    arrResults.push(this.reports_arr[i]);
                }
                var CsvString = '';
                arrResults.forEach(function(RowItem, RowIndex) {
                    RowItem.forEach(function(ColItem, ColIndex) {
                        CsvString += ColItem + ',';
                        console.log(RowIndex, ColIndex);
                    });
                    CsvString += "\r\n";
                });

                let classname = "compiled";
                let classsection = "log";
                let combinedFilename = classname.concat("-", classsection);
                let fileExtension = "generated.csv";
                let finalFilename = combinedFilename.concat("_", fileExtension);
                CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                var x = document.createElement("A");
                x.setAttribute("href", CsvString );
                x.setAttribute("download", finalFilename);
                document.body.appendChild(x);
                x.click();
                Swal.fire({
                    icon: 'success', title: 'Report Downloaded!', showConfirmButton: false, timer: 2000,
                    timerProgressBar: true,
                });
                
                this.close_modal();
            }
        },

        month_yearReport(){
            var arrResults = [
                ["Date", "Full Name", "Email", "Mobile Number", "Time", "Organization", "Department", "Venue", "Semester", "Remarks", "Description", "Status", "Academic Year"],
            ];
            console.log(this.month_year_report);
            if(this.month_year_report.length != 0){
                for(let x = 0; x < this.month_year_report.length; x++){
                    arrResults.push(this.month_year_report[x]);
                }
                console.log(arrResults);
                var CsvString = '';
                arrResults.forEach(function(RowItem, RowIndex) {
                    RowItem.forEach(function(ColItem, ColIndex) {
                        CsvString += ColItem + ',';
                        console.log(RowIndex, ColIndex);
                    });
                    CsvString += "\r\n";
                });

                let classname = "compiled";
                let classsection = "log";
                let combinedFilename = classname.concat("-", classsection);
                let fileExtension = "generated.csv";
                let finalFilename = combinedFilename.concat("_", fileExtension);
                CsvString = "data:application/csv," + encodeURIComponent(CsvString);
                var x = document.createElement("A");
                x.setAttribute("href", CsvString );
                x.setAttribute("download", finalFilename);
                document.body.appendChild(x);
                x.click();
                this.close_modal();
            } else {
                Swal.fire({
                    icon: 'error', title: 'Unable to download, Please try again', showConfirmButton: false, timer: 2000,
                    timerProgressBar: true,
                });
                this.close_modal();
            }
        }
    },

    mounted: async function(){
        gapi.load("client:auth2", function () {
            gapi.auth2.getAuthInstance();
        });

        const googleUser = gapi.auth2.getAuthInstance();
        console.log(googleUser);

        if(!googleUser){
            this.$router.push({name: 'Login'});
        }

        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var year = dateObj.getUTCFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            var new_month = monthNames[month - 1];
            if(query[i].get("month") === new_month && query[i].get("year") === year){
                this.request_arr.push({
                    id: query[i].id,
                    date: query[i].get("date"),
                    fullName: query[i].get("full_name"),
                    email: query[i].get("email"),
                    mobile_number: query[i].get("mobile_number"),
                    time: query[i].get("time"),
                    orgDept: query[i].get("org_dept"),
                    org: query[i].get("org"),
                    dept: query[i].get("dept"),
                    venue: query[i].get("venue"),
                    desc: query[i].get("description"),
                    equipments: query[i].get("equipments"),
                    status: query[i].get("status"),
                    remarks: query[i].get("remarks"),
                    semester: query[i].get("semester"),
                })
            }

            this.reports_arr.push([query[i].get("date"), query[i].get("full_name"), 
            query[i].get("email"), query[i].get("mobile_number"), query[i].get("time_start") + " - " + query[i].get("time_end"), 
            query[i].get("org"), query[i].get("dept"), query[i].get("venue"), query[i].get("semester"), 
            query[i].get("remarks"), query[i].get("description"), query[i].get("status"), query[i].get("academic_year")],);
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
  max-height: 525px;
}

.pend{
    background-color: #003E6F;
}

.apprv{
    background-color: #00588C;
}

.unvble{
    background-color: #C3C3C9;
}

</style>