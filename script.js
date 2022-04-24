const reservation = [];

// Create Reservation //

function saveReservation() {
    let firstName = document.getElementById("first-name-form").value;
    let lastName = document.getElementById("last-name-form").value;
    let phoneNumber = document.getElementById("phone-number-form").value;
    let numberOfParty = document.getElementById("party-number-form").value;
    let date = document.getElementById("date-form").value;
    let time = document.getElementById("time-form").value;
    let newObject = {firstName, lastName, phoneNumber, numberOfParty, date, time};
    reservation.push(newObject);

    const markup = ` 
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${numberOfParty}</td>
                <td>${phoneNumber}</td>
                <td>${date}</td>
                <td>${time}</td>
                <td class="text-end">
                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#openModal" >Edit</button>
                </td>
                <td class="text-end">
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(this)" value="Delete">Delete</button>
                </td>
            </tr>`
    const tableBody = $("table tbody");
    tableBody.append(markup);
}


// Delete Reservation // 

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);

}

function clearForm() {
    document.getElementById("first-name-form").value = '';
    document.getElementById("last-name-form").value = '';
    document.getElementById("phone-number-form").value = '';
    document.getElementById("party-number-form").value = '';
    document.getElementById("date-form").value = '';
    document.getElementById("time-form").value = '';

}

function saveChanges() {

    let edit1 = document.getElementById("first-name-form").value; 
    console.log(edit1);
    let edit2 = document.getElementById("last-name-form").value;
    let edit3 = document.getElementById("phone-number-form").value; 
    let edit4 = document.getElementById("party-number-form").value;
    let edit5 = document.getElementById("date-form").value; 
    let edit6 = document.getElementById("time-form").value;

    const markup1 = ` 
            <tr>
                <td>${edit1}</td>
                <td>${edit2}</td>
                <td>${edit3}</td>
                <td>${edit4}</td>
                <td>${edit5}</td>
                <td>${edit6}</td>
                <td class="text-end">
                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#openModal"" >Edit</button>
                </td>
                <td class="text-end">
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(this)" value="Delete">Delete</button>
                </td>
            </tr>`
            const tableBody1 = $("table tbody")
            tableBody1.empty().append(markup1);
}










