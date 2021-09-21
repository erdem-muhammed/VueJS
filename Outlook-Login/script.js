let eMail = "";
let pass = "";

const correctMail = "erdem@outlook.com";
const correctPass = "developer";

const app = new Vue(
    {
        el: "#app",
        data:
        {
            step: 1,
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
                // E-Mail-Adresse Enter Process
                if(this.step == 1)
                {
                    if(this.input == "")
                    {
                        this.clue = "Please enter your email address.";
                        return;
                    }


                    this.titel = "Password";
                    this.inputType = "password";
                    this.inputPlaceHolder = "Enter your password";
                    this.btnText = "Login";

                    // Save
                    eMail = this.input;

                    // to Password step
                    this.step++;
                    this.clue = "";
                    this.input = "";
                }
                else if(this.step == 2)
                {
                    if(this.input == "")
                    {
                        this.clue = "Please enter your password";
                        return;
                    }

                    pass = this.input;

                    // login

                    if(eMail == correctMail && pass == correctPass)
                    {
                        alert("YOU HAVE SUCCESSFULLY LOGGED IN!");
                        this.clue = "";
                    }
                    else
                    {
                        this.clue = "Wrong password, please enter your password again!";
                    }
                }
            }
        }
    }
)