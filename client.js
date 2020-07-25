console.log('js working');

$('document').ready(handleReady);

let totalStaff = [];

//let tableHeader = ['First Name', 'Last Name', 'ID Number', 'Job Title', 'Annual Salary'];
    /*first: 'First Name',
    second: 'Second Name',
    third: 'ID Number',
    fourth: 'Job Title',
    fifth: 'Annual Salary'

}*/


//making table headers
//$('table').append(`<tr><th>${tableHeader}</th></tr>`);
//${tableHeader.first} ${tableHeader.second} ${tableHeader.third} ${tableHeader.fourth} ${tableHeader.fifth}`);
//first} ${second} ${third} ${fourth} ${fifth

function handleReady(){
    $('#submitButton').on('click', submitClicker);
}



function submitClicker(){
        console.log('button clicked');
    
    
        let staffInfo = {
            fName: $('#fName').val(),
            lName: $('#lName').val(),
            idNum: $('#idNum').val(),
            jobTitle: $('#jobTitle').val(),
            annualSalary: $('#annualSalary').val()
        }
    
        if ( staffInfo.fName === '' || staffInfo.lName === '' || staffInfo.idNumb === '' || staffInfo.jobTitle === '' || staffInfo.annualSalary === "") {
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

    function appendItemsToDom(){
        //clear dom of old info
        $('table').empty();
        //actually appending the items
        
        $('table').append(`<tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID Number</th>
            <th>Job Title</th>
            <th>Annual Salary</th>
        </tr>`)
        for (let staff of totalStaff){
            $('table').append(`
            <tr><td>${staff.fName}</td> <td>${staff.lName} </td><td>${staff.idNum} </td><td>${staff.jobTitle} </td><td>${staff.annualSalary}</td></tr>
            `);
        }
    }
