const Intern = require('../lib/intern');

describe('Intern', () =>{

    it('Should have name, id, email, and school attributes after instantiation.', () => {
        const aidan = new Intern('aidan', 10, 'aidan@gmail.com', 'University of Minnesota');

        expect(aidan.name).toBe('aidan');
        expect(aidan.id).toBe(10);
        expect(aidan.email).toBe('aidan@gmail.com');
        expect(aidan.school).toBe('University of Minnesota')
    });

    it('should get the name, email, id, and role using methods', () => {
        const chrissy = new Intern('chrissy', 33, 'Frazier@gmail.com', 'University of Minnesota');

        expect(chrissy.getName()).toBe('chrissy');
        expect(chrissy.getId()).toBe(33);
        expect(chrissy.getEmail()).toBe('Frazier@gmail.com');
        expect(chrissy.getSchool()).toBe('University of Minnesota')
        expect(chrissy.getRole()).toBe('Intern');
    });
});