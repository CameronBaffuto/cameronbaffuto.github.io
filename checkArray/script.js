var selected = [];

function GetSelected() {
        var tblFruits = document.getElementById("tblFruits");

        var chks = tblFruits.getElementsByTagName("INPUT");

        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }

         if (selected.length > 0) {
             // alert("Selected values: " + selected.join(","));
             document.getElementById('vae').style.display = "block";
         }
    }

    function launchVAE() {
        alert("'" + selected.join(",") + "'");
    }

var template = "";

function GetTemplateID() {
    com.veeva.clm.getApprovedDocument("https://vvagency-bionicalus.veevavault.com","38",GetFragmentID);
}

function GetFragmentID(result) {
    template=result.Approved_Document_vod__c.ID;
    com.veeva.clm.getApprovedDocument("https://vvagency-bionicalus.veevavault.com","36",SendEmail);

}

function SendEmail(result) {
    com.veeva.clm.launchApprovedEmail(template,result.Approved_Document_vod__c.ID,finalCall)
}

function finalCall() {
}