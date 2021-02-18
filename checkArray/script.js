var selected = [];

function GetSelected() {

        //Reference the Table.
        var tblFruits = document.getElementById("tblFruits");

        //Reference all the CheckBoxes in Table.
        var chks = tblFruits.getElementsByTagName("INPUT");

        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }

        //Display the selected CheckBox values.
         if (selected.length > 0) {
             alert("Selected values: " + selected.join(","));
         }
    }

    // function test(){
    //     alert("Selected values: " + selected.join(","));
    // }
console.log(selected);