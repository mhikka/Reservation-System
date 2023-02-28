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
                                    <div class="card" v-if="len_request_arr === 0">
                                        There are not any open requests at this time.
                                    </div>
                                    <div class="card" v-else>
                                        <div class="card-body rounded text-light apprv" @click="open_modal(details.id)">
                                            <h4>Request | {{ details.status }}</h4>
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
                                        <h6 class="fw-bold">{{ details.date }}</h6>
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
                                        <input v-model="details.fullName" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name here" disabled>
                                    </div>
                                    <div class="form-group pb-2">
                                        <label for="exampleInputPassword1" class="float-start">Email</label>
                                        <input v-model="details.email" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your email here" disabled>
                                    </div>
                                    <div class="form-group pb-5">
                                        <label for="exampleInputPassword1" class="float-start">Mobile Number</label>
                                        <input v-model="details.mobile_number" type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter your mobile number here" disabled>
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
                                            <input v-model="details.date" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the date here" disabled>
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
                                            <input v-model="details.org" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your organization here" disabled>
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Department</label>
                                            <input v-model="details.dept" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your department here" disabled>
                                        </div>
                                        <div class="form-group pb-3">
                                            <label for="exampleInputPassword1" class="float-start">Description</label>
                                            <input v-model="details.desc" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter description of your event here" disabled>
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Venue</label>
                                            <select name="plan" id="venue" disabled v-model="details.venue" class="btn btn-sm border float-start">
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
                                            <select name="plan" id="venue" disabled v-model="details.semester" class="btn btn-sm border float-start">
                                                <option value="" disabled selected>List of Semesters</option>
                                                <option value="1st Semester">1st Semester</option>
                                                <option value="2nd Semester"><small>2nd Semester</small></option>
                                                <option value="Intersession"><small>Intersession</small></option>
                                            </select>
                                        </div>
                                        <div class="form-group pb-5 m-50">
                                            <label for="exampleInputPassword1" class="float-start me-3">Form Remarks</label>
                                            <select name="plan" id="venue" disabled v-model="details.remarks" class="btn btn-sm border float-start">
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
                                            <input type="number" disabled class="form-control" min="1" id="input_q" v-model="equip.num" placeholder="Enter quantity here">
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
                                    @click="acceptAppointment(details.id, details.fullName, details.email, details.mobile_number, details.date, details.time, details.org, details.dept, details.venue, details.desc, details.equipments, details.status, details.remarks, details.semester)">
                                        Approve
                                    </button>
                                    <button class="btn btn-outline-danger float-end" type="submit" @click="reject(details.id)">
                                        Unavailable
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
import SidePanelAdmin from "@/components/SidePanelAdmin.vue";
import Parse from 'parse';

const gapi = window.gapi;
export default{
    components: {
        SidePanelAdmin, AdminModal,
    },

    data(){
        return{
            pop: false,
            fullName:"John Doe",
            email:"jdoe@gbox.adnu.edu.ph",
            mobileNumber:"09123456789",
            date: "January 18, 2023",
            time: "11:00AM-1:30PM",
            org: "TACTICS",
            equipments: "Microphone- 2pcs, Speaker- 3pcs...",
            venue: "Richie Fernando Hall",
            description: "Lorem ipsum dolor sit amet, consectetur...",
            relatedDoc: "Lorem ipsum dolor sit amet.pdf", 
            next_page: false,
            next_page_1: false,

            request_arr: [],
            equipments_arr: [],

            passed_id: '',
            fetched_val: [],
            val_arr: [],
            identifier: false,
            item_arr: [],

            len_request_arr: '',

        }
    },

    mounted: async function(){
        try{
            gapi.load("client:auth2", function () {
                gapi.auth2.getAuthInstance();
            });

            const googleUser = gapi.auth2.getAuthInstance();
            console.log(googleUser);

            if(!googleUser){
                this.$router.push({name: 'Login'});
            }
        } catch(error){
            this.$router.push({name: 'Login'});
        }

        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            if(query[i].get("status") === 'Pending'){
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
                })

                console.log(query[i].get("url"));
            }
        }

        this.len_request_arr = this.request_arr.length;

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

    },

    methods: {
        dl_status(link){
            console.log(link);
        },

        reservationPage(){
            this.$router.push({name: 'adminReservation'})
        },

        historyPage(){
            this.$router.push({name: 'history'})
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

        open_modal(id){
            this.pop = true;
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
            this.pop = false;
            // this.open_modal = false;
            this.next_page = false;
            this.next_page_1 = false;
            this.passed_id = '';
        },

        async acceptAppointment(id){
            const Request = Parse.Object.extend("Request");
            const query = new Parse.Query(Request);

            query.equalTo("objectId", id);
            const reqQuery = await query.first();

            reqQuery.set("status", "Approved");
            reqQuery.set("remarks", "Final");

            reqQuery.save().then((reqQuery) => {
                console.log("Successful", reqQuery);
                this.edit_page = false;
            });

            this.pop = false;
            this.passed_id = '';
        },

        async reject(id){
            const Request = Parse.Object.extend("Request");
            const query = new Parse.Query(Request);

            query.equalTo("objectId", id);
            const reqQuery = await query.first();

            reqQuery.set("status", "Unavailable");

            reqQuery.save().then((reqQuery) => {
                console.log("Successful", reqQuery);
                this.edit_page = false;
            });

            this.pop = false;
            this.passed_id = '';
        },
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