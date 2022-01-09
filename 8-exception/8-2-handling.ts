class TimeoutError extends Error {}
class OfflineError extends Error {}


class NetworkClient {
    tryConnect(): void {
        throw new Error('no network!');
    }
}

class UserService {
    constructor(private client: NetworkClient) {

    }
    login() {
        this.client.tryConnect();  
        // 여기서 try catch로 에러 핸들링 해도 의미가 없음.
    }
}

class App {
    constructor(private userService: UserService){

    }
    run() {
        try {
            this.userService.login();
        } catch (error) {
            // show dialog to user
            // 좀 더 의미있는 에러 처리를 할 수 있음
        }
    }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();