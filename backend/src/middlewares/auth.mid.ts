import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";


export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    if(!token) return res.status(201).send("Please Login");
    try {
    
        const decodedUser = verify(token, process.env.SECRET_KEY!);
        req.user = decodedUser;

    } catch (error:any) {
        res.status(HTTP_UNAUTHORIZED).send();
        console.log(error.message);
    }

    return next();
}