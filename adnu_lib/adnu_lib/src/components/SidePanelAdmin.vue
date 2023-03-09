<template>
    <div class="col-2" style="background-color: #414141;"> <!--col-auto col-md-3 col-xl-2 px-sm-2 px-0-->
        <div class="d-flex flex-column align-items-center align-items-sm-center px-3 pt-2 text-white min-vh-100">
            <div class="d-flex align-items-center text-white text-decoration-none pt-3 pb-3">
                <img src="../assets/Ateneo_de_Naga_University_logo.png" class="img-fluid logo rounded-circle me-1" alt="" width="120" height="120">
            </div>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start pt-3" id="menu">
                <li class="pb-3" @click="homePage">
                    <a href="#" class="nav-link align-middle px-0 text-light">
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/osuxyevn.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style="width: 25px; height: 25px;">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto pt-1">
                                <span class="ms-1 d-none d-sm-inline">
                                    Home
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="pb-3" @click="reservationPage">
                    <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle  text-light">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>  -->
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/qjuahhae.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style="width:25px; height:25px">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto pt-1">
                                <span class="ms-1 d-none d-sm-inline">
                                    Reserve
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="pb-3" @click="reports">
                    <a href="#" class="nav-link px-0 align-middle text-light">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                        </svg> -->
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/weoiqraa.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style="width:25px; height:25px">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto pt-1">
                                <span class="ms-1 d-none d-sm-inline">
                                    Reports
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="pb-3" @click="advisory">
                    <a href="#" class="nav-link px-0 align-middle text-light">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
                            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                        </svg> -->
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/vufjamqa.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style="width:25px; height:25px">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto pt-1">
                                <span class="ms-1 d-none d-sm-inline">
                                    Advisory
                                </span>
                            </div>
                        </div>
                        
                        <!-- <span class="ms-1 pb-2 d-none d-sm-inline">Advisory</span> -->
                    </a>
                </li>
                <li class="pb-3" @click="inventory">
                    <a href="#" class="nav-link px-0 align-middle text-light">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                        </svg> -->
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/svbmmyue.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style="width:25px; height:25px">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto pt-1">
                                <span class="ms-1 d-none d-sm-inline">
                                    Inventory
                                </span>
                            </div>
                        </div>

                        
                        <!-- <span class="ms-1 pb-2 d-none d-sm-inline">Inventory</span> -->
                    </a>
                </li>
                <li class="pb-3" @click="about">
                    <a href="#" class="nav-link px-0 align-middle text-light">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                        </svg> -->
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/amascaoj.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    state="hover-1"
                                    style="width:25px; height:25px">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto pt-1">
                                <span class="ms-1 d-none d-sm-inline">
                                    About
                                </span>
                            </div>
                        </div>
                        
                        <!-- <span class="ms-1 pb-2 d-none d-sm-inline">About</span> -->
                    </a>
                </li>
                <li class="pb-3" @click="logout">
                    <a href="" class="nav-link px-0 align-middle text-light">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg> -->
                        <div class="row">
                            <div class="col col-lg-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/wnkegycl.json"
                                    trigger="hover"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style="width:25px; height:25px">
                                </lord-icon>
                            </div>
                            <div class="col-md-auto">
                                <span class="ms-1 d-none d-sm-inline">
                                    Logout
                                </span>
                            </div>
                        </div>

                        
                        <!-- <span class="ms-1 pb-2 d-none d-sm-inline">Logout</span> -->
                    </a>
                </li>
            </ul>
            <div class="pb-2">
                <div class="d-flex align-items-center text-white text-decoration-none" aria-expanded="false">
                    <img :src="profileImage" alt="hugenerd" width="30" height="30" class="rounded-circle me-1">
                    <span class="d-none d-sm-inline mx-1"><small>{{ profileFullName }}</small></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const gapi = window.gapi;
export default{
    data(){
        return {
            profileFullName: '',
            profileImage: '',
        }
    },

    mounted: async function(){
        gapi.load("client:auth2", function () {
            gapi.auth2.getAuthInstance();
        });

        const googleUser = gapi.auth2.getAuthInstance();
        console.log(googleUser);
        this.profileFullName = googleUser.currentUser.get().getBasicProfile().getName();
        this.profileImage = googleUser.currentUser.get().getBasicProfile().getImageUrl();
        console.log(this.profileFullName);
    },

    methods: {
        reservationPage(){
            this.$router.push({name: 'adminReservation'});
        },

        homePage(){
            this.$router.push({name: 'adminHome'});
        },

        logout(){
            console.log("Hello");
            this.$gAuth.signOut();
            this.$router.push({name: 'Login'})
        },

        reports(){
            this.$router.push({name: 'history'});
        },

        inventory(){
            this.$router.push({name: 'inventory'});
        },

        advisory(){
            console.log("this is clicked!");
            this.$router.push({name: 'advisory'});
        },

        about(){
            this.$router.push({name: 'about'});
        }
    }
}
</script>