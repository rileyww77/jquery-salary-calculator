console.log('js working');

$('document').ready(handleReady);

let totalStaff = [];

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
        $('#target').empty();
        //actually appending the items
        for (let staff of totalStaff){
            $('#target').append(`
            <li>
                ${staff.fName} ${staff.lName} ${staff.idNum} ${staff.jobTitle} ${staff.annualSalary}
            </li>
            `)
        }
    }
