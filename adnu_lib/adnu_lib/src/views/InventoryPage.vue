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
                            Inventory
                        </h1>
                    </div>
                    <div class="col-4 pt-4 me-4">
                        <button class="btn btn-outline-primary float-end mb-4" type="submit" @click="addEquipments">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            Add Inventory
                        </button>
                    </div>
                </div>
                <hr style="background-color: black; height: 2px;">
                <div class="row">
                    <div class="col pb-2">
                        <div class="card" style="height: auto;">
                            <div class="card-header text-start">
                                List of Equipments
                            </div>
                            <div class="scrollable">
                                <div class="text-start p-2">    
                                    <div class="card" v-if="len_of_arr === 0">
                                        There are not any open requests at this time.
                                    </div>
                                    <div class="card" v-else>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Item</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="details in equip_arr.slice().reverse()" :key="details">
                                                    <tr>
                                                        <th scope="row">{{ details.items }}</th>
                                                        <th scope="row">{{ details.quantity }}</th>
                                                        <th scope="row" @click="editItem(details.id)"><a href="#">Edit</a></th>
                                                        <th scope="row" @click="deleteItem(details.id)"><a href="#" class="text-danger">Delete</a></th>
                                                    </tr>
                                                </tbody>
                                            </table>
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

    <div v-if="open_modal === true">
        <AdminModal>
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-end">
                        <div class="col-sm pt-2">
                            <div class="row justify-content-end">
                                <div class="col-4">
                                    <h4 class="fw-bold">Edit</h4>
                                    <hr stlye="background-color: black">
                                </div>
                                <div class="col-4">
                                    <button @click="close_modal" class="btn btn-outline-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div v-for="details in equip_arr.slice().reverse()" :key="details">
                                    <div v-if="id_holder === details.id">
                                        <div class="form-group pb-2">
                                            <label for="exampleInputEmail1" class="float-start">Equipment Name</label>
                                            <input v-model="details.items" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit the equipment name">
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Quantity</label>
                                            <input v-model="details.quantity" type="text" class="form-control" id="exampleInputPassword1" placeholder="Edit the quantity">
                                        </div>
                                        <div class="pt-4">
                                            <button class="btn btn-primary float-start" type="submit" @click="updateEquipment(details.items, details.quantity)">
                                                Update
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminModal>
    </div>

    <div v-if="open_add === true">
        <AdminModal>
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-end">
                        <div class="col-sm pt-2">
                            <div class="row justify-content-end">
                                <div class="col-4">
                                    <h4 class="fw-bold">Add</h4>
                                    <hr stlye="background-color: black">
                                </div>
                                <div class="col-4">
                                    <button @click="close_modal" class="btn btn-outline-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputEmail1" class="float-start">Equipment Name</label>
                                            <input v-model="item" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add equipments here">
                                        </div>
                                        <div class="form-group pb-2">
                                            <label for="exampleInputPassword1" class="float-start">Quantity</label>
                                            <input v-model="quantity" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the quantity here">
                                        </div>
                                        <div class="pt-4">
                                            <button class="btn btn-primary float-start" type="submit" @click="add(item, quantity)">
                                                Add
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminModal>
    </div>
</template>

<script>
import SidePanelAdmin from "@/components/SidePanelAdmin.vue";
import AdminModal from "@/components/AdminModal.vue";
import Parse from 'parse';

const gapi = window.gapi;
export default{
    components: {
        SidePanelAdmin, AdminModal,
    },

    data(){
        return{
            equip_arr: [],
            len_of_arr: '',
            open_modal: false,
            open_add: false,
            id_holder: '',

            item: '',
            quantity: '',
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
        
        const Equipments = Parse.Object.extend("Equipments");
        const equipments = new Parse.Query(Equipments);
        const query = await equipments.find();

        for(let i = 0; i < query.length; i++){
            this.equip_arr.push({
                id: query[i].id,
                items: query[i].get("Items"),
                quantity: query[i].get("Quantity"),
            });
            this.len_of_arr = this.equip_arr.length;
        }

    },

    methods: {
        editItem(id){
            console.log(id);
            this.id_holder = id;
            this.open_modal = true;
            // this.updateEquipment(id);
        },

        addEquipments(){
            console.log("This is clicked");
            this.open_add = true;
        },

        add(){
            const Equipments = Parse.Object.extend("Equipments");
            const equipments = new Equipments;

            equipments.set("Items", this.item);
            equipments.set("Quantity", this.quantity);

            equipments.save().then((equip) => {
                console.log(equip.id);
            });
            this.close_modal();
        },

        async updateEquipment(item, quantity){
            console.log("This is the ID: ", this.id_holder);
            // console.log(item, quantity);
            const Equipments = Parse.Object.extend("Equipments");
            const equipments = new Parse.Query(Equipments);

            equipments.equalTo("objectId", this.id_holder);
            const equip = await equipments.first();

            equip.set("Items", item);
            equip.set("Quantity", quantity);

            equip.save().then((equip) => {
                console.log(equip.id);
            });
            this.close_modal();
        },

        async deleteItem(id){
            console.log(id);
            const Equipments = Parse.Object.extend("Equipments");
            const equipments = new Parse.Query(Equipments);

            equipments.equalTo("objectId", id);
            const equip = await equipments.first();

            equip.destroy();
            alert("Equipment Deleted!");
        },

        close_modal(){
            this.id_holder = '';
            this.item = '';
            this.quantity = '';
            this.open_modal = false;
            this.open_add = false;
        },
    }
}
</script>

<style scoped>
.scrollable{
  overflow-y: auto;
  max-height: 525px;
}

</style>