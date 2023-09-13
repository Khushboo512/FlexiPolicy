let arrs = new Array();
let deselected_date_arrs = new Array();
let save_dates = new Array();

function renderCalender(from, fromDate, toDate) {
    let days = ["All", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let row_numbers = ["zero", "one", "two", "three", "four", "five"]
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currDate = new Date();
    currDate.setHours(0);
    currDate.setMinutes(0);
    currDate.setSeconds(0);
    let currYear = fromDate.getFullYear();
    let currMonth = fromDate.getMonth();
    let firstdate = new Date(currYear, currMonth, 1);
    let lastdate = new Date(currYear, currMonth + 1, 0);
    let dayOfFristDate = firstdate.getDay();
    let strdate = new Date(firstdate);

    let startDate = new Date(firstdate);
    startDate.setDate(startDate.getDate() - dayOfFristDate);

    $("#set_month_year").text(monthNames[currMonth] + " " + currYear);
    $(".cal").html("")

    for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
            if (row == 0) {
                $(".cal").append(`<div class="box">${days[col]}</div>`);
            } else if (row == 1) {
                if (col > 0) {
                    $(".cal").append(`<div class="box"><input type="checkbox" id="hwchk" name="day_chk" value="${days[col]}"/></div>`);
                } else {
                    $(".cal").append(`<div class="box"><input type="checkbox" id="hwchk" name="all_chk"/></div>`);
                }
            } else if (col == 0) {
                $(".cal").append(`<div class="box" ><input type="checkbox" id="hwchk" name="row_chk" value="${row_numbers[row-2]}"/></div>`);
            } else {
                if (startDate < firstdate || startDate > lastdate) {
                    $(".cal").append(`<div class="box"></div>`);
                } else if (toDate > from) {
                    strdate.setDate(strdate.getDate() + 1)
                    let dates = strdate.toISOString().substring(0, 10)
                    if (startDate >= from && startDate <= toDate) {
                        if (deselected_date_arrs.indexOf(dates) == -1) {
                            arrs.push(`${dates}`)
                            arrs = removeArrDuplicates(arrs);
                        }
                    }
                    let dateSelected = arrs.indexOf(dates) > -1 ? "select" : "";

                    $(".cal").append(`<div class="box ${(startDate < from ||  startDate > toDate) ? 'inactive':'active'} ${dateSelected} ${days[col]} ${row_numbers[row-2]}"><input type="hidden" value="${dates}"/>${startDate.getDate()}</div>`);
                } else {
                    strdate.setDate(strdate.getDate() + 1)
                    let dates = strdate.toISOString().substring(0, 10)
                    let dateSelected = arrs.indexOf(dates) > -1 ? "select" : "";
                    $(".cal").append(`<div class="box ${(startDate < from) ? 'inactive':'active'} ${dateSelected} ${days[col]} ${row_numbers[row-2]}"><input type="hidden" value="${dates}"/>${startDate.getDate()}</div>`);
                }

                startDate.setDate(startDate.getDate() + 1)
            }
        }
        if (startDate >= lastdate) {
            break;
        }
    }

    function removeArrDuplicates(array) {
        const uniqueArr = [];

        for (let i = 0; i < array.length; i++) {
            if (uniqueArr.indexOf(array[i]) === -1) {
                uniqueArr.push(array[i]);
            }
        }
        return uniqueArr;
    }

    $(".box.active").click(function() {
        if ($(this).hasClass("select")) {
            $(this).removeClass("select");
            $(this).addClass("deselect");
            $.each($(".cal").find(".deselect"), function(index, value) {
                let deselectedDate = $(value).find("input[type=hidden]").val();
                arrs = $.grep(arrs, function(n) {
                    return n != (`${deselectedDate}`);
                })
                if (from != toDate) {
                    deselected_date_arrs.push(`${deselectedDate}`)
                    deselected_date_arrs = removeArrDuplicates(deselected_date_arrs);
                }

            })
        } else {
            $(this).removeClass("deselect");
            $(this).addClass("select");
            $.each($(".cal").find(".select"), function(index, value) {
                let selectedDate = $(value).find("input[type=hidden]").val();
                arrs.push(`${selectedDate}`)
                arrs = removeArrDuplicates(arrs);
                if (from != toDate) {
                    deselected_date_arrs = $.grep(deselected_date_arrs, function(n) {
                        return n != (`${selectedDate}`);
                    })
                }
            })

        }

    });

    $("input[name=day_chk]").click(function() {
        let val = $(this).val();
        if ($(this).prop("checked")) {
            $(".box.active." + val).removeClass("deselect");
            $(".box.active." + val).addClass("select");
            $.each($(".cal").find(".select"), function(index, value) {
                let selectedDate = $(value).find("input[type=hidden]").val();
                arrs.push(`${selectedDate}`)
                arrs = removeArrDuplicates(arrs);
                if (from != toDate) {
                    deselected_date_arrs = $.grep(deselected_date_arrs, function(n) {
                        return n != (`${selectedDate}`);
                    })
                }
            })

        } else {
            $(".box.active." + val).removeClass("select");
            $(".box.active." + val).addClass("deselect");
            $.each($(".cal").find(".deselect"), function(index, value) {
                let deselectedDate = $(value).find("input[type=hidden]").val();
                arrs = $.grep(arrs, function(n) {
                    return n != (`${deselectedDate}`);
                })
                if (from != toDate) {
                    deselected_date_arrs.push(`${deselectedDate}`)
                    deselected_date_arrs = removeArrDuplicates(deselected_date_arrs);
                }

            })
        }
    });

    $("input[name=row_chk]").click(function() {
        let val = $(this).val();
        if ($(this).prop("checked")) {
            $(".box.active." + val).removeClass("deselect");
            $(".box.active." + val).addClass("select");
            $.each($(".cal").find(".select"), function(index, value) {
                let selectedDate = $(value).find("input[type=hidden]").val();
                arrs.push(`${selectedDate}`)
                arrs = removeArrDuplicates(arrs);
                if (from != toDate) {
                    deselected_date_arrs = $.grep(deselected_date_arrs, function(n) {
                        return n != (`${selectedDate}`);
                    })
                }
            })
        } else {
            $(".box.active." + val).removeClass("select");
            $(".box.active." + val).addClass("deselect");
            $.each($(".cal").find(".deselect"), function(index, value) {
                let deselectedDate = $(value).find("input[type=hidden]").val();
                arrs = $.grep(arrs, function(n) {
                    return n != (`${deselectedDate}`);
                })
                if (from != toDate) {
                    deselected_date_arrs.push(`${deselectedDate}`)
                    deselected_date_arrs = removeArrDuplicates(deselected_date_arrs);
                }

            })
        }
    });

    $("input[name=all_chk]").click(function() {
        let val = $(this).val();
        if ($(this).prop("checked")) {
            $(".box.active." + val).removeClass("deselect");
            $(".box.active").addClass("select");
            $("input[name=day_chk]" + val).prop("checked", true);
            $("input[name=row_chk]" + val).prop("checked", true);
            $.each($(".cal").find(".select"), function(index, value) {
                let selectedDate = $(value).find("input[type=hidden]").val();
                arrs.push(`${selectedDate}`)
                arrs = removeArrDuplicates(arrs);
                if (from != toDate) {
                    deselected_date_arrs = $.grep(deselected_date_arrs, function(n) {
                        return n != (`${selectedDate}`);
                    })
                }
            })
        } else {
            $(".box.active").removeClass("select");
            $(".box.active." + val).addClass("deselect");
            $("input[name=day_chk]" + val).prop("checked", false);
            $("input[name=row_chk]" + val).prop("checked", false);
            $.each($(".cal").find(".deselect"), function(index, value) {
                let deselectedDate = $(value).find("input[type=hidden]").val();
                arrs = $.grep(arrs, function(n) {
                    return n != (`${deselectedDate}`);
                })
                if (from != toDate) {
                    deselected_date_arrs.push(`${deselectedDate}`)
                    deselected_date_arrs = removeArrDuplicates(deselected_date_arrs);
                }

            })
        }
    });


    $("#save_changes_btn").click(function() {
        $.each($(".cal").find(".select"), function(index, value) {
            let Sel_to_save = $(value).find("input[type=hidden]").val();
            save_dates.push(`${Sel_to_save}`)
            save_dates = removeArrDuplicates(save_dates);
        })

        $.each($(".cal").find(".deselect"), function(index, value) {
            let desSel_to_save = $(value).find("input[type=hidden]").val();
            save_dates = $.grep(save_dates, function(n) {
                return n != (`${desSel_to_save}`);
            })

        });

        console.log("4", { save_dates });

        $("#date_modal").modal("hide");
    });
    $("#cancel_date_btn").click(function() {
        arrs = []
        deselected_date_arrs = []
    })

}