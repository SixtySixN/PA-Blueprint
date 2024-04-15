function addFooter(sysTxt) {
    //var str = parseInt(document.getElementById('sysTxt').value);
    var str = document.getElementById('sysTxt').value;
    $(document).ready(function () {
        $('footer').empty().append("<p>" + "SYSTEM:&nbsp;" + str + "</p>");
    });
}
// Logo Uploader
function showpreview(e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#previewImage").attr("src", e.target.result);
    }
    //Imagepath.files[0] is blob type
    reader.readAsDataURL(e.files[0]);
}

$('button31').click(function (event) {
    var content = document.getElementById('printArea')
});

//System Type Picker
$(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box").hide();
            }
        });
    }).change();
});

function setTemplate(tplt) {
    $('#template').load(tplt);
  }
  
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
 // document.getElementById("defaultOpen").click();