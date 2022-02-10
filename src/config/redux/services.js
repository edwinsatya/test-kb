import Axios from "axios";
import { convertToRupiah, getPercentage } from "../../utility";

export async function getDataApi() {
  const {
    data: { data: res },
  } = await Axios.get(
    "https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"
  );
  const result = res?.map((e) => ({
    campaignName: e.campaigner ?? "-",
    imageUrl: e.image ?? "",
    percentage: getPercentage(e.donation_received, e.donation_target),
    donationReceived: convertToRupiah(e.donation_received) ?? 0,
    remainderDay: e.days_remaining ?? 0,
    donationGoal: e.donation_target ?? 0,
  }));
  return result;
}
