<template>
    <nav class="navbar fixed-top navbar-light border-bottom border-warning" style="background-color: #003A6C;">
        <a class="navbar-brand" href="#">
            <img src="../assets/libraryLog.png" width="180" height="35" class="d-inline-block align-top ms-4" alt="">
        </a>
    </nav>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="background-color: #414141;">
                <div class="d-flex flex-column align-items-center align-items-sm-center px-3 pt-2 text-white min-vh-100">
                    <div class="pt-3 pb-5">
                        <img src="../assets/Ateneo_de_Naga_University_logo.png" width="120" height="120" class="d-inline-block align-top" alt="">
                    </div>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="pb-3">
                            <a href="" class="nav-link align-middle px-0 text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                                </svg> 
                                <span class="ms-1 d-none d-sm-inline">
                                    Home
                                </span>
                            </a>
                        </li>
                        <li class="pb-3" @click="reservationPage">
                            <a href="" data-bs-toggle="collapse" class="nav-link px-0 align-middle  text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                </svg> 
                                <span class="ms-1 d-none d-sm-inline">
                                    Reserve
                                </span>
                            </a>
                        </li>
                        <li class="pb-3" @click="historyPage">
                            <a href="" class="nav-link px-0 align-middle text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                <span class="ms-1 d-none d-sm-inline">
                                    History
                                </span>
                            </a>
                        </li>
                        <li class="pb-3">
                            <a href="" class="nav-link px-0 align-middle text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                                <span class="ms-1 d-none d-sm-inline">
                                    About
                                </span>
                            </a>
                        </li>
                    </ul>
                    <hr>
                    <!-- <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                            <span class="d-none d-sm-inline mx-1">loser</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
            
            <div class="col text-start">
                <h1 class="font-weight-light pt-4 ms-3">
                    About
                </h1>
                <hr style="background-color: black; height: 2px;">
                <div class="row">
                    <div class="col">
                        <div class="container-fluid">
                            <div class="card">
                                <div class="card-header text-start">
                                    Change Logs 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-puzzle-fill" viewBox="0 0 16 16">
                                    <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"/>
                                    </svg>
                                </div>
                                <div class="card-body text-start ">
                                    <h6 class="fw-bold mb-0">0.2.0</h6>
                                        <ul style="mb-0">
                                            <li>updates / new features / fixed bugs</li>
                                            <div class="row nav-row">
                                                <button type="button" class="btn btn-info text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.7rem; height: 1.5rem; border-radius: 20px;" disabled>feature</button>
                                            Added feature/s
                                            </div>
                                        </ul>
                                    <h6 class="fw-bold mb-0">0.1.2 - November 1, 2020 3:59 PM</h6>
                                        <ul style="mb-0">
                                            <li>updates / new features / fixed bugs</li>
                                            <div class="row nav-row">
                                                <button type="button" class="btn btn-info text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.7rem; height: 1.5rem; border-radius: 20px;" disabled>feature</button>
                                            Added feature/s
                                            </div>
                                            <li>updates / new features / fixed bugs</li>
                                            <div class="row nav-row">
                                                <button type="button" class="btn btn-success text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.4rem; height: 1.5rem; border-radius: 20px;" disabled>bugfix</button>
                                            Fixed Bugs
                                            </div>
                                            <div class="row nav-row">
                                                <button type="button" class="btn btn-info text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.7rem; height: 1.5rem; border-radius: 20px;" disabled>feature</button>
                                            Added feature/s
                                            </div>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="card mt-2">
                                <div class="card-header text-start">
                                    Developers 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                    <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                                    </svg>  
                                </div>
                                <div class="card-body text-start">
                                    <h6 class="fw-bold mb-0">Active</h6>
                                        <ul style="mb-0">
                                            <li>John Doe <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 2.8rem; height: 1.5rem; border-radius: 20px;" disabled>DBA</button></li>
                                        </ul>
                                    <h6 class="fw-bold mb-0">Previous Contributors</h6>
                                        <ul style="mb-0">
                                            <li>Berdin, John Justin <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                            <li>Bayot, Jeff Danielle <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                            <li>Punzalan, Tessa Mikka <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                        </ul>   
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
            © 2023 Copyright:
            <a href="/" class="text-light"> Ateneo de Naga University</a>
        </div>
    </footer>

</template>

<script>
// import PopUpModal from "@/components/PopUpModal.vue";

// export default{
//     components: {
//         PopUpModal,
//     },

//     data(){
//         return{
//             pop: false,
//             fullName:"John Doe",
//             email:"jdoe@gbox.adnu.edu.ph",
//             mobileNumber:"09123456789",
//             date: "January 18, 2023",
//             time: "11:00AM-1:30PM",
//             org: "TACTICS",
//             equipments: "Microphone- 2pcs, Speaker- 3pcs...",
//             venue: "Richie Fernando Hall",
//             description: "Lorem ipsum dolor sit amet, consectetur...",
//             relatedDoc: "Lorem ipsum dolor sit amet.pdf", 
//             next_page: false,

//         }
//     },
//     methods: {
//         reservationPage(){
//             this.$router.push({name: 'reservation'})
//         },

//         historyPage(){
//             this.$router.push({name: 'history'})
//         },
        
//         nextPage(){
//             this.next_page = true;
//         },

//         back_btn(){
//             this.next_page = false;
//         },

//         open_modal(){
//             this.pop = true;
//         },

//         close_modal(){
//             this.pop = false;
//             this.open_modal = false;
//             this.next_page = false;
//         },
//     }
// }

</script>
