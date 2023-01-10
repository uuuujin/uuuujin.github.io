import React from "react";

// import bootstrap stylesheets directly from your JS
//import 'bootstrap/dist/css/bootstrap.css';
import 'sneat-bootstrap-html-admin-template-free/assets/vendor/css/core.css'
import 'sneat-bootstrap-html-admin-template-free/assets/vendor/css/theme-default.css'
//import 'sneat-bootstrap-html-admin-template-free/assets/vendor/fonts/boxicons.css'
//import 'sneat-bootstrap-html-admin-template-free/scss/core.scss';


export default function BootDashboard() {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div className="layout-page">
                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme">
                            <div
                                id="navbar-collapse"
                                className="navbar-nav-right d-flex align-items-center">
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0"></i>
                                        <input type="text" className="form-control border-0 shadow-none"
                                               placeholder="Search..." aria-label="Search..."/>
                                    </div>
                                </div>
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    <li className="nav-item lh-1 me-3">
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-lg-8 mb-4 order-0">

                                        <div className="card">
                                            <h5 className="card-header">Table Basic</h5>
                                            <div className="table-responsive text-nowrap">
                                                {/*요기까지*/}
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Project</th>
                                                        <th>Client</th>
                                                        <th>Users</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="table-border-bottom-0">
                                                    <tr>
                                                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                            <strong>Angular Project</strong></td>
                                                        <td>Albert Cook</td>
                                                        <td>
                                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Lilian Fuller">
                                                                    <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Sophia Wilkerson">
                                                                    <img src="../assets/img/avatars/6.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Christina Parker">
                                                                    <img src="../assets/img/avatars/7.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td><span className="badge bg-label-primary me-1">Active</span>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <button type="button"
                                                                        className="btn p-0 dropdown-toggle hide-arrow"
                                                                        data-bs-toggle="dropdown"><i
                                                                    className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-edit-alt me-1"></i> Edit</a>
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-trash me-1"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fab fa-react fa-lg text-info me-3"></i>
                                                            <strong>React Project</strong></td>
                                                        <td>Barry Hunter</td>
                                                        <td>
                                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Lilian Fuller">
                                                                    <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Sophia Wilkerson">
                                                                    <img src="../assets/img/avatars/6.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Christina Parker">
                                                                    <img src="../assets/img/avatars/7.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td><span
                                                            className="badge bg-label-success me-1">Completed</span>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <button type="button"
                                                                        className="btn p-0 dropdown-toggle hide-arrow"
                                                                        data-bs-toggle="dropdown"><i
                                                                    className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-edit-alt me-2"></i> Edit</a>
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-trash me-2"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i>
                                                            <strong>VueJs Project</strong></td>
                                                        <td>Trevor Baker</td>
                                                        <td>
                                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Lilian Fuller">
                                                                    <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Sophia Wilkerson">
                                                                    <img src="../assets/img/avatars/6.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Christina Parker">
                                                                    <img src="../assets/img/avatars/7.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td><span className="badge bg-label-info me-1">Scheduled</span>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <button type="button"
                                                                        className="btn p-0 dropdown-toggle hide-arrow"
                                                                        data-bs-toggle="dropdown"><i
                                                                    className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-edit-alt me-2"></i> Edit</a>
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-trash me-2"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fab fa-bootstrap fa-lg text-primary me-3"></i>
                                                            <strong>Bootstrap Project</strong></td>
                                                        <td>Jerry Milton</td>
                                                        <td>
                                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Lilian Fuller">
                                                                    <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Sophia Wilkerson">
                                                                    <img src="../assets/img/avatars/6.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                    data-bs-placement="top"
                                                                    className="avatar avatar-xs pull-up" title=""
                                                                    data-bs-original-title="Christina Parker">
                                                                    <img src="../assets/img/avatars/7.png" alt="Avatar"
                                                                         className="rounded-circle"/>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td><span className="badge bg-label-warning me-1">Pending</span>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <button type="button"
                                                                        className="btn p-0 dropdown-toggle hide-arrow"
                                                                        data-bs-toggle="dropdown"><i
                                                                    className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        className="bx bx-edit-alt me-2"></i> Edit</a>
                                                                    <a className="dropdown-item"
                                                                       href="javascript:void(0);"><i
                                                                        class="bx bx-trash me-2"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 order-1">
                                        <div className="card">
                                            <h5 className="card-header">Test Basic</h5>
                                            <div className="card-body">
                                                <span>
                                                Only no-arg methods may be annotated with @Scheduled

                                                서비스 단에서 배치와 api를 같이 사용하는 부분을 만듦.

                                                근데 api는 정상적으로 돌아가는데,

                                                @Scheduled(cron = "0 0 0 * * *")

                                                cron 표현식만 넣으면 오류가 남.


                                                Error starting ApplicationContext. To display the condition evaluation
                                                report re-run your application with 'debug' enabled.
                                                2023-01-10T10:10:36.352+09:00 ERROR 41656 --- [ main]
                                                o.s.boot.SpringApplication : Application run failed

                                                org.springframework.beans.factory.UnsatisfiedDependencyException: Error
                                                creating bean with name 'trafficMonitoringController' defined in file
                                                [C:\tracker_admin\tracker_admin_boot\build\classes\java\main\com\tracker\controller\TrafficMonitoringController.class]:
                                                Unsatisfied dependency expressed through constructor parameter 0: Error
                                                creating bean with name 'trafficMonitoringService' defined in file
                                                [C:\tracker_admin\tracker_admin_boot\build\classes\java\main\com\tracker\service\TrafficMonitoringService.class]:
                                                Encountered invalid @Scheduled method 'dailyTrafficBatch': Only no-arg
                                                methods may be annotated with @Scheduled
                                                at
                                                org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:798)
                                                ~[spring-beans-6.0.3.jar:6.0.3]
                                                at org.springframework.beans.factory.support.Constructo
                                                .
                                                .
                                                .

                                                이런 오류임

                                                여기서

                                                Only no-arg methods may be annotated with @Scheduled는

                                                인수가 없는 메서드에만 @Scheduled 주석을 달 수 있습니다.

                                                이런 얘기로


                                                인수와 매개변수

                                                인수 :: 메서드 호출시 전달하는 값

                                                매개변수 :: 메서드에서 값을 받을 때 사용하는 변수


                                                메서드의 값 반환

                                                메서드는 작업의 결과값을 반환할 수 있다.

                                                반환값은 하나만 가능하다.

                                                라는 뜻으로

                                                배치는 인자값을 받을수 없음.

                                                인수는 메서드 호출 시 전달하는 값.
                                                매개변수는 메서드에서 값을 받을 때 사용하는 변수.

                                                그래서 지금 현재

                                                public void dailyTrafficBatch(String date) {



                                                }
                                                이런 식으로 되어 있는데

                                                string으로 Date를 받으면 안된다는 거였음.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}