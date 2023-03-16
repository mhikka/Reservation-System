<template>
    <body style="background-color: #C0C0C0;">
    </body>
</template>
<script>

export default({
    //after this page was accessed by a page navigation
    mounted: async function(){
        this.$router.go(-1); //this line will push back the user 1 page backwards, returning them to the previous page
    }
})
</script>