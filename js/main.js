// Calendar Settings
$(document).ready(function() {
  $("#MADate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#bachDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#PHDDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#MOEDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#nowDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
});
// Change the message for required fields
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        e.target.setCustomValidity("الحقل مطلوب");
      }
    };
    elements[i].oninput = function(e) {
      e.target.setCustomValidity("");
    };
  }
});

function calcAmount() {
  var year_amount = document.getElementById("year_amount");
  var mount = 0;

  var ele = document.getElementById("year1").value;
  if (ele == "") {
    ele = 0;
  }
  var mediat = document.getElementById("year2").value;
  if (mediat == "") {
    mediat = 0;
  }
  var high = document.getElementById("year3").value;
  if (high == "") {
    high = 0;
  }
  var boss = document.getElementById("year4").value;
  if (boss == "") {
    boss = 0;
  }
  var vboss = document.getElementById("year5").value;
  if (vboss == "") {
    vboss = 0;
  }
  var advisor = document.getElementById("year6").value;
  if (advisor == "") {
    advisor = 0;
  }
  var superv = document.getElementById("year7").value;
  if (superv == "") {
    superv = 0;
  }
  var other = document.getElementById("year8").value;
  if (other == "") {
    other = 0;
  }

  year_amount.value =
    parseInt(ele) +
    parseInt(mediat) +
    parseInt(high) +
    parseInt(boss) +
    parseInt(vboss) +
    parseInt(advisor) +
    parseInt(superv) +
    parseInt(other);
}

var datarow = [];
var script_url =
  "https://script.google.com/macros/s/AKfycbyv7U50qacELBdManA3SFMSEd-J6n3Cc2I1WaNU-Ds9X7JXd7U/exec";
function insert_value() {
  datarow = [];
  var national_id = $("#national_id").val();
  datarow.push(national_id);
  var name = $("#name").val();
  datarow.push(name);
  var job = $("#job").val();
  datarow.push(job);
  var phone = $("#phone").val();
  datarow.push(phone);
  var bach_type = $("#bach_type").val();
  datarow.push(bach_type);
  var dgree_type = $("#dgree_type").val();
  datarow.push(dgree_type);
  var bachDate = $("#bachDate").val();
  datarow.push(bachDate);
  var MA_type = $("#MA_type").val();
  datarow.push(MA_type);
  var MADate = $("#MADate").val();
  datarow.push(MADate);
  var PHD_type = $("#PHD_type").val();
  datarow.push(PHD_type);
  var PHDDate = $("#PHDDate").val();
  datarow.push(PHDDate);
  var job_type = $("#job_type").val();
  datarow.push(job_type);
  var teacher_job_type = $("#teacher_job_type").val();
  datarow.push(teacher_job_type);
  var MOEDate = $("#MOEDate").val();
  datarow.push(MOEDate);
  var nowDate = $("#nowDate").val();
  datarow.push(nowDate);
  var year1 = $("#year1").val();
  datarow.push(year1);
  var year2 = $("#year2").val();
  datarow.push(year2);
  var year3 = $("#year3").val();
  datarow.push(year3);
  var year4 = $("#year4").val();
  datarow.push(year4);
  var year5 = $("#year5").val();
  datarow.push(year5);
  var year6 = $("#year6").val();
  datarow.push(year6);
  var year7 = $("#year7").val();
  datarow.push(year7);
  var year8 = $("#year8").val();
  datarow.push(year8);
  var year_amount = $("#year_amount").val();
  datarow.push(year_amount);
  var m_year = $("#m_year").val();
  datarow.push(m_year);
  var f_year = $("#f_year").val();
  datarow.push(f_year);
  var url =
    script_url +
    "?callback=ctrlq&national_id=" +
    national_id +
    "&name=" +
    name +
    "&job=" +
    job +
    "&phone=" +
    phone +
    "&bach_type=" +
    bach_type +
    "&dgree_type=" +
    dgree_type +
    "&bachDate=" +
    bachDate +
    "&MA_type=" +
    MA_type +
    "&MADate=" +
    MADate +
    "&PHD_type=" +
    PHD_type +
    "&PHDDate=" +
    PHDDate +
    "&job_type=" +
    job_type +
    "&teacher_job_type=" +
    teacher_job_type +
    "&MOEDate=" +
    MOEDate +
    "&nowDate=" +
    nowDate +
    "&year1=" +
    year1 +
    "&year2=" +
    year2 +
    "&year3=" +
    year3 +
    "&year4=" +
    year4 +
    "&year5=" +
    year5 +
    "&year6=" +
    year6 +
    "&year7=" +
    year7 +
    "&year8=" +
    year8 +
    "&year_amount=" +
    year_amount +
    "&m_year=" +
    m_year +
    "&f_year=" +
    f_year +
    "&action=insert";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

function ctrlq(e) {
  let resultStatus = e["resultStatus"];
  let result = e["result"];
  console.log(result);
  console.log(resultStatus);
  //alert(result);
  if (resultStatus == 0) {
    document.getElementById("message").innerHTML =
      '<div class="alert alert-danger mt-5" role="alert">انت مسجل مسبقاً بالفصل الصيفي الرجاء التواصل مع إدارة المدرسة</div> ';
    document.getElementById("message-bottom").innerHTML =
      '<div class="alert alert-danger mt-5" role="alert">انت مسجل مسبقاً بالفصل الصيفي الرجاء التواصل مع إدارة المدرسة</div> ';
  } else if (resultStatus == 1) {
    document.getElementById("message").innerHTML =
      '<div class="alert alert-primary mt-5" role="alert">تم تسجيلك بالفصل الصيفي بنجاح الرجاء التوجه إلى ادارة المدرسة بملف يحوي المؤهلات</div> ';
    document.getElementById("message-bottom").innerHTML =
      '<div class="alert alert-primary mt-5" role="alert">تم تسجيلك بالفصل الصيفي بنجاح الرجاء التوجه إلى ادارة المدرسة بملف يحوي المؤهلات</div> ';
    document.getElementById("resetForm").reset();
  } else {
    document.getElementById("message").innerHTML =
      ' <div class="alert alert-danger mt-5" role="alert">الرجاء المحاولة بوقت آخر </div> ';
    document.getElementById("message-bottom").innerHTML =
      ' <div class="alert alert-danger mt-5" role="alert">الرجاء المحاولة بوقت آخر </div> ';
  }
  datarow = [];
}
