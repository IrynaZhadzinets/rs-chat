class MessageNotification {
  constructor() {
    this.icon = './src/images/avatar.png';
    this.status = 'default';
    this.requestPermission();
  }

  requestPermission() {
    if (!('Notification' in window)) return;

    Notification.requestPermission((status) => {
      this.status = status;
    });
  }

  demonstration({ id, from, message }) {
    if (this.status === 'granted' && document.hidden) {
      const config = {
        tag: id,
        body: message,
        dir: 'auto',
        icon: this.icon,
      };

      const notification = new Notification(from, config);
      setTimeout(notification.close.bind(notification), 5000);
    }
  }
}

export default MessageNotification;
