import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stress',
})

export class StressPipe implements PipeTransform {
    public transform(value: string) {
        return value.split('а\'').join('а́')
                    .split('е\'').join('е́')
                    .split('и\'').join('и́')
                    .split('о\'').join('о́')
                    .split('у\'').join('у́')
                    .split('ы\'').join('ы́')
                    .split('з\'').join('э́')
                    .split('ю\'').join('ю́')
                    .split('я\'').join('я́');
    }
}
