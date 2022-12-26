import { Utils } from "alchemy-sdk";
import { getBalance } from "libs/alchemy";
import Details from "components/Details";
import Row from "components/Row";

interface AddressProps {
  hash: string;
}

export default async function Address({ hash }: AddressProps) {
  let balance;
  try {
    balance = await getBalance(hash);
  } catch (e) {
    console.error(e);
    return (
      <Details entity="address" title="Address details">
        <p className="text-danger-100 font-bold text-sm">
          Error when fetching address balance. Please refresh the page.
        </p>
      </Details>
    );
  }

  return (
    <Details entity="address" title="Address details">
      <div className="grid grid-cols-[180px_1fr] gap-y-4">
        <Row label="hash">
          <p className="truncate font-normal text-sm">{hash}</p>
        </Row>
        <Row label="balance">
          <p className="truncate font-normal text-sm">
            {`${Utils.formatEther(balance)} Ξ`}
          </p>
        </Row>
      </div>
    </Details>
  );
}
