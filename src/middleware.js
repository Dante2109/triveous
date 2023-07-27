import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { NextResponse } from "next/server"
export default function middleware(req){
    auth.onAuthStateChanged(user=>{
        if(user){
                console.log(req.url)
                if(req.url.includes("/login")){
                    console.log("Afds")
                    return NextResponse.redirect(new URL('/news', req.url))
                }
            }

        })
}
export const config = {
    matcher: '/:path*',
  }