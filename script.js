const form = document.querySelector("#myform")
const icon = document.querySelector("#icon");
const content = document.querySelector("#content")

icon.addEventListener("click", ( )=> {
    content.classList.toggle("d-none")
});

form.addEventListener("submit", () => {
    const username = document.getElementsByName("username")
})

