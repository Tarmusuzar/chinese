<template>
                <h1>Add Product</h1>

    <form action="" class="addProductForm">
        <input id="first" type="text" placeholder="Product Name" v-model="name">
        <input type="text" placeholder="Product Price" v-model="price">
        <input type="text" placeholder="Product Description" v-model="description">
        <select name="category" id="" v-model="category" @click="toggleCategory">
            <option value="combo"  >Combo</option>
            <option value="rice">Rice</option>
            <option value="noodles">Noodles</option>
            <option value="starter">Starter</option>
        </select>
        <select name="foodType" id="" v-model="foodType" v-if="categorySelected">
            <option value="veg" >Veg</option>
            <option value="chicken">Chicken</option>
            <option value="prawns">Prawns</option>
        </select>

        <button @click.prevent="addProduct">Upload</button>
    </form>
</template>
<script>
export default {
    watch:{
     category(value){
        if(value === 'starter'){
            this.categorySelected = true
        }else{
            this.categorySelected = false
        }
     }   
    },
    data(){
        return{
            name:'',
            price:'',
            category:'',
            description:'',
            foodType:'',
            categorySelected:false
        }
    },
    methods:{
        
        addProduct(){
            //post combos to combo folder
            if(this.category === 'combo'){
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/combos.json',
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({
                    name:this.name,
                    price:this.price,
                    decription:this.description
                    
                })
                }).then(data=>{
                    if(data.ok){
                        this.$router.push('/admin')
                    }else{
                        this.$router.push('/error')
                    }
            }
            )
            }

            //post rice products to rice folder
            else if(this.category === 'rice'){
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/rice.json',
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({
                    name:this.name,
                    price:this.price,
                    decription:this.description
                    
                })
                }).then(data=>{
                    if(data.ok){
                        this.$router.push('/admin')
                    }else{
                        this.$router.push('/error')
                    }
            }
            )
            }

            //push noodles to noodles folder
            else if(this.category === 'noodles'){
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/noodles.json',
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({
                    name:this.name,
                    price:this.price,
                    decription:this.description
                    
                })
                }).then(data=>{
                    if(data.ok){
                        this.$router.push('/admin')
                    }else{
                        this.$router.push('/error')
                    }
            }
            )
            }
            else if(this.category === 'starter'&& this.foodType === 'veg'){
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/starter/veg.json',
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({
                    name:this.name,
                    price:this.price,
                    decription:this.description
                    
                })
                }).then(data=>{
                    if(data.ok){
                        this.$router.go()
                    }else{
                        this.$router.push('/error')
                    }
            }
            )
            }
            
        }
    }
}
</script>
<style  scoped>
    .addProductForm{
        /* height: 50vh; */
        display: flex;
        flex-direction: column;
        max-width: 20rem;
        width: 80%;
        margin: 10vh auto;
        justify-content: center;
        /* border: 1px solid red; */
        white-space: nowrap;
        padding: .8rem;
        box-shadow: 0 0  2px 1px gray;
        border-radius: 4px;

    }
    .addProductForm input,select{
        padding: .5rem;
        margin: .3rem ;
        font-size: 1.3rem;

    }
   h1{
        text-align: center;
        background-color: red;
        color: white;
        padding: .5rem;
    }
    
    .addProductForm button{
        margin: .9rem auto 3rem auto;
        font-size: 1.5rem;
        padding: .2rem;
        width: 80%;
        color: white;
        background-color: rgb(254, 34, 34);
        border: 1px solid wheat;
        border-radius: 5px;
    }
    #first{
        margin-top: 2rem;
    
    }

</style>
