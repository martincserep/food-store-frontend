import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'lsuffix'
})
export class Lsuffix implements PipeTransform {
    transform(input: string, suffix: string) {
        if (input === '') {
            return input;
        }
        return [input, suffix].join(' ');
    }
}