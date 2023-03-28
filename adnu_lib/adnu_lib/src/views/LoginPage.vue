<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>

    <div class="container">
        <div class="row pt-4 pb-4">
            <div class="col-md-2 mt-md-0 mt-3 order-md-1 order-2">
                <ul class="row text-start">
                    <p class="text-start">Legend: </p>
                    <li class="pb-2">
                        <span class="badge jobl-c">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                            </svg>
                        </span>
                        <small class="ps-1">JOBL Conference Room 1</small>
                    </li>
                    <li class="pb-2">
                        <span class="badge cons-one">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                            </svg>
                        </span>
                        <small class="ps-1">Consultation Room 1</small>
                    </li>
                    <li class="pb-2">
                        <span class="badge cons-two">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                            </svg>
                        </span>
                        <small class="ps-1">Consultation Room 2</small>
                    </li>
                    <li class="pb-2">
                        <span class="badge lib-m">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                            </svg>
                        </span>
                        <small class="ps-1">Library - Multipurpose Room</small>
                    </li>
                    <li class="pb-2">
                        <span class="badge lib-am">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                            </svg>
                        </span>
                        <small class="ps-1">Library: Fr. A.M. BAUTISTA - Viewing Room</small>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 mt-md-0 mt-3 order-md-1 order-2">
                <div>
                    <div class="row">
                        <div class="col pb-2">
                            <div class="card" style="height: auto;">
                                <div class="card-header text-start">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/psnhyobz.json"
                                        trigger="loop"
                                        colors="primary:#121331"
                                        state="loop"
                                        style="width: 19px; height: 19px" class="pt-1">
                                    </lord-icon>  Today | {{newdate}}
                                </div>
                                <div class="scrollable">
                                    <div v-if="show_list === true">
                                        <div class="text-start p-2" v-for="details in events" :key="details" >
                                            <div>
                                                <div class="card" v-if="details.venue === 'JOBL Conference Room 1st Floor'">
                                                    <div class="card-body rounded text-light jobl-c">
                                                        <h4> {{ details.venue }}</h4>
                                                        <h6>{{ details.title }}</h6>
                                                        {{details.start}} - {{details.end}}
                                                    </div>
                                                </div>
                                                <div class="card" v-else-if="details.venue === 'Consultation Room 1'">
                                                    <div class="card-body rounded text-light cons-one">
                                                        <h4> {{ details.venue }}</h4>
                                                        <h6>{{ details.title }}</h6>
                                                        {{details.start}} - {{details.end}}
                                                    </div>
                                                </div>
                                                <div class="card" v-else-if="details.venue === 'Consultation Room 2'">
                                                    <div class="card-body rounded text-light cons-two">
                                                        <h4> {{ details.venue }}</h4>
                                                        <h6>{{ details.title }}</h6>
                                                        {{details.start}} - {{details.end}}
                                                    </div>
                                                </div>
                                                <div class="card" v-else-if="details.venue === 'Library - Multipurpose Room'">
                                                    <div class="card-body rounded text-light lib-m">
                                                        <h4> {{ details.venue }}</h4>
                                                        <h6>{{ details.title }}</h6>
                                                        {{details.start}} - {{details.end}}
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div class="card">
                                                        <div class="card-body rounded text-light lib-am">
                                                            <h4> {{ details.venue }}</h4>
                                                            <h6>{{ details.title }}</h6>
                                                            {{details.start}} - {{details.end}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="card p-2" v-if="len_request_arr === 0">
                                            <div class="text-start p-2 pt-3 card-body rounded text-light lib-am">
                                                <h6>There are no events posted today.</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mx-auto order-md-2 order-1 pt-4">
                <div>
                    <div class="">
                        <img src="../assets/Ateneo_de_Naga_University_logo.png" width="80" height="80" class="d-inline-block align-top" alt="">
                    </div>
                    <h6 class="text-weight-normal mt-4">
                        Welcome to KAZI
                    </h6>
                    <div class="pt-5">
                        <button type="button" class="btn btn-outline-primary rounded-pill" @click="handleSignIn()">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" class="pb-1">
                            Continue with Google Gbox
                        </button>
                    </div>
                    <h6 class="text-weight-normal mt-5">
                        <a href="mailto:adnulibrary@gbox.adnu.edu.ph" class="text-dark" style="text-decoration: none;">
                            Contact ADNU Library for more information
                        </a>
                        <br>
                        <div class="pt-3">
                            <small class="text-warning">
                                <p class="fw-bold">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/lfqzieho.json"
                                        trigger="loop"
                                        delay="2000"
                                        colors="primary:#FFC107"
                                        style="width: 18px;height: 18px" class="pt-1 ">
                                    </lord-icon> Note
                                </p> 
                                KAZI doesn't work on Incognito Mode
                            </small>
                        </div>
                    </h6>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="page-footer fluid-bottom border-top border-warning" style="background-color: #003A6C">
        <div class="container text-left">
        <!-- Grid row -->
            <div class="row text-start">
                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="font-weight-bold mt-3 mb-4 text-light">KAZI</h5>
                    <p class="font-weight-light text-light">
                        <small>
                            KAZI is a reservation system that allows students, faculty members, and staff to reserve and 
                            manage bookings for various spaces within the University campus. "Kazi" underlines the need 
                            for diligent effort and attention to detail in ensuring that reservations are correctly documented,
                            maintained, and communicated to appropriate parties in this setting. This entails developing a centralized 
                            reservation platform that allows users to check availability, book venues and/or e, and get reservation
                            confirmation. This system helps to streamline the booking process, reduce conflicts and double bookings,
                            and ensure efficient use of the University's resources. 
                        </small>
                    </p>
                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">
                    <!-- Grid column -->
                    <div class="col-md-3 mx-auto">
                        <!-- Links -->
                        <h5 class="font-weight-bold mt-3 mb-4 text-light">Links</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="https://services.adnu.edu.ph/myadnu/" class="link-primary" style="text-decoration: none;">ADNU Website</a>
                            </li>
                            <li>
                                <a href="https://services.adnu.edu.ph/college" class="link-primary" style="text-decoration: none;">KAIZEN</a>
                            </li>
                            <li>
                                <a href="https://adnulib.adnu.edu.ph/" class="link-primary" style="text-decoration: none;">ADNU Library</a>
                            </li>
                            <li>
                                <a href="#" class="link-primary" style="text-decoration: none;">
                                    <router-link :to="{name: 'tryCarousel'}" style="text-decoration: none;">
                                        TV Calendar
                                    </router-link>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">

                <!-- Grid column -->
                <div class="col-md-3 mx-auto">
                    <h5 class="font-weight-bold text-light mt-3 mb-4">Contact Us</h5>
                    <p class="font-weight-light text-light">
                        <small>
                            If you have questions or suggestions about KAZI, 
                            please do not hesitate to contact us and we will be happy to assist you through 
                            any of the following:
                            <ul class="list-unstyled text-light">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg> (+63) 912 345 6780
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                        <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                                    </svg> James O'Brien S.J. Library. Ateneo de Naga University, Ateneo Avenue Naga City 4400 Philippines
                                </li>
                            </ul>
                        </small>
                    </p>
                </div>
                <!-- Grid column -->
            </div>
        <!-- Grid row -->
        </div>
        <!-- Footer Links -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3 text-light">
                <small>
                    © 2023 Copyright:
                <a href="/" class="text-light"> Ateneo de Naga University</a>
                </small>
            </div>
            <!-- Copyright -->
    </footer>
    <!-- Footer -->

    <div v-if="popup_admin === true">
        <AdminModal>
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-end">
                        <div class="col-4">
                            <div class="pt-2">
                                Adminstrator Key
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-outline-none text-danger" @click="close_popup">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="card-body">
                    <h5 class="card-title">Enter your Administrator Key</h5>
                    <div class="pt-2 pb-2">
                        <input v-if="admin_invalid === false" type="password" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" v-model="AdminKey" placeholder="Admin Key">
                        <!-- <input  type="password" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" v-model="AdminKey" placeholder="Master Key"> -->
                        <input v-else type="password" class="form-control is-invalid" id="validationServer04" v-model="AdminKey" placeholder="Admin Key" required>
                        <div class="invalid-feedback">
                            Please provide a valid Key.
                        </div>
                    </div>
                    
                    <button class="btn btn-light me-1" @click="not_admin">Not an Admin?</button>

                    <button class="btn btn-primary" @click="continue_admin">Continue as Admin</button>
                </div>
            </div>
        </AdminModal>
    </div>
</template>

<script>
import AdminModal from "@/components/AdminModal.vue";
import Parse from 'parse';

const gapi = window.gapi;
export default{
    name: 'LoginPage',
    components: {
        AdminModal,
    },
    data(){
        return{
            profileFirstname: '',
            profileLastname: '',
            profileFullname: '',
            profileImage: '',
            profileEmail: '',
            profileId: '',
            currentUser: '',
            gapiLoaded: false,

            popup_admin: false,
            api_successs: false,

            AdminKey: '',
            admin_invalid: false,

            events: [],
            request_arr: [],

            newdate: '',
            file_date: '',
            len_request_arr: '',

            show_list: '',
        }
    },
    methods: {
        async handleSignIn(){ // this is the login button in our login page, "Continue to Gbox button"
                let googleUser = await gapi.auth2.getAuthInstance().signIn();

                this.profileFirstname = googleUser.getBasicProfile().getGivenName();
                this.profileLastname = googleUser.getBasicProfile().getFamilyName(); 
                this.profileFullName = googleUser.getBasicProfile().getName(); 
                this.profileImage = googleUser.getBasicProfile().getImageUrl();
                this.profileEmail = googleUser.getBasicProfile().getEmail(); 
                this.profileId = googleUser.getBasicProfile().getId();
                console.log(googleUser);
                if(googleUser){
                    console.log("First name: ", this.profileFirstname);
                    console.log("Last name: ", this.profileLastname);
                    console.log("Full name: ", this.profileFullname);
                    console.log("Image: ", this.profileImage);
                    console.log("Email: ", this.profileEmail);
                    console.log("ID: ", this.profileId);
                    this.api_successs = true; // flags the system if the login process/data was successfully completed
                }

                if(googleUser.getBasicProfile() != null && this.api_successs === true){
                    console.log("Success");
                    this.popup_admin = true; //this shows the input field for the admin password
                } else {
                    console.log("fail");
                }
        },

        popUpAdmin(){
            this.popup_admin = true;
        },

        admin(){
            this.$router.push({name: 'home'});
        },

        close_modal(){
            this.popup_admin = false;
        },

        continue_admin(){
            if(this.AdminKey === 'ABC123'){ //if the admin key was correct, the user will be navigated to the admin side of the system
                this.$router.push({name: 'adminHome'});
            } else { //else, the user will be navigated to the user side of the system
                this.admin_invalid = true; 
            }
        },

        not_admin(){
            this.$router.push({name: 'home'});
        },

        close_popup(){
            this.popup_admin = false;
        }
    },

    mounted: async function(){
        try{
            gapi.load("client:auth2", function () { //this is the Google OAuth API that needs to be rendered
                gapi.auth2.getAuthInstance();
            });

            const googleUser = await gapi.auth2.getAuthInstance();
            console.log("This is the googleUser:", googleUser);
            this.currentUser = googleUser.currentUser.get().getBasicProfile().getName();
            this.gapiLoaded = true; //this is a flag that the Google API completely loaded

        } catch(error){
            console.log(error);
        }

        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

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
        console.log(this.newdate);

        // we fetched all of the data in "Request" table in our database
        // we looked for an event that is happening "TODAY" wherein the status of the request is 'Approved' by the admin
        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            if(this.newdate === query[i].get("date") && query[i].get("status") === 'Approved'){
                this.events.push({
                    start: query[i].get("time_start"),
                    end: query[i].get("time_end"),
                    title: query[i].get("description"),
                    venue: query[i].get("venue"),
                })
            }
        }

        console.log(this.events);
        this.len_request_arr = this.events.length;

        // this block allows us to verify if there's a reservation today
        if(this.len_request_arr === 0){ 
            this.show_list = false;
            console.log(this.show_list);
        } else {
            this.show_list = true;
            console.log(this.show_list);
        }
    }

}
</script>

<style scoped>
.scrollable{
  overflow-y: auto;
  max-height: 350px;
}

.jobl-c{
    background-color: #45b6fe;
}

.cons-one{
    background-color: #3792cb;
}

.cons-two{
    background-color: #296d98;
}

.lib-m{
    background-color: #1c4966;
}

.lib-am{
    background-color: #0e2433;
}

.non{
    background-color: red;
}
</style>
