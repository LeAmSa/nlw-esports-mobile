import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
    //variável que verifica se o usuário permite as notificações
    const { granted } = await Notifications.getPermissionsAsync();

    //caso não permita, vamos solicitar as permissões
    if(!granted) {
        await Notifications.requestPermissionsAsync();
    }

    if(granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('NOTIFICATION TOKEN => ', pushToken.data)

        return pushToken.data;
    }

}