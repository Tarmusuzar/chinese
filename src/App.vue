<template>
    <div>
     <router-view></router-view>   
    </div>
</template>
<script>

export default{
    data(){
        return{
            menuCategory:{
                combo:[{name:'mee',price:5100},{name:'mee',price:40}],
                Rice:[{name:'Chicken Fried Rice',price:22}]
            },
        
        }
    },
    created(){
        for(const item in this.menuCategory){
           for(const items in this.menuCategory[item]){
            console.log(this.menuCategory[item][items].name)
           }
       }
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