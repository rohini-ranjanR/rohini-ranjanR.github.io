import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_component/dashboard-view";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

// export default async function Dash(params) {
  
// }

// const IndustryInsightsPage = async () => {
//   const { isOnboarded } = await getUserOnboardingStatus();
//   const insights = await getIndustryInsights();
// }

// if (!isOnboarded) {
//   redirect("/onboarding");
// }


export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();


return ( <div className="container mx-auto">
  <DashboardView insights={insights} />
</div>
);
}
//  return (
//     <div className="container mx-auto">
//       <DashboardView insights={insights} />
//     </div>
//   );
// }