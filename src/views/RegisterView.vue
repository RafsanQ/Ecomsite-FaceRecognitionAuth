<template>
    <form @submit.prevent="handleSumit">
        <label>Username:</label>
        <input type="text" required v-model="username">
        <br>
        <label>Email:</label>
        <input type="email" required v-model="email">
        <br>
        <div class="submit">
            <button>Create Account</button>
        </div>
    </form>
</template>

<script>
    export default{
        data(){
            return {
                email: '',
                username: ''
            }
        },
        methods:{
            handleSumit(){
                console.log('Email:', this.email)
                console.log('Username:', this.username)
                window.faceio.enroll({
                    "local": "auto",
                    "payload":{
                        "whoami": this.username,
                        "email": this.email
                    }
                }).then(userInfo => {
                    // User Successfully enrolled
                    alert(`User Successfully Enrolled! Details:
                            Unique Facial ID: ${userInfo.facialId}
                            Enrollment Date: ${userInfo.timestamp}`)
                    console.log(userInfo)
                    // handle success, save the facial ID (userInfo.facialId), redirect to the dashboard...
                    this.$router.push({name: 'home'})
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label{
        color: #aaa;
        display: inline-block;
        margin: 20px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    .pill{
        display: inline-block;
        margin: 20px 10px 0 0 ;
        padding: 6px 12px;
        background: #eee;
        font-size: 12px;
        border-radius: 20px;
        letter-spacing: 1px;
        color: #777;
        cursor: pointer;
    }
    button{
        background: #3693ab;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: whitesmoke;
        border-radius: 20px;
        cursor: pointer;
    }

    .submit{
        text-align: center; 
    }
   
    .passworderror{
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>