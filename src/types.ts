/**
 * - Sandbox: Indicates that the notification applies to testing in the
 *   sandbox environment.
 * - Production: Indicates that the notification applies to the production
 *   environment.
 */
export type ServerEnvironment = 'Sandbox' | 'Production'

/**
 * The type of subscription offer.
 * 1. An introductory offer.
 * 2. A promotional offer.
 * 3. An offer with a subscription offer code.
 */
export type OfferType = 1 | 2 | 3
