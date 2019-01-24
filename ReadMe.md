⭐️ GET one specific entry:
http://localhost:5000/acts/${_id}


⭐️ CREATE one specific entry:
http://localhost:5000/products/${_id}

    postman: 
        headers:
        "Content-Type": "application/x-wwww-form-urlencoded"

    fetch:

        fetch('http://localhost:5000/products/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Gfys Mcadams',
            price: 99,
        })
        })

    // s/o fetch() question, flags CORS but works.
        fetch('http://localhost:5000/acts/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                name: 'sillyMan',
                rating: 12,
            })
        })



⭐️ GET all entries:
client: fetch('http://localhost:5000/acts/').then(res => res.json())
    .then(json => console.log('all acts: ', json))
    .catch(err => console.log(err));

server: exports.all_acts = (req, res) => {
    Act.find({}, (err, acts) => {
        res.json(acts);
    })
}