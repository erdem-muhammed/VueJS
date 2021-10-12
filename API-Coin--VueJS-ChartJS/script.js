const { vuePlugin } = require("highlight.js");











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
        .then(json => antwortGekommen(json))
    },
})