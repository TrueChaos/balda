
let al_items = document.querySelectorAll('#alphabet td');
al_items = Array.prototype.slice.call(al_items);
let field_items = document.querySelectorAll('#field td');
field_items= Array.prototype.slice.call(field_items);
console.log(field_items);

al_items.forEach( (item) => {
    item.addEventListener('dragstart', handleDragStart );
} )

field_items.forEach( (item) => {
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
} )


function handleDragStart(e){
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}

function handleDrop(e){
    e.stopPropagation();
    console.log(field_items.indexOf(this));
    if (!al_items.includes(this)) {
        let cur_item = field_items.indexOf(this)

        if(cur_item > 5 && cur_item < 19) {
            if (field_items[cur_item + 1].innerHTML !== "" || field_items[cur_item - 1].innerHTML !== ""
                || field_items[cur_item + 5].innerHTML !== "" || field_items[cur_item - 5].innerHTML !== "") {
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item > 20 && cur_item < 24){
            if (field_items[cur_item + 1].innerHTML !== "" || field_items[cur_item - 1].innerHTML !== ""
                || field_items[cur_item - 5].innerHTML !== "") {
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item < 4 && cur_item > 0){
            if (field_items[cur_item + 1].innerHTML !== "" || field_items[cur_item - 1].innerHTML !== ""
                || field_items[cur_item + 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item === 0) {
            if (field_items[cur_item + 1].innerHTML !== ""
                || field_items[cur_item + 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item === 24) {
            if (field_items[cur_item - 1].innerHTML !== ""
                || field_items[cur_item - 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item === 4) {
            if (field_items[cur_item - 1].innerHTML !== ""
                || field_items[cur_item + 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item === 5){
            if (field_items[cur_item + 1].innerHTML !== ""
                || field_items[cur_item + 5].innerHTML !== ""
                || field_items[cur_item - 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item === 19){
            if (field_items[cur_item - 1].innerHTML !== ""
                || field_items[cur_item + 5].innerHTML !== ""
                || field_items[cur_item - 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
        else if(cur_item === 20){
            if (field_items[cur_item + 1].innerHTML !== ""
                || field_items[cur_item - 5].innerHTML !== ""){
                this.innerHTML = e.dataTransfer.getData('text/html');
                setWord(); }
        }
            //this.removeEventListener('drop', handleDrop);
    }
 return false
}

let word=[];
let status = document.querySelector("#Status");

function setWord(){
    status.innerHTML = 'Соберите слово';
    field_items.forEach( (item) => {
        if(item.innerHTML !== '')
            item.addEventListener('click', createWord );
    } )
}

function createWord(){
    document.getElementsByTagName("button")[0].style.display = 'block';
    word.push(this.innerHTML);
    status.innerHTML = word.join();

    console.log(word);
}


let pl_1 = {
    name: document.querySelectorAll("#players td")[0].innerHTML,
    score: 0
};

let pl_2 = {
    name: document.querySelectorAll("#players td")[1].innerHTML,
    score: 0
};

let current_player = pl_1;
document.querySelector('#cur_player').innerHTML=current_player.name

async function sendWord() {
    let response = await fetch('script.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(word.join(''))
    });
    let result = await response.text();
    let tr_child = document.createElement('tr');
    let td_child = document.createElement('td');
    let players = document.querySelector("#players");
    if(current_player.name == pl_1.name) {
        document.querySelector('#cur_player').innerHTML=current_player.name;
        players.appendChild(tr_child).appendChild(td_child).innerHTML=result;
        current_player.score+=result.length;
        document.querySelector('#score1').innerHTML=current_player.score;
        current_player = pl_2;
        document.querySelector('#cur_player').innerHTML= current_player.name;
    }
    else {
        players.lastChild.appendChild(td_child).innerHTML = result;
        current_player.score+=result.length;
        document.querySelector('#score2').innerHTML=current_player.score;
        current_player = pl_1;
        document.querySelector('#cur_player').innerHTML= current_player.name;
    }
    document.getElementsByTagName("button")[0].style.display = 'none';
    word=[];
    status.innerHTML = 'Выберете букву';
}
