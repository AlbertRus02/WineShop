function vineBlock(){
    window.scrollTo({
    top: 1800,
    left: 0,
    behavior:"smooth"
    });
}

function tasting(){
    window.scrollTo({
    top: 2650,
    left: 0,
    behavior:"smooth"
    });
}

function detailsVine(){
    document.querySelector(".BlockDetailsVine").style.display = "flex";
    document.querySelector("body").style = "overflow: hidden;";
}

function detailsVine_exit(){
    document.querySelector(".BlockDetailsVine").style.display = "none";
    document.querySelector("body").style = "overflow-y: scroll;";
}

function recordBlock_open(){
    document.querySelector(".BlockRecordInfo").style.display = "flex";
    document.querySelector("body").style = "overflow: hidden;";
}

function recordBlock_close(){
    document.querySelector(".BlockRecordInfo").style.display = "none";
    document.querySelector("body").style = "overflow-y: scroll;";
}