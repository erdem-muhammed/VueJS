const users =
[
    {
        id: 0,
        name: "Max",
        surname: "Mustermann",
		age: 25
    },
    {
        id: 1,
        name: "Lucas",
        surname: "Müller",
		age: 38
    },
    {
        id: 2,
        name: "Laura",
        surname: "Musterfrau",
		age: 30
    },
    {
        id: 3,
        name: "Emma",
        surname: "Jäger",
		age: 26
    },
    {
        id: 4,
        name: "Anton",
        surname: "Schneider",
		age: 40
    },
    {
        id: 5,
        name: "Martin",
        surname: "Schmidt",
		age: 38
    },
    {
        id: 6,
        name: "Jena",
        surname: "Fischer",
		age: 21
    },
    {
        id: 7,
        name: "Alex",
        surname: "Weber",
		age: 34
    },
    {
        id: 8,
        name: "Karl",
        surname: "Meyer",
		age: 51
    },
    {
        id: 9,
        name: "Marcus",
        surname: "Wagner",
		age: 29
    },
    {
        id: 10,
        name: "Helen",
        surname: "Becker",
		age: 22
    },
    {
        id: 11,
        name: "Lina",
        surname: "Schulz",
		age: 19
    },
    {
        id: 12,
        name: "Peter",
        surname: "Hoffmann",
		age: 42
    },
]

const user_name = "admin";
const user_pass = "admin123456";

const app = new Vue(
    {
        el: "#app",
        data:
        {
            step: 1,
            headline: "Login",
            name_input: "",
            pass_input: "",
            user_notify: "",
            pass_notify: "",
            warning: "",
            userlist: users
        },
        methods: 
        {
            login: function()
            {
                username = this.name_input;
                pass = this.pass_input;
                if(username == "")
                {
                    app.user_notify = "Please enter username!";
                    return;
                }
                if(pass == "")
                {
                    app.pass_notify = "Please enter password!";
                    return;
                }
                if(username == user_name && pass == user_pass)
                {
                    app.headline = "Dashboard";
                    app.step++;
                }
                else
                {
                    app.warning = "Username or password is incorrect!";
                }
               
            }
        }
    }
)