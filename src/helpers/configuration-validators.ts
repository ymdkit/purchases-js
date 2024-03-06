import { ErrorCode, PurchasesError } from "../entities/errors";

export function validateApiKey(apiKey: string) {
  if (!apiKey.startsWith("rcb_")) {
    throw new PurchasesError(
      ErrorCode.InvalidCredentialsError,
      "Invalid API key. Use your RevenueCat Billing API key.",
    );
  }
}

export function validateAppUserId(appUserId: string) {
  const invalidAppUserIds = new Set([
    "no_user",
    "null",
    "none",
    "nil",
    "(null)",
    "NaN",
    "\\x00",
    "",
    "unidentified",
    "undefined",
    "unknown",
  ]);
  if (invalidAppUserIds.has(appUserId) || appUserId.includes("/")) {
    throw new PurchasesError(
      ErrorCode.InvalidAppUserIdError,
      'Provided user id: "' +
        appUserId +
        '" is not valid. See https://www.revenuecat.com/docs/customers/user-ids#tips-for-setting-app-user-ids for more information.',
    );
  }
}
