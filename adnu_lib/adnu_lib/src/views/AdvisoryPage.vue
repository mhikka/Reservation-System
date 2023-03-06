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
                <div class="row justify-content-between">
                    <div class="col-4">
                    <h1 class="font-weight-light pt-4 ms-3">
                            Advisory
                    </h1>
                    </div>
                    <div class="col-4 pt-4 me-4">
                    <button class="btn btn-outline-primary float-end mb-4" type="submit" @click="printMaterial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                        </svg>
                        Print Material
                    </button>
                    </div>
                </div>
                <hr style="background-color: black; height: 2px;">
                <div class="row">
                    <div class="col pb-2">
                        <div class="card" style="height: auto;">
                            <div class="card-header text-start">
                                Printable Content
                            </div>
                            <div class="scrollable">
                                <div id="advisory">
                                    <div>
                                        <div style="display: flex; justify-content: center; align-items: center; position: relative;">
                                            <div class="p-2">
                                                <img src="../assets/bg_pdf.png" class="img-fluid" alt="...">
                                                <div class="position-absolute top-50 start-50" style="transform: translate(-50%, -50%); text-align: center; width: 100%;">
                                                    <!-- <div class="img-fluid bg-light rounded" style="width: auto; height:auto;"> -->
                                                        <div class="text-center mt-10">
                                                            <h1 class="pt-5 pb-4 fw-bold">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
                                                                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                                                                </svg>
                                                                PUBLIC ADVISORY
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
                                                                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                                                                </svg>
                                                            </h1>
                                                            <div v-for="details in request_arr" :key="details" class="ps-5 pe-5">
                                                                <h2>{{details.venue}}</h2>
                                                                <h4 class="pb-4">{{newdate}} | {{details.time_s}} - {{details.time_e}}</h4>
                                                            </div>
                                                            <h4 class="pt-5">Posted by:</h4>
                                                            <img src="../assets/lib_logo.png" style="max-width: 50%; top: -50px; left: -50px;" class="text-right">
                                                        </div>
                                                    <!-- </div> -->
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
</template>

<script>
import SidePanelAdmin from '@/components/SidePanelAdmin.vue';
import Parse from 'parse';
import html2pdf from 'html2pdf.js';

const gapi = window.gapi;
export default{
    data(){
        return{
            request_arr: [],
            reports_arr: [],
            newdate: '',

            file_date: '',
        }
    },

    components: {
        SidePanelAdmin,
    },

    methods: {
        printMaterial(){
            
            // const element = document.getElementById("advisory");
            // html2pdf().from(element).save();
            const element = document.getElementById('advisory');
            const options = {
                margin:       0.5,
                filename:     this.file_date + "_" + 'advisory_post.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(element).set(options).save();
            console.log("Print");
        }
    },

    mounted: async function(){
        gapi.load("client:auth2", function () {
            gapi.auth2.getAuthInstance();
        });

        const googleUser = gapi.auth2.getAuthInstance();
        console.log(googleUser);

        if(!googleUser){
            this.$router.push({name: 'Login'});
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
        this.file_date = monthNames[month - 1] + "-" + new_day + "-" + year;
        // const new_month = monthNames[month - 1];
        console.log(this.newdate);
        
        const Request = Parse.Object.extend("Request");
        const request = new Parse.Query(Request);
        const query = await request.find();

        for(let i = 0; i < query.length; i++){
            if(this.newdate === query[i].get("date") && query[i].get("remarks") === 'Final'){
                if(query[i].get("status") === "Approved"){
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
                    })
                }
            }

            this.reports_arr.push([query[i].get("date"), query[i].get("full_name"), 
            query[i].get("email"), query[i].get("mobile_number"), query[i].get("time"), 
            query[i].get("org"), query[i].get("dept"), query[i].get("venue"), query[i].get("semester"), 
            query[i].get("remarks"), query[i].get("description"), query[i].get("status")],);
        }

        console.log(this.request_arr);
    },
}
</script>

<style scoped>
.scrollable{
  overflow-y: auto;
  max-height: 525px;
}

</style>