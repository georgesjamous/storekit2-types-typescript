import { StoreKit2NotificationSubtype } from './StoreKit2NotificationSubtype'
import { StoreKit2NotificationType } from './StoreKit2NotificationType'

/**
 * The response body the App Store sends in a version 2 server notification.
 * More on this in the documentation:
 * [responseBodyV2](https://developer.apple.com/documentation/appstoreservernotifications/responsebodyv2)
 */
export interface StoreKit2NotificationPayloadBody {
  /**
   * The type that describes the in-app purchase event for which the App Store
   * sends the version 2 notification.
   */
  notificationType: StoreKit2NotificationType
  /**
   * Additional information that identifies the notification event. The subtype
   * field is present only for specific version 2 notifications.
   */
  subtype: StoreKit2NotificationSubtype
  /**
   * Each notification has a unique identifier. Use this value to identify and
   * ignore duplicate notifications.
   */
  notificationUUID: string
  /**
   *
   *
   * More fields to be added. [Full
   * List](https://developer.apple.com/documentation/appstoreservernotifications/responsebodyv2decodedpayload)
   */
}
