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
                    <div class="col">
                        <div class="card" style="height: 370px;">
                            <div class="card-header text-start">
                                Request Dashboard
                            </div>
                            <div class="card-body text-start">
                                <div class="card">
                                    <div class="card-body bg-success rounded text-light" @click="open_modal">
                                        <h4>Request</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body bg-success rounded text-light">
                                        <h4>Request</h4>
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body bg-success rounded text-light">
                                        <h4>Request</h4>
                                        This is some text within a card body.
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
        <PopUpModal>
            <div class="col-sm pt-2">
                <!-- <h4 class="fw-bold">Request</h4>
                <hr stlye="background-color: black"> -->
                <div class="row justify-content-end">
                    <div class="col-sm" v-if="next_page === true">
                        <button @click="back_btn" class="btn btn-outline-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-4">
                        <h4 class="fw-bold"> Reservation Request</h4>
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

                <div class="text-start">
                    <div>
                        <div>
                            <div class="container pb-5" v-if="next_page === false">
                                <div class="row pb-3">
                                    <h5 class="fw-bolder d-flex justify-content-start pb-1">Personal Details</h5>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="fw-bold">Full Name</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Email</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Mobile Number</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 pb-3 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"  v-model="fullName" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="email" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="mobileNumber" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                <div class="row pb-4">
                                    <h5 class="fw-bolder d-flex justify-content-left pb-1">Reservation Details</h5>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="fw-bold">Date</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Time</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Organization/Department</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"  v-model="date" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="time" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="org" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-4 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="fw-bold">Equipments</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Venue</h6>
                                                </div>
                                                <div class="col">   
                                                    <h6 class="fw-bold">Description</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-1 text-start">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"  v-model="equipments" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="venue" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                                <div class="col">   
                                                    <input type="text"  v-model="description" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here" disabled>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="pt-3 pb-1">
                                    <button class="btn btn-primary float-start" type="submit" @click="nextPage">
                                        Next
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div> 
                            <div v-else class="pb-3">
                                <div class="col d-flex justify-content-start fw-bold pb-2">
                                    <h6 class="fw-bold">Related Documents</h6>
                                </div>
                                <div class="card text-center bg-light">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet.pdf
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>       
                                    </div>
                                </div>
                                <div class="pt-5">
                                    <button class="btn btn-primary me-3" type="submit" @click="close_modal">
                                        Approve
                                    </button>   
                                    <button class="btn btn-outline-danger" type="submit" @click="close_modal">
                                        Reject
                                    </button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PopUpModal>
    </div>
</template>

<script>
import PopUpModal from "@/components/PopUpModal.vue";
import SidePanelAdmin from "@/components/SidePanelAdmin.vue";

export default{
    components: {
        PopUpModal, SidePanelAdmin,
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

        }
    },
    methods: {
        reservationPage(){
            this.$router.push({name: 'adminReservation'})
        },

        historyPage(){
            this.$router.push({name: 'history'})
        },
        
        nextPage(){
            this.next_page = true;
        },

        back_btn(){
            this.next_page = false;
        },

        open_modal(){
            this.pop = true;
        },

        close_modal(){
            this.pop = false;
            // this.open_modal = false;
            this.next_page = false;
        },
    }
}

</script>
