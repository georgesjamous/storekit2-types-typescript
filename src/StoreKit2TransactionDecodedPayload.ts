import { OfferType, ServerEnvironment } from './types'

/**
 * A decoded payload containing transaction information.
 */
export interface StoreKit2TransactionDecodedPayload {
  /** A UUID that associates the transaction with a user on your own service. If
   *  your app doesn’t provide an appAccountToken, this string is empty. For
   *  more information */
  appAccountToken: string | ''
  /**  The bundle identifier of the app. */
  bundleId: string
  /**
   * The server environment.
   */
  environment: ServerEnvironment
  /** The UNIX time, in milliseconds, the subscription expires or renews. */
  expiresDate: number
  /** A string that describes whether the transaction was purchased by the user,
   *  or is available to them through Family Sharing. */
  inAppOwnershipType: 'PURCHASED' | 'FAMILY_SHARED'
  /** A Boolean value that indicates whether the user upgraded to another
   * subscription. */
  isUpgraded: boolean
  /**  The identifier that contains the promo code or the promotional offer
   * identifier. */
  offerIdentifier: string | ''
  /**  A value that represents the promotional offer type. */
  offerType: OfferType | 0
  /** The UNIX time, in milliseconds, that represents the purchase date of the
   * original transaction identifier. */
  originalPurchaseDate: number
  /** The transaction identifier of the original purchase. */
  originalTransactionId: string
  /** The product identifier of the in-app purchase. */
  productId: string
  /** The UNIX time, in milliseconds, that the App Store charged the user’s
    account for // a purchase, restored product, subscription, or subscription
    renewal after a lapse. */
  purchaseDate: number
  /** The number of consumable products the user purchased. */
  quantity: number
  /** The UNIX time, in milliseconds, that the App Store refunded the
   * transaction or revoked it from Family Sharing. */
  revocationDate: number | 0
  /**
   * The reason that the App Store refunded the transaction or revoked it from
   * Family Sharing.
   * - 0: Apple Support refunded the transaction on behalf of the customer for
   *    other reasons; for example, an accidental purchase.
   * - 1: Apple Support refunded the transaction on behalf of the customer due to
   *    an actual or perceived issue within your app.
   */
  revocationReason: 0 | 1
  /** The identifier of the subscription group the subscription belongs to. */
  subscriptionGroupIdentifier: string
  /** The unique identifier of the transaction. */
  transactionId: string
  /** The type of the in-app purchase. */
  type: 'Auto-Renewable Subscription' | 'Non-Consumable' | 'Consumable' | 'Non-Renewing Subscription'
  /** The unique identifier of subscription purchase events across devices,
   * including subscription renewals. */
  webOrderLineItemId: string
  /** The UNIX time, in milliseconds, that the App Store signed the JSON Web
   * Signature (JWS) data. */
  signedDate: number
}
