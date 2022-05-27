// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Feedback from '~/pages/Feedback'

// Layouts
import { HeaderOnly } from '~/components/Layouts'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
  { path: '/feedback', component: Feedback, layout: HeaderOnly }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
