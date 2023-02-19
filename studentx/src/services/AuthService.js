import { $host } from "../http/api";
import $auth from "../http/auth";

export default class AuthService {
    static async login(username, password) {
        return $auth.post('auth/jwt/create/', {
            username,
            password
        })
    }
    static async registration(username, password) {
        return $host.post('auth/users/', {
            username,
            password
        })
    }
    static async refresh(refresh) {
        return $auth.post('auth/jwt/refresh', { refresh })
    }
}