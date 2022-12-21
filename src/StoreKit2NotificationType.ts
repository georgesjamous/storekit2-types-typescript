/**
 * StoreKit V2 Notification types as described in [Developer
 * Documentation](https://developer.apple.com/documentation/appstoreservernotifications/notificationtype)
 */
export enum StoreKit2NotificationType {
  /**
   * Indicates that the customer initiated a refund request for a consumable
   * in-app purchase, and the App Store is requesting that you provide
   * consumption data. For more information, see [Send Consumption
   * Information](https://developer.apple.com/documentation/appstoreserverapi/send_consumption_information).
   */
  CONSUMPTION_REQUEST = 'CONSUMPTION_REQUEST',
  /**
   * A notification type that along with its subtype indicates that the user
   * made a change to their subscription plan. If the subtype is UPGRADE, the
   * user upgraded their subscription. The upgrade goes into effect immediately,
   * starting a new billing period, and the user receives a prorated refund for
   * the unused portion of the previous period. If the subtype is DOWNGRADE, the
   * user downgraded or cross-graded their subscription. Downgrades take effect
   * at the next renewal. The currently active plan isn’t affected. If the
   * subtype is empty, the user changed their renewal preference back to the
   * current subscription, effectively canceling a downgrade.
   */
  DID_CHANGE_RENEWAL_PREF = 'DID_CHANGE_RENEWAL_PREF',
  /**
   * A notification type that along with its subtype indicates that the user
   * made a change to the subscription renewal status. If the subtype is
   * AUTO_RENEW_ENABLED, the user re-enabled subscription auto-renewal. If the
   * subtype is AUTO_RENEW_DISABLED, the user disabled subscription
   * auto-renewal, or the App Store disabled subscription auto-renewal after the
   * user requested a refund.
   */
  DID_CHANGE_RENEWAL_STATUS = 'DID_CHANGE_RENEWAL_STATUS',
  /**
   * A notification type that along with its subtype indicates that the
   * subscription failed to renew due to a billing issue. The subscription
   * enters the billing retry period. If the subtype is GRACE_PERIOD, continue
   * to provide service through the grace period. If the subtype is empty, the
   * subscription isn’t in a grace period and you can stop providing the
   * subscription service. Inform the user that there may be an issue with their
   * billing information. The App Store continues to retry billing for 60 days,
   * or until the user resolves their billing issue or cancels their
   * subscription, whichever comes first. For more information, see [Reducing
   * Involuntary Subscriber
   * Churn](https://developer.apple.com/documentation/storekit/in-app_purchase/original_api_for_in-app_purchase/subscriptions_and_offers/reducing_involuntary_subscriber_churn).
   */
  DID_FAIL_TO_RENEW = 'DID_FAIL_TO_RENEW',
  /**
   * A notification type that along with its subtype indicates that the
   * subscription successfully renewed. If the subtype is BILLING_RECOVERY, the
   * expired subscription that previously failed to renew now successfully
   * renewed. If the substate is empty, the active subscription has successfully
   * auto-renewed for a new transaction period. Provide the customer with access
   * to the subscription’s content or service.
   */
  DID_RENEW = 'DID_RENEW',
  /**
   * A notification type that along with its subtype indicates that a
   * subscription expired. If the subtype is VOLUNTARY, the subscription expired
   * after the user disabled subscription renewal. If the subtype is
   * BILLING_RETRY, the subscription expired because the billing retry period
   * ended without a successful billing transaction. If the subtype is
   * PRICE_INCREASE, the subscription expired because the user didn’t consent to
   * a price increase that requires user consent. If the the subtype is
   * PRODUCT_NOT_FOR_SALE, the subscription expired because the product wasn’t
   * available for purchase at the time the subscription attempted to renew. A
   * notification without a subtype indicates that the subscription expired for
   * some other reason.
   */
  EXPIRED = 'EXPIRED',
  /**
   * Indicates that the billing grace period has ended without renewing the
   * subscription, so you can turn off access to service or content. Inform the
   * user that there may be an issue with their billing information. The App
   * Store continues to retry billing for 60 days, or until the user resolves
   * their billing issue or cancels their subscription, whichever comes first.
   * For more information, see Reducing Involuntary Subscriber Churn.
   */
  GRACE_PERIOD_EXPIRED = 'GRACE_PERIOD_EXPIRED',
  /**
   * A notification type that along with its subtype indicates that the user
   * redeemed a promotional offer or offer code. If the subtype is INITIAL_BUY,
   * the user redeemed the offer for a first-time purchase. If the subtype is
   * RESUBSCRIBE, the user redeemed an offer to resubscribe to an inactive
   * subscription. If the subtype is UPGRADE, the user redeemed an offer to
   * upgrade their active subscription that goes into effect immediately. If the
   * subtype is DOWNGRADE, the user redeemed an offer to downgrade their active
   * subscription that goes into effect at the next renewal date. If the user
   * redeemed an offer for their active subscription, you receive an
   * OFFER_REDEEMED notification type without a subtype. For more information
   * about promotional offers, see Implementing Promotional Offers in Your App.
   * For more information about offer codes, see Implementing Offer Codes in
   * Your App.
   */
  OFFER_REDEEMED = 'OFFER_REDEEMED',
  /**
   * A notification type that along with its subtype indicates that the system
   * has informed the user of an auto-renewable subscription price increase. If
   * the price increase requires user consent, the subtype is PENDING if the
   * user hasn’t yet responded to the price increase, or ACCEPTED if the user
   * has consented to the price increase. If the price increase doesn’t require
   * user consent, the subtype is ACCEPTED. For more information about how the
   * system calls your app before it displays the price consent sheet for
   * subscription price increases that require customer consent, see
   * [paymentQueueShouldShowPriceConsent(_:)](https://developer.apple.com/documentation/storekit/skpaymentqueuedelegate/3521328-paymentqueueshouldshowpriceconse).
   * For more information about managing subscription prices, see Managing Price
   * Increases for Auto-Renewable Subscriptions and Managing Prices.
   */
  PRICE_INCREASE = 'PRICE_INCREASE',
  /**
   * Indicates that the App Store successfully refunded a transaction for a
   * consumable in-app purchase, a non-consumable in-app purchase, an
   * auto-renewable subscription, or a non-renewing subscription. The
   * revocationDate contains the timestamp of the refunded transaction. The
   * originalTransactionId and productId identify the original transaction and
   * product. The revocationReason contains the reason. To request a list of all
   * refunded transactions for a user, see Get Refund History in the App Store
   * Server API.
   */
  REFUND = 'REFUND',
  /**
   * Indicates that the App Store declined a refund request initiated by the app
   * developer.
   */
  REFUND_DECLINED = 'REFUND_DECLINED',
  /**
   * Indicates that the App Store extended the subscription renewal date that
   * the developer requested.
   */
  RENEWAL_EXTENDED = 'RENEWAL_EXTENDED',
  /**
   * Indicates that an in-app purchase the user was entitled to through Family
   * Sharing is no longer available through sharing. The App Store sends this
   * notification when a purchaser disabled Family Sharing for a product, the
   * purchaser (or family member) left the family group, or the purchaser asked
   * for and received a refund. Your app also receives a
   * [paymentQueue(_:didRevokeEntitlementsForProductIdentifiers:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/3564804-paymentqueue)
   * call. Family Sharing applies to non-consumable in-app purchases and
   * auto-renewable subscriptions. For more information about Family Sharing,
   * see Supporting Family Sharing in Your App.
   */
  REVOKE = 'REVOKE',
  /**
   * A notification type that along with its subtype indicates that the user
   * subscribed to a product. If the subtype is INITIAL_BUY, the user either
   * purchased or received access through Family Sharing to the subscription for
   * the first time. If the subtype is RESUBSCRIBE, the user resubscribed or
   * received access through Family Sharing to the same subscription or to
   * another subscription within the same subscription group.
   */
  SUBSCRIBED = 'SUBSCRIBED',
  /**
   * A notification type that the App Store server sends when you request it by
   * calling the Request a Test Notification endpoint. Call that endpoint to
   * test if your server is receiving notifications. You receive this
   * notification only at your request. For more troubleshooting information,
   * see the Get Test Notification Status endpoint.
   */
  TEST = 'TEST',
}
