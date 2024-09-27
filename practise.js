

const item = document.querySelector("#item");
const todobox = document.querySelector("#tod-box")



item.addEventListener("keyup",function(event) {
   
if(event.key === "Enter"){
      otdo(this.value);
      this.value = "";
}
});
const otdo = (item) => {
        const listitem = document.createElement("li");
        listitem.innerHTML = ` ${item}
                <ion-icon name="close-circle-outline" class="icon"></ion-icon></li>`;
                listitem.addEventListener("click",function() {
                  this.classList.toggle("done");
               });
              
               listitem.querySelector(".icon").addEventListener("click",function() {
                  listitem.remove();
               })
                todobox.appendChild(listitem);
}
















