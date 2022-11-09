import amplify from "aws-amplify";
import { configure, password, username } from "./utils.js";

(async () => {
    configure();
    const args = process.argv.slice(2);
    try {
        await amplify.Auth.confirmSignUp(username, args[0]);
        console.log('User verified!')
    } catch (error) {
        console.log('error signing in', error);
    }
})();
