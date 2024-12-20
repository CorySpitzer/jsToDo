function add_item_clicked() {
    const li = document.createElement('li')
    // li.setAttribute('id', )
    let value = document.getElementById('item').value;
    console.log(value);
    const ul = document.getElementById('ulist');
    li.textContent = value;
    li.id = value;
    delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.addEventListener('click', function() {
        itemToDel = document.getElementById(value);
        ul.removeChild(itemToDel);
    });
    li.appendChild(delBtn);
    ul.appendChild(li);

}