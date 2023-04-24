import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Fragment } from 'react'

export function DefaultLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}