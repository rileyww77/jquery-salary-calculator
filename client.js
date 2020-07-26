console.log('js working');

$('document').ready(handleReady);

let totalStaff = [];



function handleReady() {
    $('#submitButton').on('click', submitClicker);
    $('table').on('click', '.deleteButton', deleteClicker);
}



function submitClicker() {
    console.log('button clicked');




    let staffInfo = {
        fName: $('#fName').val(),
        lName: $('#lName').val(),
        idNum: $('#idNum').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }

    if (staffInfo.fName === '' || staffInfo.lName === '' || staffInfo.idNumb === '' || staffInfo.jobTitle === '' || staffInfo.annualSalary === "") {
        alert('please enter all fields')
    } else {
        console.log(staffInfo);

        //add our inventoryItem to our inventory array
        totalStaff.push(staffInfo);

        //add each item in the array to the dom
        appendItemsToDom();

        //clear dom:
        $('#fName').val('');
        $('#lName').val('');
        $('#idNum').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');
    }
}

//remove info from table
function deleteClicker() {

    
    $(this).closest('tr').remove();

    
    for (let i = 0; i < totalStaff.length; i++) {
        
        if ($('table').on('click', '.deleteButton', deleteClicker)) {
            $(this).closest('tr').removeData(totalStaff.splice([i]));
            $(this).closest('tr').empty();
        }
    }
    //$(this).closest('tr').toggle();


}

function appendItemsToDom() {
    //clear dom of old info
    $('table').empty();
    

    //re-appending headers
    $('table').append(`<tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID Number</th>
            <th>Job Title</th>
            <th>Annual Salary</th>
            <th></th>
        </tr>`)
    //actually appending the items
    for (let staff of totalStaff) {
        $('table').append(`
            <tr>
            <td>${staff.fName}</td> 
            <td>${staff.lName} </td>
            <td>${staff.idNum} </td>
            <td>${staff.jobTitle} </td>
            <td>${staff.annualSalary}</td>
            <td><button class ="deleteButton">Delete</button></td>
            </tr>
            `);
    }


    //calculate monthly cost
    let monthlyCost = 0;
    for (let staff of totalStaff) {
        monthlyCost += staff.annualSalary / 12;
        console.log(monthlyCost);
        $('h2').empty();
        $('h2').append(`Monthly Cost:${monthlyCost.toFixed(2)}`);

        if (monthlyCost > 20000) {
            $('footer').addClass('overBudget')
        } else {
            $('footer').removeClass('overBudget');
        }
    }
}