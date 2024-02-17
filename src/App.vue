<template>
<div class="container">
  <div class="peer_play">
    <img src="./assets/peerplay1.png" alt="">
    <h2>PeerPlay</h2>
    <p>Making individuals connected <br> <span>through vidoes</span></p>
  </div>

  <div v-show="showPage">
     <div class="choose_container">
    <p>Choose video source</p>
   <div class="choose">
     <div class="video_logo">
      <span>
      <i class="fa-solid fa-video"></i>
    </span>
     </div>
      <select @change="updateIcon($event, 5)">
        <option value="" disabled selected >Select an option</option>
        <option value="youtube">Youtube</option>
        <option value="instagram">Instagram</option>
        <option value="option3">vimeo</option>
      </select>
   </div>
  </div>

  <div class="video_url">
    <p>Video URL</p>
    <div class="drop_video_container">
      <div class="span_container">
       <span>
      <i :class="input.class"></i>
      </span>
      </div>
      <div class="video_input_holder">
     <input type="url" :placeholder="input.placeHolder" required> 
      </div>
    </div> 
  </div>
  </div>

  <ShareUrl v-show="hidePage" class="share_url_component" />   
  <ButtonConnect @click="generateLink" :btnText=btnText />

<router-view/>
  
</div>
</template>



<script>
import ShareUrl from './components/ShareUrl.vue'
import ButtonConnect from './components/ButtonConnect.vue'
export default {
  name: 'App',
  components: {
    ShareUrl,ButtonConnect
  },
  data(){
    return {
      input: {
        class: 'fa-solid fa-link',
        placeHolder: 'Drop video url link',
      },
      hidePage: false,
      showPage: true,
      btnText: 'Generate Link',
      symLink: ""
    }
  },

  methods: {
    updateIcon(e){
      console.log(e)
      let input = {...this.input};
      input.class = 'fa-brands fa-'+e.target.value;
      input.placeHolder = 'drop '+e.target.value+' here';
      this.input = input;
    },
    generateLink: async function generateLink() {
      if (this.symLink != "" && this.symLink != null) {
        // redirect
        console.log("redirected")
        return
      } 
      this.btnText = "Generating..."
      // const data = {}
      // const url = ""
      try {
        // const response = await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(data)
        // })
        // this.symLink = await response.json()
        // this.btnText = "Join"
        setTimeout(() => {
          this.symLink = "https://google.com"
          this.showPage = false
          this.hidePage = true
          this.btnText = "Join"
        }, 1000)
      }catch(err) {
        this.btnText = "Generate Link"
        console.error(err.message || err)
        // display error
      }
    }
  }

}
</script>

<style>
@font-face {
  font-family: 'first_font';
  src: url('fonts/MonumentExtended-Ultrabold.otf')

}
@font-face {
  font-family: 'second_font';
  src: url('fonts/MonumentExtended-Regular(1).otf')

}
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@1&family=Exo+2:wght@300&family=Inter:wght@200;300&family=Lato&family=Nunito:wght@600;900&family=Playfair+Display:ital@1&family=Poppins:wght@200;400;500;600;700&family=Roboto&family=Roboto+Condensed:wght@700&family=Rubik+Bubbles&family=Rubik+Maps&display=swap');
*{
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.mind {
  width: 200px;
  height: 50px;
  color: rgb(154, 137, 137);
  background: #181616;
}
:root {
  --color1:rgba(5, 1, 26, 0.7);
  --color2: rgba(5, 1, 26, 1);
  --color3: rgba(5, 1, 26, 0.2);
  --color4:rgba(101, 70, 252, 1);
  --color-white: #FFFFFF;
  --color-red: #EB5757;
  --head-font:  

}
.color {
  width: 300px;
  height: 50px;
  color: white;
  background: red;
}
body{
  background: var(--color2);
}
#app {
  width: 416px;
  height: 555px;
  margin: 0 auto;
  background: var(--color-white);
  margin-top: 10%;
  border-radius: 4px;
}

.peer_play{
  display: flex;
  flex-direction: column;
  align-items: center;  
}
.peer_play img{
  width: 43px;
  padding-top: 40px;
}
.peer_play h2 {
  font-family: second_font;
  font-size: 20px;
  padding-top: 15px;
  line-height: 24px;
  color: var(--color2);
}
.peer_play p {
  padding-top: 20px;
  font-family: inter;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--color1);
}
.peer_play p span {
  margin: right;
  display: flex;
  align-items: center;
  justify-content: center;

}
.choose_container {
padding: 30px 20px;
}
.choose_container p {
  font-family: inter;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 10px;
  color: var(--color1);
}
.choose {
  display: flex;
  align-items: center;
  width: 376px;
  height: 48px;
  border: 0.5px solid rgba(80, 77, 95, 0.15);
  border-radius: 4px;
}
.choose  select{
  width: 376px;
  background: transparent;
  border: none;
 
}
.choose select option{
  width: 40px;
  height: 200px;
}
.choose span {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.video_logo {
  padding-right: 10px;
}
.fa-video {
  color: rgba(80, 77, 95, 1);
}
.video_url{
  padding: 0 20px;
}
.drop_video_container{
  display: flex;
  align-items: center;
  width: 376px;
  height: 48px;
  border: 0.5px solid rgba(80, 77, 95, 0.15);
  border-radius: 4px;
}
.video_url p {
   font-family: inter;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 10px;
  color: var(--color1);
}
.span_container {
  padding-right: 10px;
  margin-left: 10px;

}
.span_container span i {
   color: rgba(80, 77, 95, 1);
}

.video_input_holder input {
  width: 300px;
  height: 30px;
  outline: none;
}

</style>
