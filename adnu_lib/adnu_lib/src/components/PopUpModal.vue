<template>
    <div class="vue-modal">
        <div class="vue-modal-inner">
            <div class="vue-modal-content " id="btns">
                <slot ></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            messages_post: [],
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
            document.location.reload();
        },
        createPost(){
            this.$emit('create')
        },

    },

};
</script>
<style scoped>

*, 

::before,
::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.vue-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.507);
    z-index: 1;
}
.vue-modal-inner{
    max-width: 700px;
    margin: 5rem auto;

}

.vue-modal-content{
    position: relative;
    width: 950px;
    margin: auto;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.3);
    background-clip: padding-box;
    border-radius: 0.5rem;
    padding: 1rem;
}

#createBtn:hover{
    color: rgb(44, 111, 255);
}

#cancelBtn:hover{
    color: red;
}
</style>