<template>
    <signin-form
        prompt="Order Now"
        firstField = "Name"
        secondField ="Mobile Number"
        isGuest = true
        @submitted ="orderNow"
        :error=errorValue
        :errorMessage = errorMessage
    ></signin-form>
</template>

<script>
import SigninForm  from '../components/SigninForm'
export default {
    components:{
        SigninForm
    },
    data(){
        return{
            errorValue : false,
            errorMessage:''
        }
    },
    methods:{
        orderNow (name,number){
            if(name=== "" || number=== ''  ){
                this.errorValue = true
                this.errorMessage = 'Fill All Fields'
            }else{
                this.errorValue = false
                this.$router.push('/menu')

            }
        }
    }
}
</script>