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
                <div>
                    <span>Please wait ...</span>
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
        <PopUpModal>
            <div class="container">
                <div class="row">
                    <div class="col-sm" v-if="next_page === true">
                        <button @click="back_btn" class="btn btn-outline-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-sm" v-if="next_page === false">
                        <button @click="back_btn" class="btn btn-outline-dark" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-sm pt-2">
                        <h4 class="fw-bold">{{picked_date}}</h4>
                        <hr stlye="background-color: black">
                    </div>
                    <div class="col-sm">
                        <button @click="close_modal" class="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="container pb-5" v-if="next_page === false">
                <div class="row pb-2">
                    <h5 class="fw-bolder d-flex justify-content-start pb-3">Personal Details</h5>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Full Name</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Email</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Mobile Number</label>
                    </div>
                </div>
                <div class="row pb-3">
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" v-model="full_name" placeholder="Enter your full name here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" v-model="user_email" placeholder="Enter your email here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" v-model="desc" placeholder="Enter your mobile number here">
                    </div>
                </div>

                <div class="row pb-2 pt-4">
                    <h5 class="fw-bolder d-flex justify-content-start pb-3">Reservation Details</h5>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Date</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Time</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Organization/Department</label>
                    </div>
                </div>
                <div class="row pb-3">
                    <div class="col-sm">
                        <input type="text" v-model="date" class="form-control" id="formGroupExampleInput" placeholder="Enter the date here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" v-model="time" placeholder="Enter the time here">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="formGroupExampleInput" v-model="org_dept" placeholder="Enter your organization/department here">
                    </div>
                </div>

                <div class="row pb-2">
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Description</label>
                    </div>
                    <div class="col d-flex justify-content-start fw-bold">
                        <label for="formGroupExampleInput">Venue</label>
                    </div>
                </div>

                <div class="row pb-5">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter the description of the event here">
                    </div>

                    <div class="col">
                        <select name="plan" id="plan" class="btn border float-start">
                            <option value="none" selected disabled hidden>List of Venues</option>
                            <option value="free">Free</option>
                            <option value="starter">Starter </option>
                            <option value="professional">Professional</option>
                            <option value="corporate">Corporate</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary float-start" type="submit" @click="nextPage">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
            <div v-else class="pb-5">
                <div class="col d-flex justify-content-start fw-bold pb-2">
                    <label for="formGroupExampleInput">Equipments</label>
                </div>
                <div class="pb-3 col d-flex justify-content-start">
                    <ul style="list-style: none;" class="text-left">
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Microphone
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Microphone stand
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Speakers
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Sound system
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="col d-flex justify-content-start fw-bold pb-2">
                    <label for="formGroupExampleInput">Related Documents</label>
                </div>
                <input class="form-control" type="file" id="formFileDisabled">

                <div class="pt-5">
                    <button class="btn btn-primary float-start" type="submit" @click="bookDate">
                        Set Appointment
                    </button>
                </div>
            </div>

        </PopUpModal>
    </div>
</template>

<script>
import PopUpModal from "@/components/PopUpModal.vue";
import SidePanelUser from "@/components/SidePanelUser.vue";
import Parse from 'parse';

export default{
    components: {
        PopUpModal, SidePanelUser,
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
            org_dept: '',
            venue: '',
            desc: '',
            isOpen: false,
            date: '',
            date_slicer: '',
            profileFullName: '',
            profileImage: '',

            gapi_loader: false,
        }
    },

    // mounted: async function(){
    //     this.$router.go(-1);
    // },

    beforeCreate(){
        this.$router.go(-1);
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
            console.log("Full Name: ", this.full_name);
            console.log("Email: ", this.user_email);
            console.log("Mobile Number: ", this.mobile_number);
            console.log("Time: ", this.time);
            console.log("Org/Dept: ", this.org_dept);
            console.log("Venue: ", this.venue);
            console.log("Description: ", this.desc);
        },

        bookDate(){
            const Dates = Parse.Object.extend("Dates");
            const dates = new Dates();

            dates.set("Appointment", this.date);

            dates.save()
            .then((dates) => {
                console.log("Success", dates);
                this.open_modal = false;
            }, (error) => {
                console.log("Error", error);
            });
        },

        back_btn(){
            this.next_page = false;
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
            this.$router.push({name: 'home'})
        }
    },
}
</script>

<style>    
</style>
