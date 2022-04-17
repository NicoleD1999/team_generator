const Intern = require('../lib/intern');

describe('Intern', () =>{

    it('Should have name, id, email, and school attributes after instantiation.', () => {
        const finnley = new Engineer('Finnley', 10, 'Finnley@gmail.com');

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
        expect(finnley.school).toBe('University of Minnesota')
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Engineer('Kristina', 33, 'Frazier@gmail.com');

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getSchool()).toBe('University of Minnesota')
        expect(kristina.getRole()).toBe('Intern');
    });
});