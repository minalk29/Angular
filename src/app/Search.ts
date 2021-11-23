import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
   name:'srch'
})
export class SearchSpaces implements PipeTransform{
    transform(value: any[], args: string):any {
        console.log(args)
        if(!value) return null;
        if(!args) return value;
        let search=args.toLowerCase()
        return value.filter(musiclist=>{
            let mname=musiclist.mName.toLowerCase();
            let data=mname.indexOf(search)!==-1;
            console.log(data)
            return data;
        })
    }
    
}