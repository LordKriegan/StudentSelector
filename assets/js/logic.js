let list = listOrig.slice();

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const removeStud = (id) => {
    list.splice(id, 1);
    buildList();
}

const buildList = () => {
    $("#studentList").empty();
    list.forEach((elem, id) => {
        let newNameElem = $("<span class='studentListItm'><button class='remStud btn btn-danger' onclick='removeStud(" + id + ")'>x</button> " + elem + "</span>");
        $("#studentList").append(newNameElem)
    })
}

window.onload = () => {
    buildList();

    $("#resetBtn").on("click", () => {
        list = listOrig.slice();
        buildList();
    })

    $("#pickStudentBtn").on("click", () => {
        const picked = list[getRandomInt(0, list.length - 1)];
        $("#studentName").text(picked);
    })

    $("#addStud").on("click", () => {
        const newName = prompt("Student Name: ");
        list.push(newName);
        list.sort();
        buildList();
    })
    // $(".remStud").on("click", () => {
    //     removeStud($(this).attr("data-id"));
    // })
}