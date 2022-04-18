const Engineer = require('../lib/engineer');

describe('Engineer', () =>{

    it('Should have name, id, email, and github attributes after instantiation.', () => {
        const aidan = new Engineer('aidan', 10, 'aidan@gmail.com', 'aidan1999');

        expect(aidan.name).toBe('aidan');
        expect(aidan.id).toBe(10);
        expect(aidan.email).toBe('aidan@gmail.com');
        expect(aidan.github).toBe('aidan1999')
    });

    it('should get the name, email, id, and role using methods', () => {
        const chrissy = new Engineer('chrissy', 33, 'Frazier@gmail.com', 'aidan1999');

        expect(chrissy.getName()).toBe('chrissy');
        expect(chrissy.getId()).toBe(33);
        expect(chrissy.getEmail()).toBe('Frazier@gmail.com');
        expect(chrissy.getGitHub()).toBe('aidan1999')
        expect(chrissy.getRole()).toBe('Engineer');
    });
});