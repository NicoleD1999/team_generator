const Employee = require('../lib/Employee');


describe('Employee', () =>{

    it('Should have name, id, and email attributes after instantiation.', () => {
        const aidan = new Employee('aidan', 10, 'aidan@gmail.com');

        expect(aidan.name).toBe('aidan');
        expect(aidan.id).toBe(10);
        expect(aidan.email).toBe('aidan@gmail.com');
    });

    it('should get the name, email, id, and role using methods', () => {
        const chrissy = new Employee('chrissy', 33, 'Frazier@gmail.com');

        expect(chrissy.getName()).toBe('chrissy');
        expect(chrissy.getId()).toBe(33);
        expect(chrissy.getEmail()).toBe('Frazier@gmail.com');
        expect(chrissy.getRole()).toBe('Employee');
    });
});