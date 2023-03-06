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
                    Home
                </h1>
                <hr style="background-color: black; height: 2px;">
                <div class="row">
                    <div class="col pb-2">
                        <div class="card" style="height: auto;">
                            <div class="card-header text-start">
                                Request Dashboard
                            </div>
                            <div class="scrollable">
                                <div v-if="request_loaded === true">
                                    <div class="text-start p-2" v-for="details in request_arr.slice().reverse()" :key="details">    
                                        <div class="card" v-if="details.status === 'Unavailable'">
                                            <div class="card-body rounded text-light unvble" @click="open_modal(details.id)">
                                                <h4>{{details.status}}</h4>
                                                {{details.venue}}
                                            </div>
                                        </div>
                                        <div class="card" v-else-if="details.status === 'Approved'" @click="open_modal(details.id)">
                                            <div class="card-body rounded text-light apprv">
                                                <h4>{{details.status}}</h4>
                                                {{details.venue}}
                                            </div>
                                        </div>
                                        <div class="card" v-else-if="details.status === 'Pending'" @click="open_modal(details.id)">
                                            <div class="card-body rounded text-light pend">
                                                <h4>{{details.status}}</h4>
                                                <div class="row justify-content-between">
                                                    <div class="col-4">
                                                        {{details.venue}}
                                                    </div>
                                                    <div class="col-4 text-warning float-end">
                                                        <span>
                                                            <small>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                                </svg>
                                                                You have {{details.remaining}} day/s left to finalize the reservation
                                                            </small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <p class="p-3">
                                        No appointments have been made yet.
                                    </p>
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
            <small>
                © 2023 Copyright:
            <a href="/" class="text-light"> Ateneo de Naga University</a>
            </small>
        </div>
    </footer>

    <div v-if="pop === true">
        <AdminModal>
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-end">
                        <div class="col-sm pt-2">
                            <!-- <h4 class="fw-bold">Request</h4>
                            <hr stlye="background-color: black"> -->
                            <div class="row justify-content-end">
                                <div class="col-4">
                                    <h4 class="fw-bold">Request</h4>
                                    <hr stlye="background-color: black">
                                </div>
                                <div class="col-4">
                                    <button @click="close_modal" class="btn btn-outline-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="text-start" v-for="details in request_arr.slice().reverse()" :key="details">
                                <div class="card" v-if="details.status === 'Unavailable' && passed_id === details.id">
                                    <div class="card-body rounded text-light unvble">
                                        <h4 class="fw-bold">{{details.status}} | Event date: {{details.date}}</h4>
                                        <div class="pt-3 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="fw-bold">Venue</h5>
                                                </div>
                                                <div class="col">   
                                                    <h5 class="fw-bold">Time</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6>{{details.venue}}</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6>{{details.time_s}} - {{details.time_e}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-3">
                                            <h5 class="fw-bold">Description</h5>
                                            <p>{{details.desc}}</p>
                                        </div>

                                        <div class="pt-3 text-start">
                                            <h5 class="fw-bold">Equipments</h5>
                                            <ul style="list-style: none" v-for="equip in merged_arr" :key="equip">
                                                <li>
                                                    {{ equip.items }} - {{ equip.num }} pcs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" v-else-if="details.status === 'Approved' && passed_id === details.id">
                                    <div class="card-body rounded text-light apprv">
                                        <h4 class="fw-bold">{{details.status}} | Event date: {{details.date}}</h4>
                                        <div class="pt-3 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="fw-bold">Venue</h5>
                                                </div>
                                                <div class="col">   
                                                    <h5 class="fw-bold">Time</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6>{{details.venue}}</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6>{{details.time_s}} - {{details.time_e}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-3">
                                            <h5 class="fw-bold">Description</h5>
                                            <p>{{details.desc}}</p>
                                        </div>

                                        <div class="pt-3 text-start">
                                            <h5 class="fw-bold">Equipments</h5>
                                            <ul style="list-style: none" v-for="equip in merged_arr" :key="equip">
                                                <li>
                                                    {{ equip.items }} - {{ equip.num }} pcs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border border-none" v-if="details.status === 'Pending' && passed_id === details.id">
                                    <div class="card-body rounded text-light pend">
                                        <h4 class="fw-bold">{{details.status}} | Event date: {{details.date}}</h4>
                                        <span class="text-warning">
                                            <small>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg> You have {{details.remaining}} day/s left to finalize the reservation
                                            </small>
                                        </span>
                                        <div class="pt-3 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="fw-bold">Venue</h5>
                                                </div>
                                                <div class="col">   
                                                    <h5 class="fw-bold">Time</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6>{{details.venue}}</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6>{{details.time_s}} - {{details.time_e}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-3">
                                            <h5 class="fw-bold">Description</h5>
                                            <p>{{details.desc}}</p>
                                        </div>

                                        <div class="pt-3 text-start">
                                            <h5 class="fw-bold">Equipments</h5>
                                            <ul style="list-style: none" v-for="equip in merged_arr" :key="equip">
                                                <li>
                                                    {{ equip.items }} - {{ equip.num }} pcs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pt-2">
                                        <button class="btn btn-primary float-start" type="submit" @click="editPage(details.id)">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminModal>
    </div>


    <div v-if="edit_page === true">
        <AdminModal>
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-end" v-for="details in request_arr.slice().reverse()" :key="details">
                        <div v-if="passed_id === details.id">
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
                                        <h6 class="fw-bold">Edit Request</h6>
                                        <hr stlye="background-color: black">
                                    </div>
                                    <div class="col-4">
                                        <button @click="close_edit" class="btn btn-outline-none text-danger">
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
                                        <input v-model="details.fullName" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name here">
                                    </div>
                                    <div class="form-group pb-2">
                                        <label for="exampleInputPassword1" class="float-start">Email</label>
                                        <input v-model="details.email" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your email here">
                                    </div>
                                    <div class="form-group pb-5">
                                        <label for="exampleInputPassword1" class="float-start">Mobile Number</label>
                                        <input v-model="details.mobile_number" type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter your mobile number here">
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
                                            <input v-model="details.date" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the date here">
                                        </div>
                                        <div class="row g-3">
                                            <div class="form-group pb-2 col-sm">
                                                <label for="exampleInputPassword1" class="float-start">Starting Time</label>
                                                <input v-model="details.time_s" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the time here">
                                            </div>
                                            <div class="form-group pb-2 col-sm">
                                                    <label for="exampleInputPassword1" class="float-start">Ending Time</label>
                                                    <input v-model="details.time_e" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the ending time here">
                                            </div>
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Organization</label>
                                            <input v-model="details.org" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your organization here">
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Department</label>
                                            <input v-model="details.dept" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your department here">
                                        </div>
                                        <div class="form-group pb-3">
                                            <label for="exampleInputPassword1" class="float-start">Description</label>
                                            <input v-model="details.desc" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter description of your event here">
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Venue</label>
                                            <select name="plan" id="venue" v-model="details.venue" class="btn btn-sm border float-start">
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
                                            <select name="plan" id="venue" v-model="details.semester" class="btn btn-sm border float-start">
                                                <option value="" disabled selected>List of Semesters</option>
                                                <option value="1st Semester">1st Semester</option>
                                                <option value="2nd Semester"><small>2nd Semester</small></option>
                                                <option value="Intersession"><small>Intersession</small></option>
                                            </select>
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Form Remarks</label>
                                            <select name="plan" id="venue" v-model="details.remarks" class="btn btn-sm border float-start">
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
                                <h5 class="fw-bolder d-flex justify-content-start pb-2">Equipments</h5>
                                <div class="row" v-for="equip in merged_arr" :key="equip">
                                    <div class="col-4">
                                        <div>
                                            {{equip.items}}
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div>
                                            <input type="number" class="form-control" min="1" id="input_q" v-model="equip.num" placeholder="Enter quantity here">
                                        </div>
                                    </div>
                                </div>

                                <div class="col d-flex justify-content-start fw-bold pb-2 pt-3">
                                    <label for="formGroupExampleInput">Related Documents</label>
                                </div>
                                <div class="float-center" v-if="!details.fName">
                                    <div class="d-grid gap-2">
                                        <div class="p-3 mb-2 bg-light border border-primary text-primary rounded" disabled>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                            </svg>
                                            No related documents here.
                                        </div>
                                    </div>
                                </div>
                                <div class="float-center" v-else>
                                    <div class="d-grid gap-2">
                                        <div class="p-3 mb-2 bg-light border border-primary text-primary rounded">
                                            <a :href="details.url_link" style="text-decoration: none" class="ps-1" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                                </svg>
                                                {{ details.fName }}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="pt-5">
                                    <button class="btn btn-primary float-start" type="submit" 
                                    @click="updateAppointment(details.id, details.fullName, details.email, details.mobile_number, details.date, details.time, details.org, details.dept, details.venue, details.desc, details.equipments, details.status, details.remarks, details.semester)">
                                        Set Appointment
                                    </button>
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
import SidePanelUser from "@/components/SidePanelUser.vue";
import Parse from 'parse';

const gapi = window.gapi;
export default{
    components: {
        AdminModal, SidePanelUser,
    },

    data(){
        return{
            pop: false,
            request_arr: [],
            passed_id: '',
            edit_page: false,
            next_page: false,
            next_page_1: false,
            equipments_arr: [],

            fetched_val: [],
            val_arr: [],
            identifier: false,
            item_arr: [],

            merged_arr: [],
            equipment_list: [],

            profileFullName: '',
            user_email: '',
            gapiLoaded: false,

            request_loaded: false,

            newdate: '',
            pending_arr: [],
            file_date: '',

            three_day: '',
            remaining_days: '',
            id_holder: '',
            new_arr: [],
        }
    },
    methods: {
        reservationPage(){
            this.$router.push({name: 'reservation'})
        },

        open_modal(id){
            this.pop = true;
            console.log(id);
            this.passed_id = id;
            for(let i = 0; i < this.request_arr.length; i++){
                if(this.request_arr[i].id === this.passed_id){
                    this.fetched_val.push(this.request_arr[i].equipments);
                    this.identifier = true;
                }
            }

            if(this.identifier === true){
                const str = this.fetched_val;
                const arr = JSON.parse(str);
                for(let j = 0; j < arr.length; j++){
                    this.val_arr.push({
                        num: arr[j],
                    });
                }
                console.log(this.val_arr);

                for(let x = 0; x < this.equipments_arr.length; x++){
                    this.item_arr.push({
                        items: this.equipments_arr[x].items,
                    });
                }

                const items_ = this.item_arr;
                const quantities = this.val_arr;

                this.merged_arr = items_.map((item, index) => Object.assign({}, item, quantities[index]));
                console.log(this.merged_arr);
            }
        },

        close_modal(){
            this.passed_id = '';
            this.fetched_val.new_arr = [];
            this.merged_arr.new_arr = [];
            console.log(this.merged_arr);
            this.identifier = false;
            this.pop = false;
        },

        editPage(id){
            this.edit_page = true;
            this.pop = false;
            this.passed_id = id;
        },

        nextPage(){
            this.next_page = true;
            this.next_page_1 = false;
        },

        nextPage_1(){
            this.next_page_1 = true;
            for(let i = 0; i < this.request_arr.length; i++){
                if(this.request_arr[i].id === this.passed_id){
                    this.fetched_val.push(this.request_arr[i].equipments);
                    this.identifier = true;
                }
            }

            if(this.identifier === true){
                const str = this.fetched_val;
                const arr = JSON.parse(str);
                for(let j = 0; j < arr.length; j++){
                    this.val_arr.push({
                        num: arr[j],
                    });
                }
                console.log(this.val_arr);

                for(let x = 0; x < this.equipments_arr.length; x++){
                    this.item_arr.push({
                        items: this.equipments_arr[x].items,
                    });
                }

                const items_ = this.item_arr;
                const quantities = this.val_arr;

                this.merged_arr = items_.map((item, index) => Object.assign({}, item, quantities[index]));
                console.log(this.merged_arr);
            }
        },

        back_btn(){
            this.next_page = false;
            this.next_page_1 = false;
        },

        close_edit(){
            this.edit_page = false;
            this.next_page = false;
            this.passed_id = '';
        },

        async updateAppointment(id, name, email, number, date, time, org, dept, venue, desc, equip, status, remarks, semester){
            console.log(id);
            console.log(name);
            console.log(email);
            console.log(number);
            console.log(date);
            console.log(time);
            console.log(org);
            console.log(dept);
            console.log(venue);
            console.log(desc);
            
            console.log(status);
            console.log(remarks);
            console.log(semester);

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
            // console.log(q_i);
            for(let i = 0; i < q_i.length; i++){
                this.equipment_list.push(parseInt(q_i[i]));
            }

            const equip_obj = JSON.stringify(this.equipment_list);

            const Request = Parse.Object.extend("Request");
            const query = new Parse.Query(Request);

            query.equalTo("objectId", id);
            const reqQuery = await query.first();

            reqQuery.set("mobile_number", number);
            reqQuery.set("time", time);
            reqQuery.set("org", org);
            reqQuery.set("dept", dept);
            reqQuery.set("venue", venue);
            reqQuery.set("semester", semester);
            reqQuery.set("remakrs", remarks);
            reqQuery.set("description", desc);
            reqQuery.set("equipments", equip_obj);
            reqQuery.set("month", new_month);
            reqQuery.set("day", day);
            reqQuery.set("year", year);

            reqQuery.save().then((reqQuery) => {
                console.log("Successful", reqQuery);
                this.edit_page = false;
            });

        }
    },

    async created(){
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

        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            if(query[i].get("status") === 'Pending'){
                if(this.newdate === query[i].get("date")){
                    this.today_req_id = query[i].id;
                    console.log(this.today_req_id);
                    this.reject_id = true;
                }
            }

            if(this.reject_id === true){
                const Request = Parse.Object.extend("Request");
                const query = new Parse.Query(Request);

                query.equalTo("objectId", this.today_req_id);
                const reqQuery = await query.first();

                reqQuery.set("status", "Unavailable");
                reqQuery.set("remarks", "Final");

                reqQuery.save().then((reqQuery) => {
                    console.log("Successful", reqQuery);
                    this.edit_page = false;
                });
            }
        }
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

        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            if(this.profileFullName === query[i].get("full_name") && year === query[i].get("year")){
                if(day <= 9){
                    var new_day = day.toString().padStart(2, '0');
                } else {
                    new_day = day.toString();
                }

                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];
                this.newdate = " " + monthNames[month - 1] + " " + new_day + " " + year;
                this.file_date = year + "-" + new_day + "-" + month;
                var t_day = new Date(this.newdate);
                var b_day = new Date(query[i].get("date"));

                var diff = Math.abs(t_day.getTime() - b_day.getTime());
                var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                console.log(days);
                this.remaining_days = days;

                this.request_arr.push({
                    id: query[i].id,
                    date: query[i].get("date"),
                    fullName: query[i].get("full_name"),
                    email: query[i].get("email"),
                    mobile_number: query[i].get("mobile_number"),
                    time_s: query[i].get("time_start"),
                    time_e: query[i].get("time_end"),
                    orgDept: query[i].get("org_dept"),
                    org: query[i].get("org"),
                    dept: query[i].get("dept"),
                    venue: query[i].get("venue"),
                    desc: query[i].get("description"),
                    equipments: query[i].get("equipments"),
                    status: query[i].get("status"),
                    remarks: query[i].get("remarks"),
                    semester: query[i].get("semester"),
                    fName: query[i].get("filename"),
                    url_link: query[i].get("url"),
                    month: query[i].get("month"),
                    remaining: this.remaining_days,
                })
                this.request_loaded = true;
            }
        }

        // var dateObj = new Date();
        // var month = dateObj.getUTCMonth() + 1; //months from 1-12
        // var day = dateObj.getUTCDate();
        // var year = dateObj.getUTCFullYear();

        // if(day <= 9){
        //     var new_day = day.toString().padStart(2, '0');
        // } else {
        //     new_day = day.toString();
        // }
        // // console.log(new_day);

        // const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        // ];

        // // const monthNames_full = ["January", "February", "March", "April", "May", "June",
        // //     "July", "August", "September", "October", "November", "December"
        // // ];

        // this.newdate = " " + monthNames[month - 1] + " " + new_day + " " + year;
        // this.file_date = year + "-" + new_day + "-" + month;
        // console.log(this.newdate);
        // for(let x = 0; x < this.request_arr.length; x++){
        //     if(this.request_arr[x].status === 'Pending'){
        //         var t_day = new Date(this.newdate);
        //         var b_day = new Date(this.request_arr[x].date);

        //         var diff = Math.abs(t_day.getTime() - b_day.getTime());
        //         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        //         console.log(days);
        //         this.remaining_days = days;
        //         console.log(this.request_arr[x].id);
        //         if(days <= 7){
        //             this.id_holder = this.request_arr[x].id;
        //             this.pending_arr.push({
        //                 status: this.request_arr[x].status,
        //                 venue: this.request_arr[x].venue,
        //                 remaining_date: this.remaining_days,
        //             })
        //         }
        //     }
        // }

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

        console.log(this.request_arr);
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