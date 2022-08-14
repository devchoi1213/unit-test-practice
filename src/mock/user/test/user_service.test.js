const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('user_service Mock', () => {
    let userService;
    let login = jest.fn(async () => 'success');
    UserClient.mockImplementation(() => {
        return {
            login,
        };
    });

    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it('should login call once', async function () {
        await userService.login('choi', 1213);
        expect(login).toHaveBeenCalledTimes(1);
    });

    it('should login call twice', async function () {
        await userService.login('choi', 1213);
        await userService.login('choi', 1213);
        expect(login).toHaveBeenCalledTimes(1);
    });
});