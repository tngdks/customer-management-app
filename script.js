let customers = JSON.parse(localStorage.getItem("customers")) || [];
displayCustomers();

function addCustomer (){
    console.log("Add clicked");
    let input = document.getElementById("nameInput");
    let name = input.value;
    

    if(name === ""){
        alert("Enter a name");
        return;
    }

    customers.push(name);

    localStorage.setItem("customers", JSON.stringify(customers));

    displayCustomers();

    input.value = "";
}

function displayCustomers(){
    let list = document.getElementById("customerList");

    list.innerHTML = "";

    for (let i = 0; i < customers.length; i++){
        let li = document.createElement("li");
        li.textContent = customers[i];

        if(customers.length === 0) {
            list.innerHTML = "<p class = 'empty'>No customer Added</p>";
            return;
        }

        //create delete button
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        
        //when clicked, delete this item
        delBtn.onclick = function(){
            deleteCustomer(i);
        };

        //create edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function(){
            editCustomer(i);
        }

        li.appendChild(editBtn)
        li.appendChild(delBtn);
        list.appendChild(li);
    }
}

function deleteCustomer(index){
    customers.splice(index, 1);
    localStorage.setItem("customers", JSON.stringify(customers));
    displayCustomers();
}

function editCustomer(index){
    let newName = prompt("Enter new name:");

    if (newName !== null && newName !== ""){
        customers[index] = newName;

        localStorage.setItem("customers", JSON.stringify(customers));

        displayCustomers();
    }
}