const Manager = require('../lib/manager');

describe('Manager', () =>{

    it('Should have name, id, email, and office number attributes after instantiation.', () => {
        const finnley = new Engineer('Finnley', 10, 'Finnley@gmail.com');

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
        expect(finnley.OfficeNumber).toBe('123456789')
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Engineer('Kristina', 33, 'Frazier@gmail.com');

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getofficeNumber()).toBe('123456789')
        expect(kristina.getRole()).toBe('Manager');
    });
});