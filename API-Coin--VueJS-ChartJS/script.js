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
        buttons: [],
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
        .then(json => answerTaken(json))
    },
    methods:
    {
        btnClick(index)
        {
            let id = this.buttons[index].id;

            fetch("https://coinranking1.p.rapidapi.com/coin/" + id + "/history/1y", //1y = one year
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": "f464c0068amsh83cba0ecdfd1549p1171b8jsn78f7366baa2b"
                }
            })
            .then(answer => answer.json())
            .then(function(json)
            {
                graphicData.datasets[0].label = app.buttons[index].name + "-Currency";

                for(let i = 0; i < json.data.history.length; i += 30)
                {
                    const date = new Date(json.data.history[i].timestamp)
                    labels.push(date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear());
                    graphicData.datasets[0].data.push(json.data.history[i].price);
                }

                new Chart(
                    document.getElementById("myChart"),
                    config
                )
            })
        }
    }
})

function answerTaken(object)
{
    let list = object.data.coins;

    for(let i = 0; i < 10; i++)
    {
        app.buttons.push({
            name: list[i].name,
            id: list[i].id
        })
    }
}