let list = listOrig.slice();
getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
pickStudent = () => {
    const picked = list[getRandomInt(0, list.length - 1)];
    $("#studentName").text(picked);
}
removeStud = (id) => {
    list.splice(id, 1);
    buildList();
}
buildList = () => {
    $("#studentList").empty();
    list.forEach((elem, id) => {
        let newNameElem = $("<span class='studentListItm'><button class=' btn btn-danger' onclick='removeStud(" + id + ")'>x</button> " + elem + "</span>");
        $("#studentList").append(newNameElem)
    })
}

resetList = () => {
    list = listOrig.slice();
    buildList();
}
window.onload = () => {
    buildList();
}