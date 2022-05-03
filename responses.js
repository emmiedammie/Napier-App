function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    }else if(input == "How can i reset my password"){
        return "Kindly click reset password on the side pane!"; 
    }else if(input == "How can get library books"){
        return "Kindly click library search on the side pane!"; 
    }else if(input == "I need help with my account"){
        return "Kindly click IT support on the side pane!"; 
    }else if(input == "Where can i access my courses"){
        return "Kindly click Moodle on the main page!"; 
    }else if(input == "Where can i update my student records"){
        return "Kindly click E-Student records on the main page!";
    }else if(input == "Where can i check in for a class"){
        return "Kindly click check-in on the main page!";
    }else if(input == "Where can i make a payment"){
        return "Kindly click make a payment on the main page!";
    }else if(input == "What is AppsAnywhere"){
        return "This helps gain access to premium apps licensed by the University";
    }else if(input == "How can i send an E-mail"){
        return "Kindly access your school E-mail account by clicking E-mail on the main page!";
    }else if(input == "Who is my programme leader"){
        return "Kindly find out by clicking programme leader on the main page!";
    }else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "How may i help you today!";
    }
}