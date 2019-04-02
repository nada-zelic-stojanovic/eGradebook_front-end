import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../src/components/MainPage/Main';
import AdminHome from './components/Admin/AdminHome';
import AdminProfile from './components/Admin/AdminProfile';
import ProfileUpdate from './components/Admin/ProfileUpdate';
import UserOptions from './components/Users/UsersOptions';
import TeachersInfoAndSettings from './components/Users/TeachersInfoAndSettings';
import TeacherDetails from './components/Users/TeacherDetails';
import TeacherUpdate from './components/Users/TeacherUpdate';
import StudentsInfoAndSettings from './components/Users/StudentsInfoAndSettings';
import StudentDetails from './components/Users/StudentDetails';
import StudentUpdate from './components/Users/StudentUpdate';
import ParentsInfoAndSettings from './components/Users/ParentsInfoAndSettings';
import ParentDetails from './components/Users/ParentDetails';
import ParentUpdate from './components/Users/ParentUpdate';
import RegisterStudentAndParent from './components/Users/Register/RegisterStudentAndParent';

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
          <Fragment>
            <Switch>
              <Route exact path='/' component={Main}></Route>

              <Route exact path='/admin/home' component={AdminHome}></Route>
              <Route exact path='/admin/profile' component={AdminProfile}></Route>
              <Route exact path='/admin/profile/update' component={ProfileUpdate}></Route>

              <Route exact path='/admin/users' component={UserOptions}></Route>

              <Route exact path='/admin/users/teachers' component={TeachersInfoAndSettings}></Route>
              <Route path='/admin/users/teachers/:id' component={TeacherDetails}></Route>
              <Route path='/admin/users/teachers/update/:id' component={TeacherUpdate}></Route>

              <Route exact path='/admin/users/students' component={StudentsInfoAndSettings}></Route>
              <Route path='/admin/users/students/register' component={RegisterStudentAndParent}></Route>
              <Route path='/admin/users/students/:id' component={StudentDetails}></Route>
              <Route path='/admin/users/students/update/:id' component={StudentUpdate}></Route>

              <Route exact path='/admin/users/parents' component={ParentsInfoAndSettings}></Route>
              <Route path='/admin/users/parents/:id' component={ParentDetails}></Route>
              <Route path='/admin/users/parents/update/:id' component={ParentUpdate}></Route>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
