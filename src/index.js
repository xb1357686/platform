import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'antd';
import ConfigureStore from './stores';
import {
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { isLogin } from "./js/util/utils";
// import Signup from './js/signup.jsx';
// import apptools from './js/apptools';
// import Space from "./js/space.jsx";
// import HomePage from "./js/homePage.jsx";
// import CoursesMD from './js/coursesMD.jsx';
// import Courses from './js/courses.jsx';
// import CoursesList from './js/courseslist.jsx';
// import CoursesSchool from './js/courseSchool.jsx';
// import Footer from './js/footer';
// import Activatemail from './js/user/activatemail';
// import ResetPassWord from './js/user/resetPassWord';
// import Community from './js/community';
// import ApplyStl from './js/applyStl';
// import personalCenter from './js/personalCenter';


import Loadable from './js/commom/loadable.jsx';
import Layout from './js/layout'

const Nav = Loadable(() => import('./js/nav'));
const Signup = Loadable(() => import('./js/login/signup.jsx'));
const apptools = Loadable(() => import('./js/apptools'));
const Space = Loadable(() => import('./js/personalCenter/space'));
const HomePage = Loadable(() => import('./js/homePage'));
const Courses = Loadable(() => import('./js/courses/courses'));
const CoursesList = Loadable(() => import('./js/courses/courseslist'));
const CoursesSchool = Loadable(() => import('./js/courses/courseSchool'));
const MobileTerminalCourses = Loadable(() => import('./js/courses/mobileTerminalCourses'));
const Footer = Loadable(() => import('./js/footer'));
const Activatemail = Loadable(() => import('./js/user/activatemail'));
const AppList = Loadable(() => import('./js/homepageComponent/appList'));
const OutstandingWorks = Loadable(() => import('./js/homepageComponent/outstandingWorks'));
const NewWorks = Loadable(() => import('./js/homepageComponent/newWorks'));
const HcoursesList = Loadable(() => import('./js/homepageComponent/hcoursesList'));
const ResetPassWord = Loadable(() => import('./js/user/resetPassWord'));
const Community = Loadable(() => import('./js/community'));
const ApplyStl = Loadable(() => import('./js/applyStl'));
const personalCenter = Loadable(() => import('./js/personalCenter'));

const Teacher = Loadable(() => import('./js/admin/education/Teacher'));
const Class = Loadable(() => import('./js/admin/education/Class'));
const Product = Loadable(() => import('./js/admin/education/Product'));
const Student = Loadable(() => import('./js/admin/education/Student'));
const Platform = Loadable(() => import('./js/admin/curriculum/Platform'));
const Video = Loadable(() => import('./js/admin/curriculum/Video'));
const My = Loadable(() => import('./js/admin/curriculum/My'));
const Message = Loadable(() => import('./js/admin/setting/Message'));
// const Admin = Loadable(() => import('./js/admin'));
const Admin = Loadable(() => import('./js/admin/layouts/BasicLayout'));




const WrappedResetPassWord = Form.create()(ResetPassWord)
const store = ConfigureStore();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
  }
  componentDidMount = () => {
    window.isLogin = isLogin
  }
  getUserInfo = (data) => {
    this.setState({
      userInfo: data
    })
  }
  
  render() {

    return (
      <HashRouter>
          <div style={{height: '100%', width: '100%'}}>
            <Switch>
              <Route path="/" render={(props) => <Layout {...props} UserInfo={this.state.userInfo} />}></Route>
              {/* <Route path="/admin" component={Admin} /> */}
            </Switch>
            {/* <Route render={(props) => <Nav {...props} UserInfo={this.state.userInfo} />} />
            <Route exact path= "/" component={HomePage} />
            <Route exact path="/courses" component={Courses} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/apptools" component={apptools} />
            <Route exact path="/space" render={(props) => <Space {...props} getUserInfo={this.getUserInfo} />} />
            <Route exact path="/courseslist/:id" render={(props) => <CoursesList {...props} />} />
            <Route exact path="/courseschool" render={(props) => <CoursesSchool {...props} />} />
            <Route exact path="/mobileTerminalCourses" render={(props) => <MobileTerminalCourses {...props} />} />
            <Route exact path="/user/Activatemail" component={Activatemail} />
            <Route exact path="/user/resetPassWord" component={WrappedResetPassWord} />
            <Route exact path="/homepageComponent/appList" component={AppList} />
            <Route exact path="/homepageComponent/outstandingWorks" component={OutstandingWorks} />
            <Route exact path="/homepageComponent/newWorks" component={NewWorks} />
            <Route exact path="/homepageComponent/hcoursesList" component={HcoursesList} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/community/applyStl/:id" component={ApplyStl} />
            <Route exact path="/personalCenter/:userID" component={personalCenter} /> */}

            {/* <Route path="/admin" component={Admin} /> */}
            {/* <Route path="/admin/education/class" render={(props)=> <Class {...props}/>} /> */}
            
            {/* <Route exact path="/admin/education/teacher" component={Teacher}/>
            <Route exact path="/admin/education/product" component={Product}/>
            <Route exact path="/admin/education/student" component={Student}/>
            <Route exact path="/admin/curriculum/platform" component={Platform}/>
            <Route exact path="/admin/curriculum/video" component={Video}/>
            <Route exact path="/admin/curriculum/my" component={My}/>
            <Route exact path="/admin/setting/message" component={Message}/> */}
            {/* <Footer /> */}
          </div>
          
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
