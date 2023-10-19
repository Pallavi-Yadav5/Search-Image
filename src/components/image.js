import React from "react";
import { format } from "date-fns"
export default function Image(props){
    return(
        <>
           <article className="shadow-md bg-white rounded-3xl p-5">
           <img src={props.urls.thumb} alt={props.user.name} className="h-52 w-full object-cover rounded-3xl md:h-80 lg:h-60" />
           <article className="flex flex-wrap items-center justify-between">
           <div className="pt-5 flex items-center justify-start">
            <img src={props.user.profile_image.large} alt={props.user.name} className="w-20 rounded-full shadow"/>
            <ul className="ml-3">
                <li className="font-bold font-serif text-slate-800 mb-1 lg:text-xs">{props.user.name}</li>
                <li className="text-slate-600 text-sm">{format(new Date(props.created_at), "dd MMMM yyyy")}</li>
            </ul>
           </div>
           <div>
            <ul className="text-slate-600 text-sm text-right mt-6">
               <li><a href={`https://instagram.com/${props.user.social.instagram_username}`} className="underline">Instagram</a></li>
               <li>{props.likes} likes </li>
            </ul>
           </div>
           </article>
           </article>
        </>
    )
}