import "next-auth";

declare module "next-auth" {
    interface Session{
        user:{
            id:number;
            token:string;
            username:string;
            name:string;
            rol:string;
        }
    }
}