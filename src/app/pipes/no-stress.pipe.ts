import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noStress',
})

export class NoStressPipe implements PipeTransform {
    public transform(value: string) {
        return value.replace('а\'', 'а')
                    .replace('е\'', 'е')
                    .replace('и\'', 'и')
                    .replace('о\'', 'о')
                    .replace('у\'', 'у')
                    .replace('ы\'', 'ы')
                    .replace('з\'', 'з')
                    .replace('ю\'', 'ю')
                    .replace('я\'', 'я');
    }
}
