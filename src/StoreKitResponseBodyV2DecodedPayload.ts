import { StoreKit2NotificationSubtype } from './StoreKit2NotificationSubtype'
import { StoreKit2NotificationType } from './StoreKit2NotificationType'
import { StoreKit2RenewalInfoDecodedPayload } from './StoreKit2RenewalInfoDecodedPayload'
import { StoreKit2TransactionDecodedPayload } from './StoreKit2TransactionDecodedPayload'
import { ServerEnvironment } from './types'

/**
 * The response body the App Store sends in a version 2 server notification.
 * More on this in the documentation:
 * [responseBodyV2](https://developer.apple.com/documentation/appstoreservernotifications/responsebodyv2)
 */
export interface StoreKitResponseBodyV2DecodedPayload {
  /**
   * The type that describes the in-app purchase event for which the App Store
   * sends the version 2 notification.
   */
  notificationType: StoreKit2NotificationType
  /**
   * Additional information that identifies the notification event. The subtype
   * field is present only for specific version 2 notifications.
   */
  subtype: StoreKit2NotificationSubtype | ''
  /**
   * Each notification has a unique identifier. Use this value to identify and
   * ignore duplicate notifications.
   */
  notificationUUID: string
  /**
   * The UNIX time, in milliseconds, that the App Store signed the JSON Web
   * Signature data.
   */
  signedDate: number
  /**
   * A string that indicates the App Store Server Notification version number.
   * The version string is “2.0”.
   */
  version: string
  /**
   * The object that contains the app metadata and signed renewal and
   * transaction information.
   */
  data: {
    /** The unique identifier of the app that the notification applies to. This
     * property is available for apps that are downloaded from the App Store; it
     * isn’t present in the sandbox environment. */
    appAppleId: string
    /** The bundle identifier of the app     */
    bundleId: string
    /** The version of the build that identifies an iteration of the bundle. */
    bundleVersion: string
    /**
     * The server environment that the notification applies to, either sandbox
     * or production.
     */
    environment: ServerEnvironment
    /**
     * Transaction information signed by the App Store, in JSON Web Signature
     * format.
     */
    signedTransactionInfo: StoreKit2TransactionDecodedPayload
    /** Subscription renewal information signed by the App Store, in JSON Web
     * Signature format. */
    signedRenewalInfo: StoreKit2RenewalInfoDecodedPayload
  }
}
