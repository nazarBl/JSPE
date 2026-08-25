let userRole1 = "Employee";

let userAccess;

switch(userRole1) {
    case "Employee":
        userAccess = 'Access to "Dietary Services" granted';
        break;
    case "Enrolled Member":
        userAccess = 'Access to "Dietary Services" and one-on-one interaction with a dietician granted';
        break;
    case "Subscriber":
        userAccess = 'Partial access to facilitate "Dietary Services" granted';
        break;
    case "Non-Subscriber":
        userAccess = "You need enroll or at least subscribe first to avail this facility";
        break;
    default:
        userAccess = "User not ahve any role set up"
}

console.log("Hello, your role is " + userRole1 + " and your level of access: " + userAccess)