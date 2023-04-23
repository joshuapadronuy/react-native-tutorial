import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { Alert, Button, Platform, StatusBar, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotificaiton: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const newApp = () => {
  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission required",
          "Push notifications need the appropriate permissions"
        );
        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsynch("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }

    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        const userName = notification.request.content.data.userName;
      }
    );

    const subscription2 = Notifcaitons.addNotifcationResponseReceivedListener(
      (response) => {}
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    Notifications.shceduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  function sendPushNotificationHandler() {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[j90r2j390rj]",
        title: "Test - sent from a device!",
        body: "This is a test!",
      }),
    });
  }

  return (
    <View>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <Button
        title="Send Push Notification"
        onPress={sendPushNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default newApp;
