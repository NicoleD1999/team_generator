const Manager = require('../lib/manager');

describe('Manager', () =>{

    it('Should have name, id, email, and office number attributes after instantiation.', () => {
        const aidan = new Manager('aidan', 10, 'aidan@gmail.com', 12);

        expect(aidan.name).toBe('aidan');
        expect(aidan.id).toBe(10);
        expect(aidan.email).toBe('aidan@gmail.com');
        expect(aidan.OfficeNumber).toBe(12)
    });

    it('should get the name, email, id, and role using methods', () => {
        const chrissy = new Manager('chrissy', 33, 'Frazier@gmail.com', 12);

        expect(chrissy.getName()).toBe('chrissy');
        expect(chrissy.getId()).toBe(33);
        expect(chrissy.getEmail()).toBe('Frazier@gmail.com');
        expect(chrissy.officeNumber()).toBe(12)
        expect(chrissy.getRole()).toBe('Manager');
    });
});