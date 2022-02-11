$(".renng").click(function(){
    $(this).css("border-bottom", "solid 1px red") 
});
const inputsearch = document.querySelector(".bo1 input")
document.addEventListener("click", function(event) {
  if (event.target.closest(".renng")) return
  inputsearch.style = "border-bottom: 1px solid #a7a7a7";
})
