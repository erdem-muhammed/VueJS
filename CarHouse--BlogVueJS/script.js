


const app = new Vue(
    {
        el: "#app",
        data:
        {
            cars: [],
            in_titel: "",
            in_subtitel: "",
            in_fuel: "",
            in_enginePower: "",
            in_kilometer: "",
            in_year: "",
        },
        methods:
        {
            add: function()
            {
                this.cars.push(
                        {  
                            image: "auto.jpg",
                            titel: this.in_titel,
                            subtitel: this.in_subtitel,
                            fuel: this.in_fuel,
                            enginePower: this.in_enginePower,
                            kilometer: this.in_kilometer,
                            year: this.in_year
                    }
                )
            }
        }
    }
)