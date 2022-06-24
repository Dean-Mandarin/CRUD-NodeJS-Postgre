
const fetchAddUserAction = async (data) => {
    const url = 'http://localhost:8008/api/user';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(event);
    fetchAddUserAction(data);
});
//---------------------------------------------GET ALL-----------------------------------------------------------

const fetchShowAllAction = async () => {
    const url = 'http://localhost:8008/api/users';
    try {
        const response = await fetch(url, {
            method: 'GET',
        }).then((res) => res.json());
        // allUsersSection


        for (let i in response) {
            // console.log(i);
            for (let key in response[i]) {
                document.getElementById("showAll").innerHTML += '<div>' + JSON.stringify(key) + ": " + JSON.stringify(response[i][key]) + ", " + '</div>';
                // console.log(key + ": " + response[i][key] + ", ");
            }
            document.getElementById("showAll").innerHTML += '<br>' + '<br>';
        }

        // console.log(response);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}


function showAll() {
    fetchShowAllAction();
}


//---------------------------------------------GET ONE-----------------------------------------------------------

const fetchShowOneAction = async (id) => {
    const url = `http://localhost:8008/api/user/${id}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
        }).then((res) => res.json());

        console.log(response);

        for (let key in response) {
            document.getElementById("showOne").innerHTML += '<div>' + JSON.stringify(key) + ": " + JSON.stringify(response[key]) + ", " + '</div>';
        }


        // console.log(response);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}


function showOne() {
    const id = document.getElementById("idGetOne").value;
    fetchShowOneAction(id);
}

//---------------------------------------------DELETE-------------------------------------------------------------
const fetchDeleteAction = async (id) => {
    const url = `http://localhost:8008/api/user/${id}`;
    try {
         await fetch(url, {
            method: 'DELETE',
        })
        console.log('Успех:');
    } catch (error) {

        console.error('Ошибка:', error);
    }
}

function deleteOne(){
    const idDel = document.getElementById("forDelete").value;
    fetchDeleteAction(idDel);
}


//---------------------------------UPDATE--------------------------------------------------------------------------------
const oldData = async (id) => {
    const url = `http://localhost:8008/api/user/${id}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
        }).then((res) => res.json());

        console.log(response);

        for (let key in response) {
            document.getElementById("showOld").innerHTML += '<div>' + JSON.stringify(key) + ": " + JSON.stringify(response[key]) + ", " + '</div>';
        }


        // console.log(response);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function ShowOldData(){
    const id = document.getElementById("forUpdate").value;
    oldData(id);
}

const fetchUpdateUserAction = async (data, id) => {
    const url = `http://localhost:8008/api/user/${id}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json());
        console.log('Успех:', response);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

document.querySelector("#formFresh").addEventListener("submit", (event) => {
    const id = document.getElementById("forUpdate").value;
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(event);
    fetchUpdateUserAction(data, id);
});