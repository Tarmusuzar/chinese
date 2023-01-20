<template>
   <form action="" class="container">
        <img src="../assets/gclogo.png" alt="Gypsy Chinese Logo">
        <input type="text" placeholder="Name" class="nameInput">
        <input type="text" placeholder="Mobile Number" class="numberInput">
        <span class="rememberMe"><input type="checkbox"  > Remember Me</span>
        <button @click.prevent="edit">Order Now</button>
        <p>Continue As Guest</p>
   </form>
   <footer>
    <b>&copy; Gypsy Chinese Restaurant LLC 2023</b>
   </footer>
</template>
<script>
 export default{
   methods:{
edit(){
alert()
}
}
}
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        max-width: 30rem;
        width: 90%;
        margin: 10vh auto;
        justify-content: center;
        color: gray;
        height: 60vh;
        padding: 1rem;

        
    }
    img{
        max-width: 5rem;
        max-height: 5rem;
        border-radius: 5px;
        margin: 0 auto 2rem auto;
    }
    input,button{
        padding: .5rem;
        border: 1px solid rgb(160, 159, 159);
        border-radius: 5px;
        font-size: 1.2rem;
    }
    .nameInput{
        border-bottom: none;
    }
    .numberInput{
        border-top:    1px solid rgb(182, 182, 182);
    }
    .rememberMe{
        margin: .4rem 0 ;
        padding: .5rem;
        font-size: 1.2rem;
    }
    button{
        padding: .6rem;
        background-color:rgb(201, 21, 21) ;
        border: 1px solid white;
        color: white;

    }
    button:hover,p:hover,span:hover{
        cursor: pointer;
    }
    p{
        text-align: center;
        padding:2rem;
        color: rgb(9, 11, 28);
        font-size: 1.2rem;
        text-decoration: underline;
    }
    footer{
        text-align: center;
    }
    b{
        color: gray;
    }

</style>
