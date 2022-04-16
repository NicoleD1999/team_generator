const Engineer = require('../lib/engineer');

describe('Engineer', () =>{

    it('Should have name, id, email, and github attributes after instantiation.', () => {
        const finnley = new Engineer('Finnley', 10, 'Finnley@gmail.com');

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
        expect(finnley.github).toBe('Finnley1999')
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Engineer('Kristina', 33, 'Frazier@gmail.com');

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getGitHub()).toBe('Finnley1999')
        expect(kristina.getRole()).toBe('Engineer');
    });
});