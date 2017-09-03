import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'abbreviate',
})

export class AbbreviatetPipe implements PipeTransform {
    public transform(value: any) {
        switch (value) {
            case 'nominative': return 'Nom.';
            case 'accusative': return 'Acc.';
            case 'dative': return 'Dat.';
            case 'genitive': return 'Gen.';
            case 'instrumental': return 'Ins.';
            case 'prepositional': return 'Prep.';
            case 'plural': return 'Pl.';
            case 'singular': return 'Sing.';
            case 'feminine': return 'fem.';
            case 'masculine': return 'masc.';
            case 'neuter': return 'neut.';
            case 'animate': return 'anm.';
        }
        return value;
    }
}
