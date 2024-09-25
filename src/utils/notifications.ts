export const notify = (id: string, notification: Omit<chrome.notifications.NotificationOptions<true>, "iconUrl">) => {
    chrome.notifications.create(
        id,
        {
            ...notification,
            iconUrl: "assets/logo_small.png",
        }
    )
}
