import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Sidebar() {
    return (        
        <aside className="sidenav bg-default navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none opacity-8 text-white" aria-hidden="true" id="iconSidenav" />
                <Link className="navbar-brand m-0" href={route('home')} target="_blank">
                    <img src="/img/logo-1.png" className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold"> NFT Marketplace</span>
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`${route().current('dashboard') && 'active'} nav-link`} href={route('dashboard')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-tv-2 text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </Link>
                    </li>                    
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Users</h6>
                    </li>
                    <li className="nav-item">
                        <Link className={`${route().current('users.index') && 'active'} nav-link`} href={route('users.index')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-single-02 text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">List Users</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`${route().current('users.reports') && 'active'} nav-link`} href={route('users.reports')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-single-02 text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Report Users</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Categories</h6>
                    </li>                    
                    <li className="nav-item">
                        <Link className={`${route().current('categories') && 'active'} nav-link`} href={route('categories')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fab fa-ubuntu text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Categories</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">FEES</h6>
                    </li>                    
                    <li className="nav-item">
                        <Link className={`${route().current('fees') && 'active'} nav-link`} href={route('fees')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fa fa-dollar text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Fees</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">TRANSACTIONS</h6>
                    </li>                    
                    <li className="nav-item">
                        <Link className={`${route().current('transactions') && 'active'} nav-link`} href={route('transactions')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fa fa-gear text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Transactions</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">SETTINGS</h6>
                    </li>                    
                    <li className="nav-item">
                        <Link className={`${route().current('featured_collections') && 'active'} nav-link`} href={route('featured_collections')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user-lock text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Featured Collections</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " as='a' method='post' href={route('logout')}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="fas fa-sign-out-alt text-danger text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>                
        </aside>
    )
}
