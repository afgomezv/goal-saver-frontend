import { formatCurrency } from "@/src/utils";
import { div } from "framer-motion/client";

type AmountProps = {
  label: string;
  amount: number;
};

const Amount = ({ label, amount }: AmountProps) => {
  return (
    <div className="py-2">
      <p className="text-2xl font-bold text-gray-300">
        {label}: {""}
        <span className="text-[#4dd307]">{formatCurrency(amount)}</span>
      </p>
    </div>
  );
};

export default Amount;
