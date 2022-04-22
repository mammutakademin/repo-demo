<template>
  <div v-if=showPopup class="popup">
    <p>Accept cookies?</p>
    <button @click="saveCookies">Yes</button>
    <button @click="showPopup = false">No</button>  
  </div>  
</template>

<script>
export default {
  data(){
    return{
      accept: false,
      showPopup: true
    }
  },
  methods:{
    saveCookies(){
      this.showPopup = false
      localStorage.setItem('accept', 'true')
    }
  },
  beforeMount(){
    let status = localStorage.getItem('accept')
    if(status){
      this.showPopup = false
    }
  }
}
</script>

<style>

</style>