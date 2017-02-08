export default class AuthMiddleware {
    constructor(socket) {
        if (!socket.session) {
            throw 'no login';
        }
    }
}