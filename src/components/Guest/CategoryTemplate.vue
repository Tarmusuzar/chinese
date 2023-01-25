<template>
    
    <div class="menuContainer">
        <h1>{{ heading }}</h1>
    
    
        <ul class="menu">
        
            <li class="itemWrapper"  v-for="item in category " :key="item">
                <i class="fa-solid fa-circle-plus" id="add"></i>
                <img :src="item.image" alt="">
                <span id="itemDescription">{{ item.name }}</span>
                <span class="itemPrice">{{ item.price }}</span>
            </li>
        </ul>
      </div>
      
      
    </template>
    <script>
    export default {
        
        props:['category','heading']
        ,
    }
    </script>
    <style scoped>
    .menuContainer{
        margin-top: 2rem;
    
    }
    h1{
        margin: 1rem;
    }
        .menu{
            display: flex;
            flex-direction: row;
            width: 90%;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: center;
            margin: 0 auto;
        }
        .itemWrapper{
            position: relative;
            display: flex;
            flex-direction: column;
            flex-basis: auto;
            margin-top: 1rem;
        }
        #add{
            position: absolute;
            color: black;
            /* background-color: black; */
            font-size: 1.8rem;
            top: 8px;
            right: 12px;
    
    
    
        }
        .itemWrapper>img{
            width: auto;
            max-width: 10rem;
            height: 9rem;
            background-size: contain;
        }
    </style>