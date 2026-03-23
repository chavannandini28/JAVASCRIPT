function logout(){
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

if(priceRange){
    priceRange.oninput = () => {
        priceValue.innerText = priceRange.value;
    };
}

function filterProperties(){
    let loc = document.getElementById("searchLocation").value.toLowerCase();
    let type = document.getElementById("propertyType").value;
    let max = priceRange.value;

    document.querySelectorAll(".property").forEach(p=>{
        let l = p.dataset.location.toLowerCase();
        let t = p.dataset.type;
        let price = p.dataset.price;

        if((loc==""||l.includes(loc)) && (type==""||t==type) && price<=max){
            p.style.display="block";
        } else {
            p.style.display="none";
        }
    });
}