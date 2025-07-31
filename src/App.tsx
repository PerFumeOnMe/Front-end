import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RootLayout from "./layout/root-layout.tsx";
import MainPage from "./pages/MainPage.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import SignupPage from './pages/Login/SignupPage.tsx';
import MyPage from './pages/MyPage/MyPage.tsx';
import PBTIMainPage from "./pages/PBTI/PBTIMainPage.tsx";
import ProtectedRoute from "./layout/ProtectedRoute.tsx";
import KakaoSignupPage from "./pages/Login/KakaoSignupPage.tsx";
import PerfumLabPage from "./pages/perfumeLab/PerfumeLabPage.tsx";
import LabLoadingPage from "./pages/perfumeLab/LabLoadingPage.tsx";
import LabResultPage from "./pages/perfumeLab/LabResultPage.tsx";
import ChatbotPage from "./pages/Chatbot/ChatbotPage.tsx";
import ChoosePathPage from "./pages/ChoosePathPage.tsx";
import ImageKeywordPage from "./pages/ImageKeyword/ImageKeywordPage.tsx";
import ImageKeywordLoading from "./pages/ImageKeyword/ImageKeywordLoading.tsx";
import FilterPage from "./pages/FilterPage.tsx";
import AllPerfumePage from "./pages/AllPerfumePage.tsx";
import OnboardingRouter from "./pages/Onboarding/index.tsx";
import PBTIQuestionPage from "./pages/PBTI/PBTIQuestionPage.tsx";
import PBTIResultPage from "./pages/PBTI/PBTIResultPage.tsx";
import DiaryPage from "./pages/Diary/DiaryPage.tsx";
import DiaryWritePage from "./pages/Diary/DiaryWritePage.tsx"; 
import PerfumeDetailPage from "./pages/PerfumeDetailPage.tsx";
import ImageKeywordResultPage from "./pages/ImageKeyword/ImageKeywordResult.tsx";
import PerfumeLabLayout from "./layout/perfumelab-layout.tsx";
import EditScentPreferences from "./pages/MyPage/EditScentPreferences.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

const router = createBrowserRouter([
  // 로그인, 회원가입은 보호 라우트 없이 누구나 접근 가능
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/kakao",
    element: <KakaoSignupPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingRouter />,
  },
  // 아래는 보호 라우트로 감싼 실제 서비스 페이지들
  {
    element: <ProtectedRoute />, // 보호 라우트
    children: [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
          { index: true, element: <Navigate to="/Main" replace /> }, // ✅ 리다이렉트 추가
          { path: 'Main', element: <MainPage /> },
          { path: 'PBTI', element: <PBTIMainPage /> },
          { path: 'Diary', element: <DiaryPage /> },
          { path: 'Diary/new', element: <DiaryWritePage />},
          { path: 'MyPage',
            children: [
              { index: true, element: <MyPage /> },
              { path: "EditScentPreferences", element : <EditScentPreferences/>}
            ]
          },
          { path: 'choose-path', element: <ChoosePathPage /> },
          { path: 'filter', element: <FilterPage /> },
          { 
            path: 'PBTI',
            children: [
              { index: true, element: <PBTIMainPage /> },
              { path: "question", element: <PBTIQuestionPage /> },
              { path: "result", element: <PBTIResultPage /> },
            ],
          },
          { path: "all-perfume", element: <AllPerfumePage /> },
        ],
      },
      {
        path: "/image-keyword",
        children: [
          {
            index: true,
            element: <ImageKeywordPage />,
          },
          {
            path: "loading",
            element: <ImageKeywordLoading />,
          },
          {
            path: "result",
            element: <ImageKeywordResultPage />,
          },
        ],
      },
      {
        path: "/Chatbot",
        element: <ChatbotPage />,
      },
      {
        path: "/lab",
        element: <PerfumeLabLayout />,
        children: [
          {
            index: true,
            element: <PerfumLabPage />,
          },
          {
            path: "loading",
            element: <LabLoadingPage />,
          },
          {
            path: "result",
            element: <LabResultPage />,
          },
        ],
      },
      {
        path: "/perfume/detail",
        element: <PerfumeDetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <div className="w-full min-h-screen h-full bg-black/10 flex justify-center">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
