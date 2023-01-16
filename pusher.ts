import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: '1533841',
    key: '9a2545ac0886a3b9fcea',
    secret: 'c25caf0e23e56c5a8497',
    cluster: 'eu',
    useTLS: true
});

export const clientPusher = new ClientPusher('9a2545ac0886a3b9fcea', {
    cluster: 'eu',
    forceTLS: true
});
