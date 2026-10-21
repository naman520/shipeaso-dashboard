import { NextRequest } from "next/server";
import { getOrdersForPeriod } from "@/lib/order-period-route";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  return getOrdersForPeriod(request, "yesterday");
}
