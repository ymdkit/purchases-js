import {
  Offerings,
  Package,
  Purchases,
  PurchasesError,
} from "@revenuecat/purchases-js";
import React, { useEffect, useState } from "react";

interface IPackageCardProps {
  pkg: Package;
  onClick?: () => void;
}

const priceLabels: Record<string, string> = {
  P3M: "quarterly",
  P1M: "monthly",
  P1Y: "yearly",
  P2W: "2 months",
  P1D: "daily",
  PT1H: "hourly",
  P1W: "weekly",
};

export const PackageCard: React.FC<IPackageCardProps> = ({ pkg, onClick }) => {
  return (
    <div className={`card ${onClick && "clickableCard"}`} onClick={onClick}>
      {pkg.rcBillingProduct !== null && pkg.rcBillingProduct.currentPrice && (
        <>
          <h3>{pkg.rcBillingProduct.displayName}</h3>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <h2>{`${pkg.rcBillingProduct?.currentPrice?.formattedPrice}`}</h2>

            {pkg.rcBillingProduct.normalPeriodDuration && (
              <h3>
                &nbsp;/
                {priceLabels[pkg.rcBillingProduct.normalPeriodDuration] ||
                  pkg.rcBillingProduct.normalPeriodDuration}
              </h3>
            )}
          </div>
        </>
      )}
    </div>
  );
};

interface IPaywallPageProps {
  purchases: Purchases;
}

const PaywallPage: React.FC<IPaywallPageProps> = ({ purchases }) => {
  const [offerings, setOfferings] = useState<Offerings | null>(null);

  useEffect(() => {
    purchases.getOfferings().then((offerings) => {
      setOfferings(offerings);
    });
  }, [purchases]);

  if (offerings === null) {
    return null;
  }

  const currentOffering = offerings.current;
  if (!currentOffering) {
    console.error("No current offering found");
    return;
  }
  const packages: Package[] = currentOffering?.availablePackages || [];
  if (packages.length == 0) {
    console.error("No packages found in current offering.");
  }

  const onPackageCardClicked = async (pkg: Package) => {
    if (!pkg.rcBillingProduct) {
      return;
    }

    // How do we complete the purchase?
    try {
      const { customerInfo } = await purchases.purchasePackage(pkg);

      console.log(`CustomerInfo after purchase: ${customerInfo}`);

      window.location.href = "/success";
    } catch (e) {
      if (e instanceof PurchasesError) {
        console.log(`Error performing purchase: ${e}`);
        // TODO: We should display an error here.
        window.location.href = "/";
      } else {
        console.error(`Unknown error: ${e}`);
      }
    }
  };

  console.log(packages);
  console.log(offerings);

  return (
    <>
      <div>
        <h2>
          You are not subscribed to <br /> your cat's services🙀
        </h2>

        <p>
          Choose a package to show all the love you have for your little pet.
          <br />
          Or maybe just to avoid its revenge!
        </p>

        <div className="packages">
          {packages.map((pkg) =>
            pkg.rcBillingProduct !== null ? (
              <PackageCard
                pkg={pkg}
                onClick={() => onPackageCardClicked(pkg)}
              />
            ) : null,
          )}
        </div>
      </div>
    </>
  );
};

export default PaywallPage;
