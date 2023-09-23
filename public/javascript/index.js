const recipesAPI = new APIHandler("http://localhost:8000");

window.onload=()=>{
    recipesAPI.getOneRegister(2)
    .then(recipe=>{
        console.log(recipe)
    })
    .catch(error=>{
        console.log("error in getting recipe",)
    })
    recipesAPI.getOneRegisterByTitle("Spinach Scrambled Eggs")
    .then(recipe=>{
        console.log(recipe)
    })
    .catch(error=>{
        console.log("error in getting recipe",)
    })
    
}