let current_open_month = null;
let json = [{
        "id": "1",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Amount",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "2",
        "Sr No": "",
        "PolicyType": "Normal",
        "DepotName": "ADOOR STATION,PUNE STATION,BANGALORE STATION",
        "TripName": "1830TVMOTY Trivandrum - Ooty - 2X2(42) NAC Seater Swift via Kottarakkara",
        "IncDec": "Increase",
        "AmtType": "Percentage",
        "PercentAmt": "100",
        "FromDate": "22-Jun-23",
        "ToDate": "27-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "11-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "3",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "ADOOR STATION",
        "TripName": "1430TVMPLNI Trivandrum - Palani - 2X2(42) NAC Seater Swift",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "4",
        "Sr No": "",
        "PolicyType": "Normal",
        "DepotName": "ADOOR STATION,PUNE STATION,BANGALORE STATION",
        "TripName": "0831KKDTVM Kozhikode - Trivandrum - 2X2(42) NAC Seater Swift Vai Kollam",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "100",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Inactive",
        "EditPolicy": ""
    },
    {
        "id": "5",
        "Sr No": "",
        "PolicyType": "Normal",
        "DepotName": "Bangalore Bus Station",
        "TripName": "2000OTYTVM Ooty - Trivandrum - 2X2(42) NAC Seater Swift Via Kollam NEW",
        "IncDec": "Decrease",
        "AmtType": "Amount",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "6",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Amount",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "7",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "100",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "8",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Amount",
        "PercentAmt": "20",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "9",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Inactive",
        "EditPolicy": ""
    },
    {
        "id": "10",
        "Sr No": "",
        "PolicyType": "Normal",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "11",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Inactive",
        "EditPolicy": ""
    },
    {
        "id": "12",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "0831KKDTVM Kozhikode - Trivandrum - 2X2(42) NAC Seater Swift Vai Kollam",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },

    {
        "id": "13",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Inactive",
        "EditPolicy": ""
    },
    {
        "id": "14",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Inactive",
        "EditPolicy": ""
    },
    {
        "id": "15",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    },
    {
        "id": "16",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Inactive",
        "EditPolicy": ""
    },
    {
        "id": "17",
        "Sr No": "",
        "PolicyType": "Datewise",
        "DepotName": "Bangalore Bus Station",
        "TripName": "1733TVMBNG Trivandrum - Bangalore - 2X1(42) AC -Sleeper",
        "IncDec": "Decrease",
        "AmtType": "Percentage",
        "PercentAmt": "10",
        "FromDate": "22-Jun-23",
        "ToDate": "26-Jun-23",
        "CreatedByUser": "Khushboo Chitte",
        "CreatedDate": "10-Jul-23",
        "PolicyStatus": "Active",
        "EditPolicy": ""
    }

];
$(document).ready(function() {

    loadFlexiLayout();

});
$(function() {

    let startDate;
    let endDate;
    $("#from_date").datepicker({
        dateFormat: "dd-M-y",
        minDate: 0,
        maxDate: "+60d"
    }).datepicker("setDate", "0");

    $("#to_date").datepicker({
        dateFormat: "dd-M-y",
        minDate: 0,
        maxDate: "+60d"
    }).datepicker("setDate", "0");

    $('#from_date').change(function() {
        startDate = $(this).datepicker('getDate');
        $("#to_date").datepicker("option", "minDate", startDate);
    })

    $('#to_date').change(function() {
        endDate = $(this).datepicker('getDate');
        $("#from_date").datepicker("option", "maxDate", endDate);

    })

    $("#sel_date").click(function() {
        $("#date_modal").modal("show");
        let from_date = $("#from_date").val();
        let to_date = $("#to_date").val();
        let fromDate = new Date(from_date)
        let toDate = new Date(to_date)
        current_open_month = fromDate
        let currDate = new Date()
        currDate.setHours(0)
        currDate.setMinutes(0)
        currDate.setSeconds(0)
        renderCalender(fromDate, fromDate, toDate);


    })
    $("#next_icon").click(function() {
        let from_date = $("#from_date").val();
        let fromDate = new Date(from_date)
        var max_date = new Date(fromDate);
        max_date.setDate(max_date.getDate() + 60); //Dates enable upto 60 days
        let to_date = $("#to_date").val();
        let toDate = new Date(to_date)
        let next_month = new Date(current_open_month.getFullYear(), current_open_month.getMonth() + 1, 1)
        current_open_month = next_month;
        if (max_date.getMonth() < next_month.getMonth()) {
            $(this).removeClass("next-icon")
            $(this).addClass("next_disabled_arrow")
        } else {
            $("#prev_icon").removeClass("prev_disabled_arrow")
            $("#prev_icon").addClass("prev-icon")
            renderCalender(fromDate, next_month, toDate);

        }
    })
    $("#prev_icon").click(function() {
        let from_date = $("#from_date").val();
        let fromDate = new Date(from_date)
        let to_date = $("#to_date").val();
        let toDate = new Date(to_date)
        let prev_month = new Date(current_open_month.getFullYear(), current_open_month.getMonth() - 1, 1)
        current_open_month = prev_month;
        if (fromDate.getMonth() > prev_month.getMonth()) {
            $(this).removeClass("prev-icon")
            $(this).addClass("prev_disabled_arrow")
        } else {
            $("#next_icon").removeClass("next_disabled_arrow")
            $("#next_icon").addClass("next-icon")
            renderCalender(fromDate, prev_month, toDate);
        }

    })

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

});


