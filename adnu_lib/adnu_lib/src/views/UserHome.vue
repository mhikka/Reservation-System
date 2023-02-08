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
                                <div class="text-start p-2" v-for="details in request_arr.slice().reverse()" :key="details">
                                    <div class="card" v-if="details.status === 'Unavailable'">
                                        <div class="card-body bg-danger rounded text-light" @click="open_modal(details.id)">
                                            <h4>{{details.status}}</h4>
                                            {{details.venue}}
                                        </div>
                                    </div>
                                    <div class="card" v-else-if="details.status === 'Approved'" @click="open_modal(details.id)">
                                        <div class="card-body bg-primary rounded text-light">
                                            <h4>{{details.status}}</h4>
                                            {{details.venue}}
                                        </div>
                                    </div>
                                    <div class="card" v-else-if="details.status === 'Pending'" @click="open_modal(details.id)">
                                        <div class="card-body bg-secondary rounded text-light">
                                            <h4>{{details.status}}</h4>
                                            {{details.venue}}
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
                                    <div class="card-body bg-danger rounded text-light" @click="open_modal">
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
                                                    <h6>{{details.time}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-3">
                                            <h5 class="fw-bold">Description</h5>
                                            <p>{{details.desc}}</p>
                                        </div>

                                        <div class="pt-3 text-start">
                                            <h5 class="fw-bold">Equipments</h5>
                                            <ul style="list-style: none">
                                                <li>
                                                    Microphone - 4pcs
                                                </li>
                                                <li>
                                                    Speakers - 3pcs
                                                </li>
                                                <li>
                                                    Mic stand - 10pcs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" v-else-if="details.status === 'Approved' && passed_id === details.id">
                                    <div class="card-body bg-primary rounded text-light" @click="open_modal">
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
                                                    <h6>{{details.time}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-3">
                                            <h5 class="fw-bold">Description</h5>
                                            <p>{{details.desc}}</p>
                                        </div>

                                        <div class="pt-3 text-start">
                                            <h5 class="fw-bold">Equipments</h5>
                                            <ul style="list-style: none">
                                                <li>
                                                    Microphone - 4pcs
                                                </li>
                                                <li>
                                                    Speakers - 3pcs
                                                </li>
                                                <li>
                                                    Mic stand - 10pcs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border border-none" v-if="details.status === 'Pending' && passed_id === details.id">
                                    <div class="card-body bg-secondary rounded text-light" @click="open_modal">
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
                                                    <h6>{{details.time}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-3">
                                            <h5 class="fw-bold">Description</h5>
                                            <p>{{details.desc}}</p>
                                        </div>

                                        <div class="pt-3 text-start">
                                            <h5 class="fw-bold">Equipments</h5>
                                            <ul style="list-style: none">
                                                <li>
                                                    Microphone - 4pcs
                                                </li>
                                                <li>
                                                    Speakers - 3pcs
                                                </li>
                                                <li>
                                                    Mic stand - 10pcs
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
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Time</label>
                                            <input v-model="details.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the time here (E.g. 1:00 AM - 2:00 PM)">
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Organization/Department</label>
                                            <input v-model="details.orgDept" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your organization/department here">
                                        </div>
                                        <div class="form-group pb-3">
                                            <label for="exampleInputPassword1" class="float-start">Description</label>
                                            <input v-model="details.desc" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter description of your event here">
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
                                        <input type="number" class="form-control" id="input_q" min="1" :v-model="details.equipments" :placeholder="equip.q">
                                    </div>
                                </div>
                                <div class="col d-flex justify-content-start fw-bold pb-2 pt-3">
                                    <label for="formGroupExampleInput">Related Documents</label>
                                </div>
                                <input class="form-control" type="file" id="formFileDisabled">

                                <div class="pt-5">
                                    <button class="btn btn-primary float-start" type="submit" @click="updateAppointment(details.id)">
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
        },

        close_modal(){
            this.pop = false;
            this.passed_id = '';
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

        updateAppointment(id){
            console.log(id);
        }
    },

    mounted: async function(){
        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            this.request_arr.push({
                id: query[i].id,
                date: query[i].get("date"),
                fullName: query[i].get("full_name"),
                email: query[i].get("email"),
                mobile_number: query[i].get("mobile_number"),
                time: query[i].get("time"),
                orgDept: query[i].get("org_dept"),
                venue: query[i].get("venue"),
                desc: query[i].get("description"),
                equipments: query[i].get("equipments"),
                status: query[i].get("status"),
            })
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

        console.log(this.request_arr);
    }
}

</script>
<style scoped>
.scrollable{
  overflow-y: auto;
  max-height: 525px;
}

</style>