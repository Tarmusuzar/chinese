<template>
                <h1>Add Product</h1>

    <form action="" class="addProductForm">
        <input id="first" type="text" placeholder="Product Name">
        <input type="text" placeholder="Product Price">
        <input type="text" placeholder="Product Category">
        <input type="text" placeholder="Product Description">

        <button>Upload</button>
    </form>
</template>
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
        box-shadow: 0 0  5px 3px gray;
        border-radius: 4px;

    }
    .addProductForm input{
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