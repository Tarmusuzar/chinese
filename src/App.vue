<template>
    <div>
        <loading-spinner v-if="loading"></loading-spinner>
     <router-view></router-view>   
    </div>
</template>
<script>
import LoadingSpinner from './components/LoadingSpinner.vue'
export default{

    components:{
        LoadingSpinner
    },
    data(){
        return{
            loading:false,
            products:[],
            combos:[],
            noodles:[],
            rice:[],
            starters_veg:[],
            starters_chicken:[],
            starters_prawns:[],

        
        }
    },
    provide(){
        return{
            products:this.products,
            combos:this.combos,
            rice:this.rice,
            noodles:this.noodles,
            vegStarters:this.starters_veg,
            starters_chicken:this.starters_chicken,
            starters_prawns:this.starters_prawns,

        }
    },
    beforeCreate(){
       
       
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products.json')
        .then(response=>{
            if(response.ok){
                return response.json()
            }else{
                return []
            }
        })
        .then(data=>{
            this.loading = true
            //push the fetched products to the products array as an object
            for(const dat in data){
               this.products.push({[dat]:data[dat]})
            }
                        
          const fetchProducts = (theCategory,folder)=>{
            for(const product in this.products){//loop through products
                for(const category in this.products[product]){
                    if(category ===theCategory){// if a category is combo, push the value of this category to the combos
                        for(const id in this.products[product]){
                            for(const item in this.products[product][id]){
                                folder.push(this.products[product][id][item]) 
                                     
                                    }           
                                        }
                                
                                
                            }
                   
                }
           }

          }
          fetchProducts('combos',this.combos)
          fetchProducts('noodles',this.noodles)
          fetchProducts('rice',this.rice)
          fetchProducts('starters_veg',this.starters_veg)
          fetchProducts('starters_veg',this.starters_chicken)
          fetchProducts('starters_veg',this.starters_prawns)
          this.loading =false

            
        })
        
       

    },
    beforeMount(){
        this.loading= true
    }
    
}
</script>
<style>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
</style>