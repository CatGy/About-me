var isOpenBtnState = false;

function openCloseMenu() {
    let dropdown = document.getElementsByClassName("dropdown")[0];

    isOpenBtnState = !isOpenBtnState;
    
    if (isOpenBtnState) {
        if (dropdown.classList.contains("ease-out-to-left")) {
            dropdown.classList.remove("ease-out-to-left");
        }
        dropdown.classList.add("ease-in-from-left");
    } else {
        if (dropdown.classList.contains("ease-in-from-left")) {
            dropdown.classList.remove("ease-in-from-left");
        }
        dropdown.classList.add("ease-out-to-left");
    }
}
