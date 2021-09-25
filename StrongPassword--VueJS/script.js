let pass_s = 0; //pass step
const text =
[
    "",
    "Passwort too weak",
    "Passwort okey",
    "Passwort strong",
    "Passwort too strong"
]
const color =
[
    "rgb(197, 2, 2)",
    "rgb(197, 2, 2)",
    "rgb(197, 145, 2)",
    "rgb(74, 197, 2)",
    "rgb(2, 109, 197)"
]


const app = new Vue(
    {
        el: '#app',
        data: {
            warning: "",
            password: "",
            color: "color: " + color[0]
        },
        methods: {
            passCheck: function(
                {
                    pass_s = 0;
                     //includes small letter
                    if(this.password.match(/[a-z]/))
                    {
                        pass_s++;
                    }
                    //includes number
                    if(this.password.match(/[0-9]/))
                    {
                        pass_s++;
                    }

                }
            )
            
            
        }
    }
)