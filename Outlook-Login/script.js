let eMail = "";
let pass = "";

const correctMail = "erdem@outlook.com";
const correctPass = "developer";

const app = new Vue(
    {
        el: "#app",
        data:
        {
            schritt: 1,
            titel: "Login",
            inputType: "text",
            inputPlaceHolder: "Please enter your email address",
            btnText: "Next",
            input: "",
            clue: "",
        },
        methods:
        {
            next: function(event)
            {
                // E-Mail-Adresse Eingabeschritt
                if(this.schritt == 1)
                {
                    if(this.input == "")
                    {
                        this.clue = "Please enter your email address.";
                        return;
                    }


                    this.titel = "Passwort";
                    this.inputType = "password";
                    this.inputPlaceHolder = "Passwort eingeben";
                    this.btnText = "Anmelden";

                    // Sachen speichern
                    eMail = this.input;

                    // zum Passwort Schritt
                    this.schritt++;
                    this.hinweis = "";
                    this.input = "";
                }
                else if(this.schritt == 2)
                {
                    if(this.input == "")
                    {
                        this.hinweis = "Bitte Passwort eingeben.";
                        return;
                    }

                    pass = this.input;

                    // anmelden

                    if(eMail == richtigeMail && pass == richtigesPass)
                    {
                        alert("SIE HABEN SICH ERFOLGREICH ANGEMELDET!");
                        this.hinweis = "";
                    }
                    else
                    {
                        this.hinweis = "Falsche Daten eingegeben.";
                    }
                }
            }
        }
    }
)