const filterBtns = [...document.querySelectorAll(".filter button")];

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove class 'active' from all buttons
    filterBtns.forEach((el) => {
      el.classList.remove("active");
     
    });
    // add class 'active' to
    btn.classList.add("active");
    const dataSearch = btn.dataset.search;
    const containers = document.querySelectorAll(".imgcontainer");
    if (["all", undefined].includes(dataSearch))
      containers.forEach((cont) => {
        cont.style.display = "block";
      });
      else if(dataSearch==="none")
      containers.forEach((cont) => {
        cont.style.display = "none";
      });
    else
      containers.forEach((cont) => {
        if ([...cont.classList].includes(dataSearch))
          cont.style.display = "block";
        else cont.style.display = "none";
      });
  });
});
