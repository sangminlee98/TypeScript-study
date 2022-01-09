class TimeoutError extends Error {}
class OfflineError extends Error {}

type SuccessState = {
    result: 'success';
}
type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
}
type ResultState = SuccessState | NetworkErrorState;
class NetworkClient {
    tryConnect(): ResultState {
        return {
            result: 'fail',
            reason: 'offline'
        }
    }
}

class UserService {
    constructor(private client: NetworkClient) {

    }
    login(): ResultState {
        return this.client.tryConnect();  
    }
}

class App {
    constructor(private userService: UserService){

    }
    run() {
        const state = this.userService.login();
        if(state.result === 'fail') {
            // 예외처리
            console.log(`Cannot login service because ${state.reason}`);
        }
    }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();