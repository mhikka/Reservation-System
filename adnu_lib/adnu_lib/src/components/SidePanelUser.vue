<template>
    <div class="col-2" style="background-color: #414141;"> <!--col-auto col-md-3 col-xl-2 px-sm-2 px-0-->
        <div class="d-flex flex-column align-items-center align-items-sm-center px-3 pt-2 text-white min-vh-100">
            <div class="d-flex align-items-center text-white text-decoration-none pt-3" aria-expanded="false">
                <img src="../assets/Ateneo_de_Naga_University_logo.png" width="120" height="120" class="img-fluid logo rounded-circle me-1" alt="">
            </div>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="pb-3 pt-5" @click="homePage">
                    <a href="#" class="nav-link align-middle px-0 text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                        </svg> 
                        <span class="ms-1 pt-4 d-none d-sm-inline">
                            Home
                        </span>
                    </a>
                </li>
                <li class="pb-3" @click="reservationPage">
                    <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle  text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg> 
                        <span class="ms-1 pt-4 d-none d-sm-inline">
                            Reserve
                        </span>
                    </a>
                </li>
                <li class="pb-3">
                    <a href="#" class="nav-link px-0 align-middle text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                        </svg>
                        <span class="ms-1 pt-4 d-none d-sm-inline">About</span>
                    </a>
                </li>
                <li class="pb-3" @click="logout">
                    <a href="" class="nav-link px-0 align-middle text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        <span class="ms-1 pt-4 d-none d-sm-inline">Logout</span>
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
            this.$router.push({name: 'userReservation'});
        },

        homePage(){
            this.$router.push({name: 'home'});
        },

        logout(){
            console.log("Hello");
            this.$gAuth.signOut();
            this.$router.push({name: 'Login'})
        },
    }
}
</script>
<style>

.logo{
    height: 30;
    width: 30;
}
</style>