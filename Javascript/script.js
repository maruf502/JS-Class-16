


/*
    var letter = prompt("Enter a Letter :");

    var L = letter.toLowerCase();

    switch(L){

        case "a":
            document.write("Vawel");
            break;

        case "e":
            document.write("Vawel");
            break;

        case "i":
            document.write("Vawel");
            break;

        case "o":
            document.write("Vawel");
            break;

        case "u":
            document.write("Vawel");
            break;

        default:
            document.write("Consonant");

    }

*/

    var user = prompt("Enter Your Value");

    var LC = user.toLowerCase(); 

    switch (LC){

        case "a":
        case "e":
        case "i":
        case "o":
        case "u":

        document.write("Vawel");
        break;

        default:
            document.write("Consonant");
    }
