<template>
  <div class="container">
    <div class="share_container">
    <font>Share the URL below so others can join your peerplay</font>  
    </div>

    <div class="peer_link_container">
      <font>peer link</font>
      <div class="peer_input_container">
        <div class="peer_icon">
          <i class="fa-solid fa-link"></i>
        </div>
        <div class="input_container">
          <input type="url">
        </div>
        <div class="copy_container">
          <i class="fa-solid fa-copy"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.share_container{
    width: 373px;
    height: 72px;
    margin-top: 30px;
    border-radius: 4px;
     text-align: center;
    border: 1px solid rgba(229, 228, 231, 1);
    padding-top: 15px;
     
}
font {
   font-family: inter;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color:rgba(5, 1, 26, 0.7);
   
}
.peer_link_container{
  padding-top: 30px;
}
.peer_input_container{
  width: 376px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid rgba(101, 70, 252, 1);
  border-radius: 4px;
  margin: 10px auto;
}
.input_container{
  width: 286px;
  height: 24px;
}
.input_container input {
  width: 268px;
  height: 24px;
  font: inter;
  font-family: 400;
  outline: none;
}
.fa-solid {
  color: rgba(80, 77, 95, 1);
}
</style>