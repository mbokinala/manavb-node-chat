const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Manav',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Abinav',
            room: 'React Course'
        }, {
            id: '3',
            name: 'JAKKI CHANN',
            room: 'Node Course'
        }];
    });
    
    describe('addUser()', () => {
        it('should add new user', () => {
            var users = new Users();
            var user = {
                id: 1234567890,
                name: 'Manav',
                room: 'The Office Fans'
            };
            var resUser = users.addUser(user.id, user.name, user.room);

            expect(users.users).toEqual([user]);
        });
    });

    describe('removeUser()', () => {
        it('should remove a user', () => {
            var userId = '1';
            var user = users.removeUser(userId);

            expect(user.id).toBe(userId);
            expect(users.users.length).toBe(2);
        });

        it('should not remove user',() => {
            var userId = '99';
            var user = users.removeUser(userId);

            expect(user).toNotExist();
            expect(users.users.length).toBe(3);
        });
    });

    describe('getUser()', () => {
        it('should find user', () => {
            var userId = '2';
            var user = users.getUser(userId);

            expect(user.id).toBe(userId);
        });

        it('should not find user', () => {
            var userId = '99';
            var user = users.getUser(userId);
            expect(user).toNotExist();

        });
    });

    describe('getUserList()', () => {
        it('should return names for \'Node Course\' room', () => {
            var userList = users.getUserList('Node Course');

            expect(userList).toEqual(['Manav', 'JAKKI CHANN']);
        });

    
        it('should return names for \'React Course\' room', () => {
            var userList = users.getUserList('React Course');

            expect(userList).toEqual(['Abinav']);
        });
    });
});