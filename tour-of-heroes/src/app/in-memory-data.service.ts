import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0,  name: 'Zero' },
            { id: 11, name: 'QP' },
            { id: 12, name: 'TB' },
            { id: 13, name: 'NS' },
            { id: 14, name: 'AM' },
            { id: 15, name: 'WR' },
            { id: 16, name: 'BS' },
            { id: 17, name: 'OD' },
            { id: 18, name: 'CM' },
            { id: 19, name: 'WD' },
            { id: 20, name: 'CK' }
        ];
        return {heroes};
    }
}