// q1) change the colour of 1 ele in nava bar
document.getElementsByTagName("li")[0].firstElementChild.style.color ="red"

// q2 change the colour of last ele
document.getElementsByTagName("li")[0].lastElementChild.style.color ="green"

// q3 change all li clours in cyan
Array.from(document.getElementsByTagName("li")).forEach((ele)=>{
    ele.style.background = "cyan";
})