<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@revenuecat/purchases-js](./purchases-js.md) &gt; [EntitlementInfo](./purchases-js.entitlementinfo.md)

## EntitlementInfo interface

This object gives you access to all the information about the status of a user's entitlements.

**Signature:**

```typescript
export declare interface EntitlementInfo 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [billingIssueDetectedAt](./purchases-js.entitlementinfo.billingissuedetectedat.md) | <code>readonly</code> | Date \| null | The date a billing issue was detected. Can be <code>null</code> if there is no billing issue or an issue has been resolved. Note: Entitlement may still be active even if there is a billing issue. Check the <code>isActive</code> property. |
|  [expirationDate](./purchases-js.entitlementinfo.expirationdate.md) | <code>readonly</code> | Date \| null | The expiration date for the entitlement, can be <code>null</code> for lifetime access. If the [EntitlementInfo.periodType](./purchases-js.entitlementinfo.periodtype.md) is <code>trial</code>, this is the trial expiration date. |
|  [identifier](./purchases-js.entitlementinfo.identifier.md) | <code>readonly</code> | string | The entitlement identifier configured in the RevenueCat dashboard. |
|  [isActive](./purchases-js.entitlementinfo.isactive.md) | <code>readonly</code> | boolean | True if the user has access to the entitlement. |
|  [isSandbox](./purchases-js.entitlementinfo.issandbox.md) | <code>readonly</code> | boolean | False if this entitlement is unlocked via a production purchase. |
|  [originalPurchaseDate](./purchases-js.entitlementinfo.originalpurchasedate.md) | <code>readonly</code> | Date | The first date this entitlement was purchased. |
|  [periodType](./purchases-js.entitlementinfo.periodtype.md) | <code>readonly</code> | [PeriodType](./purchases-js.periodtype.md) | The last period type this entitlement was in. |
|  [productIdentifier](./purchases-js.entitlementinfo.productidentifier.md) | <code>readonly</code> | string | The product identifier that unlocked this entitlement. |
|  [store](./purchases-js.entitlementinfo.store.md) | <code>readonly</code> | [Store](./purchases-js.store.md) | The store where this entitlement was unlocked from. |
|  [unsubscribeDetectedAt](./purchases-js.entitlementinfo.unsubscribedetectedat.md) | <code>readonly</code> | Date \| null | The date an unsubscribe was detected. Can be <code>null</code>. Note: Entitlement may still be active even if user has unsubscribed. Check the [EntitlementInfo.isActive](./purchases-js.entitlementinfo.isactive.md) property. |
|  [willRenew](./purchases-js.entitlementinfo.willrenew.md) | <code>readonly</code> | boolean | True if the underlying subscription is set to renew at the end of the billing period (expirationDate). Will always be True if entitlement is for lifetime access. |
