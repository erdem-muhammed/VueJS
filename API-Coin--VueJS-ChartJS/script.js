// copy-paste from Chart.js website
let labels =
[
];

let graphicData =
{
    labels: labels,
    datasets:
    [
        {
            label: 'Bitcoin-Currency',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
        },
    ]
};

const config =
{
    type: 'line',
    data: graphicData,
    options: {}
};


const app = new Vue({
    el:"#app",
    data:
    {
        buttons[],
        result: ""
    },
    created()
    {
        fetch("https://coinranking1.p.rapidapi.com/coins",
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "f464c0068amsh83cba0ecdfd1549p1171b8jsn78f7366baa2b"
            }
        })
        .then(response => response.json())
        .then(json => answer(json))
    },
    methods:
    {}
})