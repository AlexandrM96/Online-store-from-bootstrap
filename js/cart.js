let url = '';

function api() { 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }); 
};
api();