$(".chosen").chosen();

$("#save_trips").click(function() {
    let trips = []
    let tripname = ""
    let shortname = ""
    $("input[name=trip_name]:checked").each(function() {
        trips.push($(this).val());
    })
    tripname = trips.join(",")
    $("#input_trip").val(tripname)

    if (tripname.length > 50) {
        shortname = tripname.substring(0, 45) + " ...";
        $('#input_trip').val(shortname);
    }
    $("#trips_modal").modal("hide");
    $("#input_trip").prop("title", tripname)


})
$("#save_depots").click(function() {
    let depots = []
    let depotname = ""
    let short = ""
    $("input[name=depots_name]:checked").each(function() {
        depots.push($(this).val());
    })
    depotname = depots.join(",")
    $("#input_depot").val(depotname)
    if (depotname.length > 37) {
        short = depotname.substring(0, 37) + " ...";
        $('#input_depot').val(short);
    }
    $("#depo_modal").modal("hide");
    $("#input_depot").prop("title", depotname)
})


$(".form-group .form-control1").blur(function() {
    if ($(this).val() != "") {
        $(this).siblings(".placeholder1").addClass("active");
    } else {
        $(this).siblings(".placeholder1").removeClass("active");
    }
});
$(".form-group .form-control1").blur(function() {
    if ($(this).val() != "") {
        $(this).siblings(".select-date").addClass("active");
    } else {
        $(this).siblings(".select-date").removeClass("active");
    }
});

$(".normal-btn").click(function() {
    $("#normal").removeClass("datewise-btn")
    $("#normal").addClass("normal-btn")
    $("#datewise").addClass("datewise-btn")
    $("#from_date").prop("disabled", true).parent().removeClass("enabled")
    $("#to_date").prop("disabled", true).parent().removeClass("enabled")
    $("#sel_date").prop("disabled", true).parent().removeClass("enabled")
    $("#date_modal").modal("hide");
});
$(".datewise-btn").click(function() {
    $("#datewise").removeClass("datewise-btn")
    $("#datewise").addClass("normal-btn")
    $("#normal").addClass("datewise-btn")
    $("#from_date").prop("disabled", false).parent().addClass("enabled")
    $("#to_date").prop("disabled", false).parent().addClass("enabled")
    $("#sel_date").prop("disabled", false).parent().addClass("enabled")


});

$('#select_all').on('click', function() {
    if (this.checked) {
        $('.selected_trips').each(function() {
            this.checked = true;
        });
    } else {
        $('.selected_trips').each(function() {
            this.checked = false;
        });
    }
});
$('#select_all_depots').on('click', function() {
    if (this.checked) {
        $('.selected_depots').each(function() {
            this.checked = true;
        });
    } else {
        $('.selected_depots').each(function() {
            this.checked = false;
        });
    }
});
$("#depots_searchbar").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".city-list .select-trips").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
$("#trips_searchbar").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".trip-list .select-trips").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
// $("#arrow_btn").on("click", function() {
//     let from = $("#fromcity").val().toLowerCase();
//     let to = $("#tocity").val().toLowerCase();

//     $(".trip-list .select-trips").filter(function() {
//         let fromindex = $(this).find("input[type=checkbox]").val().toLowerCase().indexOf(from) > -1
//         let toindex = $(this).find("input[type=checkbox]").val().toLowerCase().indexOf(to) > -1
//         if (fromindex && toindex) {
//             console.log($(this).find("input[type=checkbox]").val());
//         }
//         // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });

