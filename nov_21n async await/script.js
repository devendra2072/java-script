// fetch and async await both returns a promise
// promise successful - response object
// promise failed - error


// promise.then((x)=>{x})
// await promise

async function display() {
    let table =`
    <table>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>id</th>
    </tr>
     
    `;
    let url = "http://localhost:3000/student";
    try {
        let responseobj = await fetch(url);
        console.log(responseobj);
        let data = await responseobj.json();
        console.log(data);
        // array of objects function perform map or forEach

        data.map((x) => {
            table += `
            <tr>
            <td>${x.name}</td>
            <td>${x.age}</td>
            <td>${x.id}</td>
            </tr>
            `;
        });
        table += `</table>`;
        document.getElementById("demo").innerHTML = table;

    } catch (error) {
        console.error('Error:', error);
    }
}

display();