function GetSelected() {

    var selected = [];

    var tblFruits = document.getElementById("tblFruits");

    var chks = tblFruits.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }

    if (selected.length > 0) {
        alert("Selected values: " + selected.join(","));
    }
};

