export enum StoreKit2NotificationSubtype {
  /**
   * Applies to the SUBSCRIBED notificationType. A notification with this
   * subtype indicates that the user purchased the subscription for the first
   * time or that the user received access to the subscription through Family
   * Sharing for the first time.
   */
  INITIAL_BUY = 'INITIAL_BUY',
  /**
   * Applies to the SUBSCRIBED notificationType. A notification with this
   * subtype indicates that the user resubscribed or received access through
   * Family Sharing to the same subscription or to another subscription within
   * the same subscription group.
   */
  RESUBSCRIBE = 'RESUBSCRIBE',
  /**
   * Applies to the DID_CHANGE_RENEWAL_PREF notificationType. A notification
   * with this subtype indicates that the user downgraded their subscription.
   * Downgrades take effect at the next renewal.
   */
  DOWNGRADE = 'DOWNGRADE',
  /**
   * Applies to the DID_CHANGE_RENEWAL_PREF notificationType. A notification
   * with this subtype indicates that the user upgraded their subscription.
   * Upgrades take effect immediately.
   */
  UPGRADE = 'UPGRADE',
  /**
   * Applies to the DID_CHANGE_RENEWAL_STATUS notificationType. A notification
   * with this subtype indicates that the user enabled subscription
   * auto-renewal.
   */
  AUTO_RENEW_ENABLED = 'AUTO_RENEW_ENABLED',
  /**
   * Applies to the DID_CHANGE_RENEWAL_STATUS notificationType. A notification
   * with this subtype indicates that the user disabled subscription
   * auto-renewal, or the App Store disabled subscription auto-renewal after the
   * user requested a refund.
   */
  AUTO_RENEW_DISABLED = 'AUTO_RENEW_DISABLED',
  /**
   * Applies to the EXPIRED notificationType. A notification with this subtype
   * indicates that the subscription expired after the user disabled
   * subscription auto-renewal.
   */
  VOLUNTARY = 'VOLUNTARY',
  /**
   * Applies to the EXPIRED notificationType. A notification with this subtype
   * indicates that the subscription expired because the subscription failed to
   * renew before the billing retry period ended.
   */
  BILLING_RETRY = 'BILLING_RETRY',
  /**
   * Applies to the EXPIRED notificationType. A notification with this subtype
   * indicates that the subscription expired because the user didn’t consent to
   * a price increase.
   */
  PRICE_INCREASE = 'PRICE_INCREASE',
  /**
   * Applies to the EXPIRED notificationType. A notification with this subtype
   * indicates that the subscription expired because the product wasn't
   * available for purchase at the time the subscription attempted to renew.
   */
  PRODUCT_NOT_FOR_SALE = 'PRODUCT_NOT_FOR_SALE',
  /**
   * Applies to the DID_FAIL_TO_RENEW notificationType. A notification with this
   * subtype indicates that the subscription failed to renew due to a billing
   * issue; continue to provide access to the subscription during the grace
   * period.
   */
  GRACE_PERIOD = 'GRACE_PERIOD',
  /**
   * Applies to the DID_RENEW notificationType. A notification with this subtype
   * indicates that the expired subscription which previously failed to renew
   * now successfully renewed.
   */
  BILLING_RECOVERY = 'BILLING_RECOVERY',
  /**
   * Applies to the PRICE_INCREASE notificationType. A notification with this
   * subtype indicates that the system informed the user of the subscription
   * price increase, but the user hasn’t yet accepted it.
   */
  PENDING = 'PENDING',
  /**
   * Applies to the PRICE_INCREASE notificationType. A notification with this
   * subtype indicates that the user accepted the subscription price increase.
   */
  ACCEPTED = 'ACCEPTED',
}
