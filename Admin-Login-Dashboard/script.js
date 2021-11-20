const users =
[
    {
        id: 0,
        vorname: "Max",
        nachname: "Mustermann",
		alter: 25
    },
    {
        id: 1,
        vorname: "Lucas",
        nachname: "Müller",
		alter: 38
    },
    {
        id: 2,
        vorname: "Laura",
        nachname: "Musterfrau",
		alter: 30
    },
    {
        id: 3,
        vorname: "Emma",
        nachname: "Jäger",
		alter: 26
    },
    {
        id: 4,
        vorname: "Anton",
        nachname: "Schneider",
		alter: 40
    },
    {
        id: 5,
        vorname: "Martin",
        nachname: "Schmidt",
		alter: 38
    },
    {
        id: 6,
        vorname: "Jena",
        nachname: "Fischer",
		alter: 21
    },
    {
        id: 7,
        vorname: "Alex",
        nachname: "Weber",
		alter: 34
    },
    {
        id: 8,
        vorname: "Karl",
        nachname: "Meyer",
		alter: 51
    },
    {
        id: 9,
        vorname: "Marcus",
        nachname: "Wagner",
		alter: 29
    },
    {
        id: 10,
        vorname: "Helen",
        nachname: "Becker",
		alter: 22
    },
    {
        id: 11,
        vorname: "Lina",
        nachname: "Schulz",
		alter: 19
    },
    {
        id: 12,
        vorname: "Peter",
        nachname: "Hoffmann",
		alter: 42
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
            userlist: users
        },
        method: 
        {
            login()
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
            }
        }
    }
)