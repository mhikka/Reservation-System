<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>

    <div class="container">
        <div class="row pt-4 pb-4">
            <div class="col-md-6 mt-md-0 mt-3">
                <!-- <ejs-schedule height="375px" width="auto" currentView="Day" class="rounded">
                </ejs-schedule> -->
                <div>
                    <div class="row">
                        <div class="col pb-2">
                            <div class="card" style="height: auto;">
                                <div class="card-header text-start">
                                    Today | {{newdate}}
                                    <!-- <hr> -->
                                    <!-- Legend: 
                                    <div class="row">
                                        <div class="col">
                                            <span class="badge jobl-c">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                                </svg>
                                            </span>
                                            <small>JOBL Conference Room 1</small>
                                        </div>
                                        <div class="col">
                                            <span class="badge cons-one">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                                </svg>
                                            </span>
                                            <small>Consultation Room 1</small>
                                        </div>
                                        <div class="col">
                                            <span class="badge cons-two">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                                </svg>
                                            </span>
                                            <small>Consultation Room 2</small>
                                        </div>
                                        <div class="col">
                                            <span class="badge lib-m">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                                </svg>
                                            </span>
                                            <small>Library - Multipurpose Room</small>
                                        </div>
                                        <div class="col">
                                            <span class="badge lib-am">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                                </svg>
                                            </span>
                                            <small>Library: Fr. A.M. BAUTISTA - Viewing Room</small>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="scrollable">
                                    <div v-if="show_list === true">
                                        <div class="text-start p-2" v-for="details in events" :key="details" >
                                            <div>
                                                <div class="card" v-if="details.venue === 'JOBL Conference Room 1'">
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
            <div class="col-md-3 mx-auto pt-4">
                <div>
                    <div class="">
                        <img src="../assets/Ateneo_de_Naga_University_logo.png" width="80" height="80" class="d-inline-block align-top" alt="">
                    </div>
                    <h6 class="text-weight-normal mt-4">
                        Welcome to James O'Brien S.J. Library
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
                    <h5 class="font-weight-bold mt-3 mb-4 text-light">James O'Brien Library</h5>
                    <p class="font-weight-light text-light">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                            <li class="text-light">
                                <a href="#!">ADNU Website</a>
                            </li>
                            <li class="text-light">
                                <a href="#!">KAIZEN</a>
                            </li>
                            <li class="text-light">
                                <a href="#!">ADNU Library</a>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
// import HelloWorld from '@/components/HelloWorld.vue';
// import { ScheduleComponent, Day, Agenda } from "@syncfusion/ej2-vue-schedule";
// import VueCal from "@/components/VueCalLogin.vue";
import AdminModal from "@/components/AdminModal.vue";
import Parse from 'parse';

const gapi = window.gapi;
export default{
    name: 'LoginPage',
    // components: {HelloWorld},
    components: {
        // 'ejs-schedule': ScheduleComponent,
        // VueCal,
        AdminModal,
    },
    // provide: {
    //     schedule: [Day, Agenda]
    // },
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
        async handleSignIn(){
            // try {
                let googleUser = await gapi.auth2.getAuthInstance().signIn();

                this.profileFirstname = googleUser.getBasicProfile().getGivenName(); //tw.lv.rZ;
                this.profileLastname = googleUser.getBasicProfile().getFamilyName(); //tw.lv.EX; 
                this.profileFullName = googleUser.getBasicProfile().getName(); //tw.lv.Af;  
                this.profileImage = googleUser.getBasicProfile().getImageUrl(); //tw.lv.nO; 
                this.profileEmail = googleUser.getBasicProfile().getEmail();  //tw.lv.Xv;  
                this.profileId = googleUser.getBasicProfile().getId();   //tw.lv.ZX;
                console.log(googleUser);
                if(googleUser){
                    // this.$router.push({name: 'home'});
                    console.log("First name: ", this.profileFirstname);
                    console.log("Last name: ", this.profileLastname);
                    console.log("Full name: ", this.profileFullname);
                    console.log("Image: ", this.profileImage);
                    console.log("Email: ", this.profileEmail);
                    console.log("ID: ", this.profileId);
                    this.api_successs = true;
                }

                if(googleUser.getBasicProfile() != null && this.api_successs === true){
                    console.log("Success");
                    // this.popUpAdmin;
                    this.popup_admin = true;
                } else {
                    console.log("fail");
                }
            // } catch(error) {
            //     console.log(error);
            // }
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
            if(this.AdminKey === 'ABC123'){
                this.$router.push({name: 'adminHome'});
            } else {
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
            gapi.load("client:auth2", function () {
                gapi.auth2.getAuthInstance();
            });

            const googleUser = await gapi.auth2.getAuthInstance();
            // await this.loadClient();
            console.log("This is the googleUser:", googleUser);
            this.currentUser = googleUser.currentUser.get().getBasicProfile().getName();
            this.gapiLoaded = true;

        } catch(error){
            console.log(error);
        }

        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        this.newdate = " " + monthNames[month - 1] + " " + day + " " + year;
        this.file_date = year + "-" + day + "-" + month;
        console.log(this.newdate);

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
