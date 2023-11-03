import {connect} from 'mongoose';
export const connectDB = (uri:string) => {
try {
    return  connect(uri).then(
        () => console.log("connect successfully"),
        (error) => console.log("NOT CONNECT"+error)
    )
} catch (error) {
    console.log('connect failed'+error)
}
}