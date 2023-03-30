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
                                    <!-- <h6 class="fw-bold mb-0">0.1.0</h6>
                                        <ul style="mb-0">
                                            <li>updates / new features / fixed bugs</li>
                                            <div class="row nav-row">
                                                <button type="button" class="btn btn-info text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.7rem; height: 1.5rem; border-radius: 20px;" disabled>feature</button>
                                            &nbsp; Added feature/s
                                            </div>
                                        </ul> -->
                                    <h6 class="fw-bold mb-0">Beta 0.1.0 - April 2023 </h6>
                                        <ul style="mb-0">
                                            <li>Updates / New features</li>
                                                <div class="row nav-row">
                                                    <button type="button" class="btn btn-info text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.7rem; height: 1.5rem; border-radius: 20px;" disabled>feature</button>
                                                    &nbsp; Updated User Interface
                                                </div>
                                            <!-- <li>updates / new features / fixed bugs</li>
                                            <div class="row nav-row pb-1">
                                                <button type="button" class="btn btn-success text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.4rem; height: 1.5rem; border-radius: 20px;" disabled>bugfix</button>
                                                &nbsp; Fixed Bugs
                                            </div>
                                            <div class="row nav-row">
                                                <button type="button" class="btn btn-info text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3.7rem; height: 1.5rem; border-radius: 20px;" disabled>feature</button>
                                                &nbsp; Added feature/s
                                            </div> -->
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
                                            <li>Berdin, John Justin M. <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 2.8rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                            <li>Bayot, Jeff Danielle E. <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 2.8rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                            <li>Punzalan, Tessa Mikka S. <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 2.8rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                        </ul>
                                    <h6 class="fw-bold mb-0">Main Developers</h6>
                                        <ul style="mb-0">
                                            <li>Berdin, John Justin M. <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                            <li>Bayot, Jeff Danielle E. <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
                                            <li>Punzalan, Tessa Mikka S. <button type="button" class="btn btn-secondary text-light text-pt-0 btn-sm d-inline-flex py-0" style="width: 3rem; height: 1.5rem; border-radius: 20px;" disabled>BSIT</button></li>
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
            <a href="#" class="text-light"> Ateneo de Naga University</a>
        </div>
    </footer>

</template>

<script>
import SidePanelAdmin from "@/components/SidePanelAdmin.vue";

export default{
    components: {
        SidePanelAdmin,
    },

}

</script>
