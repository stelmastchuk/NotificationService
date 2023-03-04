import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação'),
      category: 'social',
      recipientId: 'example-recipient_id',
    });

    expect(notification).toBeTruthy();
  });
});
