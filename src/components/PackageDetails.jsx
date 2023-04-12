import clsx from "clsx";
import { Icon } from "./Icon";

const PackageDetails = ({ name, description }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className={clsx("flex items-center rounded-2xl bg-zinc-900")}>
        <Icon icon="installation" className="h-8 w-8" />
        <div className="flex flex-col">
          <div className="font-semibold text-white">{name}</div>
          <div className="text-slate-200">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
