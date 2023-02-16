import $auth from "../http/auth";

export default class AuthService {
    static async login(username, password) {
        return $auth.post('jwt/create', username, password)
    }
    static async registration(username, password) {
        return $auth.post('auth/users/', {
            username,
            password
        })
    }
}