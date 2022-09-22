
var selectedRow = null;
var btn = document.querySelector(".button")
btn.addEventListener("click", studentdata);


function studentdata(){
  var ax = read_Input_Value();
  if (selectedRow == null){
    create_Tr_Td(ax);
    remove_input_value()
  }
  else{   
    updatefunc(ax); 
    remove_input_value(); 
    selectedRow = null;
  }

}

//reading data 
function read_Input_Value(){  
  var readstudent={} 
  readstudent["student_name"] = document.querySelector(".studentname").value;
  readstudent["student_Email"] = document.querySelector(".Email").value;
  readstudent["student_num"] = document.querySelector(".num").value;
  readstudent["student_Subjects"] = document.querySelector(".Subjects").value;
  return readstudent
}

// inserting data
function create_Tr_Td(x){ 
  var student_Table = document.querySelector(".list");
  var student_tr = student_Table.insertRow(student_Table.length);
  var student_td1 = student_tr.insertCell(0);
  var student_td2 = student_tr.insertCell(1);
  var student_td3 = student_tr.insertCell(2);
  var student_td4 = student_tr.insertCell(3);
  var student_td5 = student_tr.insertCell(4);
  var student_td6 = student_tr.insertCell(5);
  var totalRowCount = document.querySelector(".list tr").length;

  student_td1.innerHTML = student_Table.rows.length-1;// starting from 2 , so -1 is written
  // .rows.length = return no of row 

  student_td2.innerHTML = x.student_name;   
  student_td3.innerHTML = x.student_Email;
  student_td4.innerHTML = x.student_num;
  student_td5.innerHTML = x.student_Subjects;
  // 6th is for edit
  student_td6.innerHTML = '<a class="edit" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a>';
}// this returns data of that particular element

function remove_input_value(){
  document.querySelector(".studentname").value= " ";
  document.querySelector(".Email").value= " ";
  document.querySelector(".num").value= " ";
  document.querySelector(".Subjects").value= " ";  
}

//edit function
function onEdit(y){ 
  console.log(y);


    selectedRow = y.parentElement.parentElement;//
    //select td value of selected row
    document.querySelector(".studentname").value = selectedRow.cells[1].innerHTML;
    document.querySelector(".Email").value = selectedRow.cells[2].innerHTML;
     document.querySelector(".num").value = selectedRow.cells[3].innerHTML;
    document.querySelector(".Subjects").value = selectedRow.cells[4].innerHTML;
}

function updatefunc(readstudent){
  selectedRow.cells[1].innerHTML = readstudent.student_name;
  selectedRow.cells[2].innerHTML = readstudent.student_Email;
  selectedRow.cells[3].innerHTML = readstudent.student_num;
  selectedRow.cells[4].innerHTML = readstudent.student_Subjects;
  
}


function onDelete() {
    if (confirm('Wanna delete this...!! Think Again ?')) {
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    }
}
