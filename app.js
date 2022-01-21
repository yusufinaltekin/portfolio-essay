const sidebar = document.querySelector(".sidebar");
const nav = document.querySelector(".nav>ul");
const sidebarClose = document.querySelector(".close");




sidebar.addEventListener("click", () => {
    nav.classList.add("active");
    sidebarClose.style.display = "block";
    sidebarClose.style.visibility = "inherit";
    if (nav.classList == "active") {
        sidebar.style.display = "none";
        document.body.style.overflow = "hidden";
    }

    // nav.classList.add("active");
    // sidebarClose.classList.add("show")
    // if(nav.classList=="active"){
    //     sidebar.style.display="none";
    //     document.body.style.overflow = "hidden";
    // }
})
console.log(nav.style)

sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
    sidebarClose.style.display = "none";
    sidebar.style.display = "block";

    if (nav.classList != "active") {
        document.body.style.overflowY = "scroll";
    }


})


