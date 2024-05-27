import { createBrowserRouter } from 'react-router-dom'
import OnboardingPage from '@/pages/onboarding/OnboardingPage'
import UserPage from '@/pages/user/UserPage'
import SetupPage from '@/pages/setup/SetupPage'
import HomePage from '@/pages/home/HomePage'
import CharityPage from '@/pages/charity/CharityPage'
import DetailPage from '@/pages/charity/DetailPage'
import BadgePage from '@/pages/badge/BadgePage'
import ProfilePage from '@/pages/user/ProfilePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OnboardingPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/setup',
    element: <SetupPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/charity',
    element: <CharityPage />,
  },
  {
    path: '/detail/:id',
    element: <DetailPage />,
  },
  {
    path: '/badge',
    element: <BadgePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
])
