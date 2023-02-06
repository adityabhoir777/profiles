async function fetcher() {
    let response = await fetch('https://reqres.in/api/users');
    let { data } = await response.json();
    data.forEach(person => {
        console.log(person);

        let row = document.createElement('div');
        row.className = 'row';

        let img = document.createElement('img');
        img.src = person.avatar;

        let fullName = document.createElement('div');
        fullName.innerText = person.first_name + " " + person.last_name;
        fullName.style.visibility = "hidden";

        img.onmouseover = () => fullName.style.visibility = "visible";
        img.onmouseout = () => fullName.style.visibility = "hidden";

        row.appendChild(img);
        row.appendChild(fullName);
        document.getElementById('container').appendChild(row);
    })
}

fetcher();