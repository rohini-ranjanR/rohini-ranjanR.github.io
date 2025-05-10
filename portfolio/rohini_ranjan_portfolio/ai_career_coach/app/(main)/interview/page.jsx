
import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();
// const InterviewPage = async() => {
//   const assessments = await getAssessments()
  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold gradient-title mb-5">
          Interview Preparation
        </h1>
        <div className="space-y-6">
          <StatsCards assessments={assessments}/>
          <PerformanceChart assessments={assessments}/>
          <QuizList assessments={assessments}/>
        </div>
      </div>
    </div>
  )
}
// export default InterviewPrepPage;