// })

function loadFlexiLayout() {

    let tablechartlayout = $('#flexi_layout').DataTable({
        data: json,
        columns: [
            { data: 'Sr No' },
            { data: 'PolicyType' },
            {
                data: 'TripName',
                render: function(data, type, row, meta) {
                    return type === 'display' && data.length > 50 ?
                        '<div  title="' + data + '">' + data + '<span tabindex="0" style="text-decoration:underline; text-decoration-color:#005575; " data-html="true" data-toggle="tooltip"  title="' + data + '"><span  style="color:#005575"> + <span>' + $("input[name=depots_name]:checked").length + '</span> More</span></button></span></div>' :
                        data;

                }
            },
            { data: 'IncDec' },
            { data: 'PercentAmt' },
            { data: 'FromDate' },
            { data: 'ToDate' },
            { data: 'CreatedByUser' },
            { data: 'CreatedDate' },
            {
                data: 'PolicyStatus',
                render: function(data, type, row, meta) {
                    if (data == "Active") {
                        return '<input type="checkbox" checked>';
                    } else {
                        return '<input type="checkbox">';
                    }

                }
            },
            {
                data: 'EditPolicy',
                render: function(data, type, row, meta) {
                    return '<div id="Action-' + row.id + '" style="display:flex;"><div class="editBtn"><a class=\"edit_link\"><span class=\"edit_icon\"></span>Edit</a></div></div>'
                }
            },

        ],
        columnDefs: [

            { orderable: false, "width": "3%", "targets": 0 },
            { "width": "5%", "targets": 1 },
            { "width": "37%", "targets": 2 },
            { "width": "8%", "targets": 3 },
            { "width": "8%", "targets": 4 },
            { "width": "9%", "targets": 5 },
            { "width": "8%", "targets": 6 },
            { "width": "10%", "targets": 7 },
            { "width": "8%", "targets": 8 },
            { "className": 'dt-body-center', "width": "5%", "targets": 9 },
            { "width": "5%", "targets": 10 }

        ],
        "fnRowCallback": function(nRow, aData, iDisplayIndex) {
            $("td:first", nRow).html(iDisplayIndex + 1);
            return nRow;
        },

        paging: true,
        scrollY: '75.5vh',
        searching: true,
        pagingType: "full",
        pageLength: 10,
        sDom: '<"dom_wrapper"flipt>',
        language: {
            info: "_START_ - _END_ of _TOTAL_",
            infoEmpty: "No result found",
            infoFiltered: "",
            paginate: {
                first: '<span class="first_page_icon"></span>',
                previous: '<span class="prev_page_icon"></span>',
                next: '<span class="next_page_icon"></span>',
                last: '<span class="last_page_icon"></span>',
            },
            search: "",
            searchPlaceholder: "Search"
        }

    });
    $('#flexi_layout tbody').on('click', '.edit_link', function() {
        let short_depo_name = ""
        let short_trip_name = ""
        let data_row = tablechartlayout.row($(this).parents('tr')).data();

        if (data_row.PolicyType == "Datewise") {
            $("#datewise").trigger("click");
        } else {
            $("#normal").trigger("click");
        }

        $("#from_date").val(data_row.FromDate);
        $("#to_date").val(data_row.ToDate);


        if (data_row.DepotName.length > 37) {
            short_depo_name = data_row.DepotName.substring(0, 37) + " ...";
            $('#input_depot').val(short_depo_name)
        } else {
            $('#input_depot').val(data_row.DepotName);
        }
        $("#input_depot").prop("title", data_row.DepotName)

        if (data_row.TripName.length > 45) {
            short_trip_name = data_row.TripName.substring(0, 45) + " ...";
            $('#input_trip').val(short_trip_name);
        } else {
            $('#input_trip').val(data_row.TripName)
        }
        $("#input_trip").prop("title", data_row.TripName)

        if (data_row.PolicyStatus == "Active") {
            $("#status").val(data_row.PolicyStatus).trigger("chosen:updated");
        } else if (data_row.PolicyStatus == "Inactive") {
            $("#status").val(data_row.PolicyStatus).trigger("chosen:updated");
        }


        $("#values").val(data_row.PercentAmt);
        $("#values").siblings("label").addClass("active-label");
        $("#incdec").val(data_row.IncDec).trigger("chosen:updated");
        $("#percent").val(data_row.AmtType).trigger("chosen:updated");

    });

};