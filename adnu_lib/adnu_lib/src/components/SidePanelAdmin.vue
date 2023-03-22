<template>
    <div class="col-2" style="background-color: #414141;">
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
                    </a>
                </li>
                <li class="pb-3" @click="inventory">
                    <a href="#" class="nav-link px-0 align-middle text-light">
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
                    </a>
                </li>
                <li class="pb-3" @click="about">
                    <a href="#" class="nav-link px-0 align-middle text-light">
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
                    </a>
                </li>
                <li class="pb-3" @click="logout">
                    <a href="" class="nav-link px-0 align-middle text-light">
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