var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
	
	var users;
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: 1,
			name: 'Mike',
			room: 'Node Course'
		},{
			id: 2,
			name: 'Sam',
			room: 'React Course'
		},{
			id: 3,
			name: 'Heather',
			room: 'Node Course'
		}]
	});
	it('should add a new user', () => {
		var users = new Users();
		var user = {
			id: '1234',
			name: 'Sammy',
			room: 'chatroom'
		};
		var resUser = users.addUser(user.id, user.name, user.room)
		expect(users.users).toEqual([user])
	});

	it('should return name for node course', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual(['Mike', 'Heather']);
	});
	it('should return name for React course', () => {
		var userList = users.getUserList('React Course');
		expect(userList).toEqual(['Sam']);
	});

	it('should remove a user', () => {
		var userId = 1;
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});
	it('should not remove a user', () => {
		var userId = 99;
		var user = users.removeUser(userId);
		
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});
	it('should find user', () => {
		var userId = 1
		var user = users.getUser(userId);
		expect(user.id).toBe(userId);
	});
	it('should not find user', () => {
		var userId = 1
		var user = users.getUser(2);
		expect(user.id).toNotBe(userId);
	});

})