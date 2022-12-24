import { OfferType } from './types'

/**
 * A decoded payload containing subscription renewal information.
 * [jwsrenewalinfodecodedpayload](https://developer.apple.com/documentation/appstoreservernotifications/jwsrenewalinfodecodedpayload)
 */
export interface StoreKit2RenewalInfoDecodedPayload {
  /** The product identifier of the product that renews at the next billing
   * period. */
  autoRenewProductId: string
  /**
   * The renewal status for an auto-renewable subscription.
   * - 0: Automatic renewal is off. The customer has turned off automatic renewal
   *    for the subscription, and it won’t renew at the end of the current
   *    subscription period.
   * - 1: Automatic renewal is on. The subscription renews at the end of the
   *    current subscription period.
   */
  autoRenewStatus: 0 | 1
  /**
   * The reason a subscription expired.
   * - 0: No intent (value non existent)
   * - 1: The customer canceled their subscription.
   * - 2: Billing error; for example, the customer’s payment information is no
   *    longer valid.
   * - 3: The customer didn’t consent to an auto-renewable subscription price
   *    increase that requires customer consent, allowing the subscription to
   *    expire.
   * - 4: The product wasn’t available for purchase at the time of renewal.
   * - 5: The subscription expired for some other reason.
   */
  expirationIntent: 0 | 1 | 2 | 3 | 4 | 5
  /** The time when the billing grace period for subscription renewals expires.
   * */
  gracePeriodExpiresDate: number | 0
  /** The Boolean value that indicates whether the App Store is attempting to
   * automatically renew an expired subscription. */
  isInBillingRetryPeriod: boolean
  /** The offer code or the promotional offer identifier. */
  offerIdentifier: string | ''
  /**
   * The type of subscription offer.
   * 0. No offer (value non existent)
   */
  offerType: OfferType | 0
  /** The transaction identifier of the original purchase. */
  originalTransactionId: string
  /**
   * The status that indicates whether the auto-renewable subscription is
   * subject to a price increase.
   * - 0: The customer hasn’t yet responded to an auto-renewable subscription
   *    price increase that requires customer consent.
   * - 1: The customer consented to an auto-renewable subscription price increase
   *    that requires customer consent, or the App Store has notified the
   *    customer of an auto-renewable subscription price increase that doesn’t
   *    require consent.
   */
  priceIncreaseStatus: 0 | 1
  /** The product identifier of the in-app purchase. */
  productId: string
  /**
   * The earliest start date of an auto-renewable subscription in a series of
   * subscription purchases that ignores all lapses of paid service that are 60
   * days or less.
   */
  recentSubscriptionStartDate: number
  /** The UNIX time, in milliseconds, that the App Store signed the JSON Web
   * Signature (JWS) data. */
  signedDate: number
}
