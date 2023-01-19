<template>
    <form action="" class="container">
        <h1>Add New Products</h1>

        <input type="text" placeholder="Item Name" v-model="itemName">
        <input type="number" placeholder="Item Price" v-model="itemPrice">
        <textarea name="decription" id="" cols="30" rows="10" v-model="itemDescription" placeholder="Describe The Item"></textarea>
        <select name="category" id="" v-model="itemCategory">
            <option value="Combos">Combos</option>
            <option value="Rice">Rice</option>
            <option value="Noodles">Noodles</option>
            <option value="MainCourse">Main Course</option>
        </select>
        <button  @click.prevent="uploadProduct">Submit</button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            existingCategories:[],
            existingItems:[],
            itemName:'', 
            itemPrice:'', 
            itemDescription:'', 
            itemCategory:'', 
        }
    },
    methods:{
        
    },
    created(){
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/items.json').then(response=>{//fetch data from db
                if(response.ok){
                    return response.json()
                }else{
                    return []
                }
            }).then(data=>{
                for(const item in data){
                    for(const pdt in data[item]){                   
                        this.existingItems.push({[pdt]:data[item][pdt]}) //data to variable as an object to cross check before uploading
                        
                }
                

                }
                for(const items in this.existingItems){
                    for(const pdt in this.existingItems[items]){
                        this.existingCategories.push(pdt)//check exisitng categories to avoid duplication
                    }
                }
                // console.log(this.existingCategories)
                console.log(this.existingItems)
                // console.log(this.existingCategories)

               

                

            })
    }
}
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 20vh auto;

    }
    input,textarea,select,button{
        padding: .4rem;
        border: 1px solid gray;
        border-radius: 5px;
        border-bottom: none;
        font-size: 1.2rem;
    }
    textarea{
        height: 5rem;
    }
    button{
        border-bottom: 1px solid gray;        
    }
    h1{
        text-align: center;
        margin-bottom:4rem;

    }
    
</style>