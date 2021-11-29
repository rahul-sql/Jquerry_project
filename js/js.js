
$(document).ready(function () {

    dataArray= [];
    createTable();

// validation
function validateform() {
    let fname = $('.fname').val();
    let lname = $('.lname').val();
    let gmail = $('.gmail').val();
    let phone = $('.phone').val();
    let password = $('.pwd').val();
    // let gender = $('form input[type=radio]:checked').val();
    // let country = $("#country option:selected").val();

    if(fname==""){
        alert("Please Enter First Name !!");
        return false;
    }
    else if(lname==""){
        alert("Please Enter Last Name !!");
        return false;
    }
    else if(gmail==""){
        alert("Please Enter Gmail !!");
        return false;
    }
    else if(phone==""){
        alert("Please Enter Phone !!");
        return false;
    }
    else if(password==""){
        alert("Please Enter Password !!");
        return false;
    }
    else{
        return true;
    }
}

// Onsubmit Button
$('#submit').click(function(){
    let fname = $('.fname').val();
    let lname = $('.lname').val();
    let gmail = $('.gmail').val();
    let phone = $('.phone').val();
    let password = $('.pwd').val();
    // let gender = $('form input[type=radio]').val();
    // let country = $("#country option:selected").val();

    validateform();
    createTable();

    var addRow = "<tr><td><input type='checkbox' name='record'></td><td>" +
                   fname + "</td><td>" + lname + "</td><td>" + gmail + 
                   "</td><td>" + phone + "</td><td>" + password + 
                   "</td></tr>";
    $("table tbody").append(addRow);

    resetform();

    // we created a object & array where data is stored then stored it in local storage.
    // we need to declare array as global variable so that its value could be used to all functions.
    dataObj = {fname:fname, lname:lname, gmail:gmail, phone:phone, password:password};
    // dataObj.fname = {fname};
    // dataObj.lname = {lname};
    // dataObj.gmail = {gmail};
    // dataObj.phone = {phone};
    // dataObj.password = {password};
    dataArray.push(dataObj);

    // convert JS OBject To JSON String stringify is used
    localStorage.formdata = JSON.stringify(dataArray);
});

// converting JSON String to Js object

function createTable() {

    dataArray = JSON.parse(localStorage.formdata);
    $('tbody').empty();
    
    for(let i=0; i<dataArray.length; i++){
       
        let fname = dataArray[i].fname;
        let lname = dataArray[i].lname;
        let gmail = dataArray[i].gmail;
        let phone = dataArray[i].phone;
        let password = dataArray[i].password;
        
        var addRow = "<tr><td><input type='checkbox' name='record'></td><td>" +
        fname + "</td><td>" + lname + "</td><td>" + gmail + 
        "</td><td>" + phone + "</td><td>" + password + 
        "</td></tr>";

        $("tbody").append(addRow);
        resetform();
    }
}

// Ondelte
$(".delete-row").click(function(){
    $("table tbody").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    });
});

// resetform
function resetform() {
    $('.fname').val("");
    $('.lname').val("");
    $('.gmail').val("");
    $('.phone').val("");
    $('.pwd').val("");
 }


});